"use client";

import { useState, type FormEvent } from "react";
import { Shield, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const password = form.get("password") as string;

    try {
      const res = await fetch("/api/v1/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin/applications");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Invalid credentials");
      }
    } catch {
      setError("Network error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[--color-om-bg]">
      <div className="max-w-sm w-full mx-auto px-4">
        <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-7 w-7 text-[--color-om-green-700]" />
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700]">
              Admin
            </h1>
            <p className="text-sm text-[--color-om-muted] mt-1">
              Chạm Ôm Đà Lạt
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[--color-om-text] mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.9)] text-sm text-[--color-om-text] placeholder:text-[--color-om-muted] focus:outline-none focus:ring-2 focus:ring-[--color-om-green-500]"
                placeholder="••••••••"
              />
            </div>
            {error && (
              <div className="p-3 rounded-[--radius-om] bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 px-6 text-sm font-medium text-white rounded-[--radius-om] transition-all disabled:opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))",
              }}
            >
              {submitting ? (
                <Loader2 className="h-5 w-5 animate-spin mx-auto" />
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
