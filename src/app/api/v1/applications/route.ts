import { NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const DATA_FILE = path.join(DATA_DIR, "applications.json");
const AUDIT_FILE = path.join(DATA_DIR, "audit.json");

const CONSENT_VERSION = "2026-06-28-v1";
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET || "0x4AAAAAADsJjFdzrv_34FGPBUoIX6jK8go";

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per window per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

function readJson(filePath: string): Record<string, unknown>[] {
  try {
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeJson(filePath: string, data: Record<string, unknown>[]): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

function appendAuditEvent(event: Record<string, unknown>): void {
  const events = readJson(AUDIT_FILE);
  events.push({ ...event, timestamp: new Date().toISOString() });
  writeJson(AUDIT_FILE, events);
}

function generateId(): string {
  const ts = Date.now();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `CHAM-${ts}-${rand}`;
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: TURNSTILE_SECRET,
          response: token,
        }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Verify Turnstile token
    if (!body.turnstileToken) {
      return NextResponse.json(
        { error: "Security check required." },
        { status: 400 }
      );
    }
    const isValid = await verifyTurnstileToken(body.turnstileToken);
    if (!isValid) {
      return NextResponse.json(
        { error: "Security check failed." },
        { status: 400 }
      );
    }

    const requiredFields = ["full_name", "email"];
    for (const field of requiredFields) {
      if (!body[field] || (typeof body[field] === "string" && body[field].trim() === "")) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const applicationId = generateId();

    const application: Record<string, unknown> = {
      applicationId,
      full_name: body.full_name,
      email: body.email,
      phone: body.phone || "",
      current_location: body.current_location || "",
      preferred_language: body.preferred_language || "",
      timezone: body.timezone || "",
      current_role: body.current_role || "",
      years_experience: body.years_experience || "",
      current_tension: body.current_tension || "",
      wants_to_stop: body.wants_to_stop || "",
      wants_to_try: body.wants_to_try || "",
      recognized_skills: body.recognized_skills || "",
      underused_strengths: body.underused_strengths || "",
      portfolio_url: body.portfolio_url || "",
      proud_project: body.proud_project || "",
      change_story: body.change_story || "",
      weekly_hours: body.weekly_hours || "",
      desired_path: body.desired_path || "",
      ready_for_experiment: body.ready_for_experiment || "",
      paid_program_interest: body.paid_program_interest || "",
      budget_range: body.budget_range || "",
      start_window: body.start_window || "",
      requiredConsent: body.requiredConsent || [],
      optionalConsent: Boolean(body.optionalConsent),
      locale: body.locale || "vi",
      consentVersion: CONSENT_VERSION,
      createdAt: new Date().toISOString(),
    };

    const applications = readJson(DATA_FILE);
    applications.push(application);
    writeJson(DATA_FILE, applications);

    appendAuditEvent({
      event: "application.created",
      applicationId,
      actor: body.full_name || "anonymous",
      metadata: {
        hasRequiredConsent: Array.isArray(body.requiredConsent)
          ? body.requiredConsent.every(Boolean)
          : false,
        hasOptionalConsent: Boolean(body.optionalConsent),
        locale: body.locale || "vi",
      },
    });

    return NextResponse.json({ applicationId }, { status: 201 });
  } catch (err) {
    console.error("Application submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const applications = readJson(DATA_FILE);
  return NextResponse.json(applications);
}
