import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DiscoverPotentialViPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";
  const step = dict.journey.fourSteps.step1;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Search className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <p className="text-xs md:text-sm tracking-[0.2em] text-[--color-om-green-500] mb-4 font-medium uppercase">
          {isVi ? "Bước 1" : "Step 1"}
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
            ? "Bước đầu tiên là nhìn lại hành trình của chính bạn — không phải để đánh giá, mà để nhận diện những kỹ năng, năng lượng và khả năng chưa được khai phá."
            : "The first step is to look back at your own journey — not to judge, but to identify skills, energy, and untapped abilities."}
        </p>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-6">
        {isVi ? "Hoạt động khám phá" : "Discovery Activities"}
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
        {isVi ? "Kết quả đạt được" : "Outputs"}
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
          href={isVi ? `/${locale}/thu-nghiem` : `/${locale}/experiments`}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-[--radius-om] transition-all"
          style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
        >
          {isVi ? "Bước tiếp: Thử nghiệm" : "Next: Experiments"}
          <ChevronRight className="h-4 w-4" />
        </Link>
        <Link
          href={isVi ? `/${locale}/dang-ky` : `/${locale}/apply`}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[--color-om-green-700] rounded-[--radius-om] border border-[--color-om-green-700] hover:bg-[--color-om-green-700] hover:text-white transition-all"
        >
          {isVi ? "Đăng ký tham gia" : "Apply now"}
        </Link>
      </div>
    </div>
  );
}
