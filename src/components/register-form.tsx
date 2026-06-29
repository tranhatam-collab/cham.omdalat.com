"use client";

import { useState, type FormEvent, useEffect, useRef } from "react";
import { Check, Send, Loader2 } from "lucide-react";
import type { Dict, Locale } from "@/lib/dictionary";

type Props = {
  dict: Dict;
  locale: Locale;
};

type SectionKey = keyof Dict["register"]["sections"];

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      getResponse: (widgetId: string) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function RegisterForm({ dict, locale }: Props) {
  const isVi = locale === "vi";
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [requiredConsent, setRequiredConsent] = useState<boolean[]>(
    dict.register.consentRequired.map(() => false)
  );
  const [optionalConsent, setOptionalConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const widgetRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.getElementById("cf-turnstile-script")) return;
    const script = document.createElement("script");
    script.id = "cf-turnstile-script";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const checkTurnstile = setInterval(() => {
      if (window.turnstile && containerRef.current && !widgetRef.current) {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: "0x4AAAAAADsJjHR20q_k4efh",
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(null),
          "error-callback": () => setTurnstileToken(null),
        });
        widgetRef.current = id;
        clearInterval(checkTurnstile);
      }
    }, 200);
    return () => clearInterval(checkTurnstile);
  }, []);

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleRequiredConsent = (index: number) => {
    setRequiredConsent((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (requiredConsent.some((c) => !c)) {
      setError(isVi ? "Vui lòng đồng ý tất cả điều khoản bắt buộc." : "Please consent to all required terms.");
      return;
    }
    if (!turnstileToken) {
      setError(isVi ? "Vui lòng xác nhận bạn không phải robot." : "Please confirm you are not a robot.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/v1/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          requiredConsent,
          optionalConsent,
          locale,
          turnstileToken,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setApplicationId(data.applicationId);
      } else {
        setError(data.error || (isVi ? "Có lỗi xảy ra" : "Something went wrong"));
      }
    } catch {
      setError(isVi ? "Lỗi kết nối" : "Network error");
    } finally {
      setSubmitting(false);
    }
  };

  if (applicationId) {
    return (
      <div className="p-10 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm text-center">
        <div className="w-16 h-16 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-[--color-om-green-700]" />
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? dict.register.successTitle : dict.register.successTitleEn}
        </h2>
        <p className="text-[--color-om-muted] mb-6 leading-relaxed">
          {isVi ? dict.register.successBody : dict.register.successBodyEn}
        </p>
        <p className="text-sm text-[--color-om-text]">
          <span className="font-mono font-bold text-[--color-om-green-700]">
            {isVi ? dict.register.successId : dict.register.successIdEn}
          </span>{" "}
          <span className="font-mono">{applicationId}</span>
        </p>
      </div>
    );
  }

  const sections = dict.register.sections;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {(Object.keys(sections) as SectionKey[]).map((sectionKey) => {
        const section = sections[sectionKey];
        return (
          <div
            key={sectionKey}
            className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[--color-om-green-700] mb-6">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.fields.map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={field.key}
                    className="block text-sm font-medium text-[--color-om-text] mb-1"
                  >
                    {field.name}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.key}
                      rows={3}
                      value={formData[field.key] || ""}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      className="w-full px-4 py-3 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.9)] text-sm text-[--color-om-text] placeholder:text-[--color-om-muted] focus:outline-none focus:ring-2 focus:ring-[--color-om-green-500] resize-y"
                    />
                  ) : (
                    <input
                      id={field.key}
                      type={field.type}
                      value={formData[field.key] || ""}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      className="w-full px-4 py-3 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.9)] text-sm text-[--color-om-text] placeholder:text-[--color-om-muted] focus:outline-none focus:ring-2 focus:ring-[--color-om-green-500]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[--color-om-green-700] mb-6">
          {isVi ? "Đồng ý" : "Consent"}
        </h2>
        <div className="space-y-4">
          {dict.register.consentRequired.map((text, i) => (
            <label
              key={i}
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={requiredConsent[i] || false}
                onChange={() => toggleRequiredConsent(i)}
                className="mt-1 h-4 w-4 rounded border-[rgba(21,49,38,0.3)] text-[--color-om-green-700] focus:ring-[--color-om-green-500]"
              />
              <span className="text-sm text-[--color-om-text] leading-relaxed">{text}</span>
            </label>
          ))}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={optionalConsent}
              onChange={() => setOptionalConsent(!optionalConsent)}
              className="mt-1 h-4 w-4 rounded border-[rgba(21,49,38,0.3)] text-[--color-om-green-700] focus:ring-[--color-om-green-500]"
            />
            <span className="text-sm text-[--color-om-text] leading-relaxed">
              {dict.register.consentOptional}
            </span>
          </label>
        </div>
      </div>

      <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Bảo mật" : "Security"}
        </h2>
        <div ref={containerRef} className="flex justify-center min-h-[65px]" />
      </div>

      {error && (
        <div className="p-4 rounded-[--radius-om] bg-red-50 border border-red-200 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={submitting || !turnstileToken}
          className="inline-flex items-center gap-2 px-10 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background:
              "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))",
          }}
        >
          {submitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
          {dict.register.submit}
        </button>
      </div>
    </form>
  );
}
