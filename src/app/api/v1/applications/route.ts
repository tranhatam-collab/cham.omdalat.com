import { NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const DATA_FILE = path.join(DATA_DIR, "applications.json");
const AUDIT_FILE = path.join(DATA_DIR, "audit.json");

const CONSENT_VERSION = "2026-06-28-v1";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();

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
      ...body,
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
