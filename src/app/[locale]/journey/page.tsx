import type { Metadata } from "next";
import Link from "next/link";
import { Award, ChevronRight, ListChecks, Target, Activity } from "lucide-react";
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
    title: isVi ? dict.journey.title : dict.journey.titleEn,
    description: dict.journey.subtitle,
  };
}

export default async function JourneyEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  const title = isVi ? dict.journey.title : dict.journey.titleEn;
  const steps = [
    dict.journey.fourSteps.step1,
    dict.journey.fourSteps.step2,
    dict.journey.fourSteps.step3,
    dict.journey.fourSteps.step4,
  ];
  const stepTitles = steps.map(s => isVi ? s.title : s.titleEn);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Award className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {title}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-2xl mx-auto">
          {dict.journey.subtitle}
        </p>
      </div>

      <div className="space-y-16">
        {steps.map((step, i) => (
          <div key={i} className="p-8 md:p-10 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[--color-om-green-700] flex items-center justify-center shrink-0">
                <span className="font-bold text-white text-lg font-[family-name:var(--font-heading)]">{i + 1}</span>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700]">
                  {stepTitles[i]}
                </h2>
                <p className="text-sm text-[--color-om-muted] italic">
                  {step.question}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-[--color-om-text] uppercase tracking-wider mb-3">
                  <ListChecks className="h-4 w-4 text-[--color-om-green-500]" />
                  {isVi ? "Hoạt động" : "Activities"}
                </h3>
                <ul className="space-y-2">
                  {step.activities.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[--color-om-text]">
                      <span className="text-[--color-om-green-500] mt-0.5">•</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-[--color-om-text] uppercase tracking-wider mb-3">
                  <Target className="h-4 w-4 text-[--color-om-green-500]" />
                  {isVi ? "Kết quả" : "Outputs"}
                </h3>
                <ul className="space-y-2">
                  {step.output.map((o, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[--color-om-text]">
                      <span className="text-[--color-om-green-500] mt-0.5">→</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href={isVi ? `/${locale}/dang-ky` : `/${locale}/apply`}
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
        >
          {isVi ? "Bắt đầu hành trình" : "Start the journey"}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
