import Link from "next/link";
import { Clock, ChevronRight, CalendarCheck } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TwentyOneDayEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  const title = isVi ? dict.program.title : dict.program.titleEn;
  const weeks = [dict.program.weeks.week1, dict.program.weeks.week2, dict.program.weeks.week3];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <CalendarCheck className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {title}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-2xl mx-auto">
          {dict.program.subtitle}
        </p>
      </div>

      <div className="relative mb-16">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-[--color-om-green-300] hidden md:block" />
        <div className="space-y-12">
          {weeks.map((week, i) => (
            <div key={i} className="relative pl-0 md:pl-16">
              <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[--color-om-green-700] items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
                  {week.title}
                </h2>
                <ul className="space-y-3 mb-4">
                  {week.activities.map((a, j) => (
                    <li key={j} className="flex items-start gap-3 text-[--color-om-text]">
                      <span className="w-6 h-6 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[--color-om-green-700]">{j + 1}</span>
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-[--radius-om] bg-[--color-om-green-700]/5 border border-[--color-om-green-300]/30">
                  <p className="text-sm text-[--color-om-muted]">
                    <span className="font-semibold text-[--color-om-green-700]">
                      {isVi ? "Kết quả: " : "Output: "}
                    </span>
                    {Array.isArray(week.output) ? week.output.join(", ") : week.output}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm mb-12">
        <p className="text-sm text-[--color-om-muted] italic leading-relaxed">
          {isVi ? dict.program.disclaimer : dict.program.disclaimerEn}
        </p>
      </div>

      <div className="text-center">
        <Link
          href={isVi ? `/${locale}/dang-ky` : `/${locale}/apply`}
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
        >
          {isVi ? "Đăng ký ngay" : "Apply now"}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
