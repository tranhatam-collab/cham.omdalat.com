import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";
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
    title: isVi ? dict.what.h1 : dict.what.h1En,
    description: isVi ? dict.what.definition[0] : dict.what.definitionEn[0],
  };
}

export default async function WhatIsChamEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  const definitions = isVi ? dict.what.definition : dict.what.definitionEn;
  const notList = isVi ? dict.what.not : dict.what.notEn;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Sparkles className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? dict.what.h1 : dict.what.h1En}
        </h1>
      </div>

      <div className="space-y-6 mb-16">
        {definitions.map((p, i) => (
          <p key={i} className="text-lg text-[--color-om-text] leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="mb-16 p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-text] mb-6 text-center">
          {isVi ? "Chạm không phải là" : "Cham is not"}
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {notList.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-[--radius-om] bg-[rgba(255,255,255,0.5)]">
              <X className="h-5 w-5 text-[--color-om-green-500] shrink-0 mt-0.5" />
              <span className="text-[--color-om-muted]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] text-center mb-8">
        {isVi ? "Giá trị cốt lõi" : "Core Values"}
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {dict.about.values.map((v, i) => (
          <div key={i} className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm text-center">
            <div className="w-14 h-14 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-[--color-om-green-700] text-2xl font-[family-name:var(--font-heading)]">{i === 0 ? "T" : i === 1 ? "C" : "K"}</span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[--color-om-text] mb-3">{v.title}</h3>
            <p className="text-sm text-[--color-om-muted] leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href={isVi ? `/${locale}/hanh-trinh` : `/${locale}/journey`}
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
        >
          {isVi ? "Khám phá hành trình" : "Explore the journey"}
        </Link>
      </div>
    </div>
  );
}
