import Link from "next/link";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProgramsEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  const title = isVi ? dict.program.title : dict.program.titleEn;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Calendar className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {title}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-2xl mx-auto">
          {dict.program.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {([dict.program.weeks.week1, dict.program.weeks.week2, dict.program.weeks.week3] as const).map((week, i) => (
          <div key={i} className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-[--color-om-green-700]" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[--color-om-green-700] mb-4">
              {week.title}
            </h2>
            <ul className="space-y-2 mb-4">
              {week.activities.map((a, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-[--color-om-text]">
                  <span className="text-[--color-om-green-500] mt-0.5">•</span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[--color-om-muted] italic">
              {isVi ? "Kết quả: " : "Output: "}
              {Array.isArray(week.output) ? week.output.join(", ") : week.output}
            </p>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm mb-12">
        <p className="text-sm text-[--color-om-muted] italic leading-relaxed">
          {isVi ? dict.program.disclaimer : dict.program.disclaimerEn}
        </p>
      </div>

      <div className="text-center">
        <Link
          href={isVi ? `/${locale}/chuong-trinh/21-ngay-cham` : `/${locale}/programs/21-day-cham-journey`}
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
        >
          {isVi ? "Chi tiết 21 Ngày Chạm" : "21-Day Cham Journey details"}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
