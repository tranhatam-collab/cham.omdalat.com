import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ChevronRight, Target, Users, Shield } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ForOrgsViPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Building2 className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Dành cho tổ chức" : "For Organizations"}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-2xl mx-auto">
          {dict.sections.forOrgs.body}
        </p>
      </div>

      <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Chạm cho tổ chức của bạn" : "Cham for your organization"}
        </h2>
        <p className="text-[--color-om-text] leading-relaxed">
          {isVi
            ? "Chạm giúp các tổ chức tạo ra những project nhỏ có phạm vi rõ ràng, đầu ra cụ thể, quyền sở hữu được xác định và trạng thái trả phí minh bạch. Nhân viên có thể thử nghiệm hướng đi mới trong một môi trường an toàn, có cấu trúc."
            : "Cham helps organizations create small projects with clear scope, concrete outputs, defined ownership, and transparent paid status. Employees can test new directions in a safe, structured environment."}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Target, title: isVi ? "Phạm vi rõ" : "Clear scope", desc: isVi ? "Mỗi project có phạm vi xác định, thời gian và nguồn lực rõ ràng." : "Every project has a defined scope, timeline, and resources." },
          { icon: Users, title: isVi ? "Quyền sở hữu" : "Ownership", desc: isVi ? "Nhân viên chủ động quản lý project với sự hỗ trợ từ tổ chức." : "Employees actively manage projects with organizational support." },
          { icon: Shield, title: isVi ? "Trạng thái trả phí" : "Paid status", desc: isVi ? "Các project có trạng thái trả phí rõ ràng, không mập mờ." : "Projects have clear paid status, with no ambiguity." },
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mb-4">
              <item.icon className="h-6 w-6 text-[--color-om-green-700]" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[--color-om-text] mb-3">{item.title}</h3>
            <p className="text-sm text-[--color-om-muted] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="mailto:cham@omdalat.com"
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
        >
          {isVi ? "Liên hệ với chúng tôi" : "Contact us"}
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
