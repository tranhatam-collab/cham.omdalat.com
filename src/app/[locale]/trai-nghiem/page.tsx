import { Sparkles } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ExperiencesPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

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
          <Sparkles className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Trải nghiệm" : "Experiences"}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-2xl mx-auto">
          {isVi
            ? "Khám phá những trải nghiệm thật tại Đà Lạt."
            : "Discover real experiences in Da Lat."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mb-4">
              <span className="font-bold text-[--color-om-green-700] text-lg">{i + 1}</span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[--color-om-text] mb-2">
              {stepTitles[i]}
            </h2>
            <p className="text-sm text-[--color-om-muted] italic mb-3">
              {step.question}
            </p>
            <div className="flex flex-wrap gap-2">
              {step.activities.slice(0, 3).map((a, j) => (
                <span
                  key={j}
                  className="inline-block px-3 py-1 text-xs font-medium text-[--color-om-green-700] bg-[--color-om-green-700]/10 rounded-full"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
