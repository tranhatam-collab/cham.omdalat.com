import Link from "next/link";
import { BookOpen, ChevronRight, Quote } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function StoriesViPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <BookOpen className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Câu chuyện" : "Stories"}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-2xl mx-auto">
          {isVi
            ? "Những hành trình thật từ những người đã và đang đi qua Chạm."
            : "Real journeys from people who have walked through Cham."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-8 rounded-[--radius-om] border border-dashed border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.4)] text-center">
            <Quote className="h-8 w-8 text-[--color-om-green-300] mx-auto mb-4" />
            <p className="text-sm text-[--color-om-muted] italic mb-4">
              {isVi ? "Câu chuyện đang được viết..." : "Story being written..."}
            </p>
            <div className="w-16 h-1 bg-[--color-om-green-300] rounded-full mx-auto" />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href={isVi ? `/${locale}/dang-ky` : `/${locale}/apply`}
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
        >
          {isVi ? "Viết câu chuyện của bạn" : "Write your story"}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
