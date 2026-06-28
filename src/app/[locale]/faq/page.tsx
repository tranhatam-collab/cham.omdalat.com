import type { Metadata } from "next";
import { HelpCircle, ChevronDown } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";
  return {
    title: isVi ? dict.faq.h1 : dict.faq.h1,
    description: isVi ? dict.faq.h1 : dict.faq.h1,
  };
}

export default async function FaqEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <HelpCircle className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {dict.faq.h1}
        </h1>
      </div>

      <div className="space-y-3">
        {dict.faq.items.map((item, i) => (
          <details key={i} className="group p-6 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm open:shadow-[0_4px_20px_rgba(15,61,46,0.08)] transition-all">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-[family-name:var(--font-heading)] font-semibold text-[--color-om-text] pr-4">
                {item.q}
              </span>
              <ChevronDown className="h-5 w-5 text-[--color-om-green-500] shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm text-[--color-om-muted] leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
