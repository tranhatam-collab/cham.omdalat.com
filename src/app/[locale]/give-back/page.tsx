import Link from "next/link";
import { Heart, ChevronRight } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function GiveBackEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";
  const step = dict.journey.fourSteps.step4;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Heart className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <p className="text-xs md:text-sm tracking-[0.2em] text-[--color-om-green-500] mb-4 font-medium uppercase">
          {isVi ? "Bước 4" : "Step 4"}
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? step.title : step.titleEn}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-xl mx-auto italic">
          {step.question}
        </p>
      </div>

      <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm mb-8">
        <p className="text-[--color-om-text] leading-relaxed mb-6">
          {isVi
            ? "Hành trình không kết thúc với bạn. Những gì bạn học được có thể mở ra cơ hội cho những người khác đang trên con đường tương tự."
            : "The journey doesn't end with you. What you've learned can open doors for others on a similar path."}
        </p>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-6">
        {isVi ? "Cách trao lại" : "Ways to Give Back"}
      </h2>
      <div className="space-y-3 mb-12">
        {step.activities.map((a, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-[--radius-om] bg-[rgba(255,255,255,0.78)] border border-[rgba(21,49,38,0.12)]">
            <div className="w-8 h-8 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-[--color-om-green-700]">{i + 1}</span>
            </div>
            <span className="text-[--color-om-text] leading-relaxed pt-1">{a}</span>
          </div>
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-6">
        {isVi ? "Kết quả" : "Outputs"}
      </h2>
      <div className="grid md:grid-cols-2 gap-3 mb-16">
        {step.output.map((o, i) => (
          <div key={i} className="p-4 rounded-[--radius-om] bg-[rgba(255,255,255,0.5)] border border-[rgba(21,49,38,0.12)] text-sm text-[--color-om-text]">
            → {o}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
