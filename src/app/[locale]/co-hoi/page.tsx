import { Briefcase } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpportunitiesPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Briefcase className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Cơ hội" : "Opportunities"}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-2xl mx-auto">
          {isVi
            ? "Những cơ hội từ cộng đồng Chạm."
            : "Opportunities from the Cham community."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-8 rounded-[--radius-om] border border-dashed border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.4)] text-center"
          >
            <Briefcase className="h-8 w-8 text-[--color-om-green-300] mx-auto mb-4" />
            <p className="text-sm text-[--color-om-muted] italic">
              {isVi ? "Cơ hội sắp được đăng" : "Opportunity coming soon"}
            </p>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] text-center">
        <p className="text-[--color-om-muted] mb-4">
          {isVi
            ? "Bạn có một cơ hội muốn chia sẻ?"
            : "Have an opportunity to share?"}
        </p>
        <a
          href="mailto:cham@omdalat.com"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-[--radius-om] transition-all"
          style={{
            background:
              "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))",
          }}
        >
          {isVi ? "Liên hệ chúng tôi" : "Contact us"}
        </a>
      </div>
    </div>
  );
}
