import Link from "next/link";
import { Frown } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

export default async function LocaleNotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <Frown className="h-16 w-16 text-[--color-om-green-300] mx-auto mb-6" />
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[--color-om-text] mb-3">
          {dict.notFound.title}
        </h2>
        <p className="text-[--color-om-muted] mb-8 max-w-md mx-auto">
          {dict.notFound.body}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))",
          }}
        >
          {dict.notFound.cta}
        </Link>
      </div>
    </div>
  );
}
