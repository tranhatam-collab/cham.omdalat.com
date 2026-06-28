import type { Metadata } from "next";
import { Scale } from "lucide-react";
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
    title: isVi ? dict.footer.terms : "Terms of Service",
    description: isVi ? `Điều khoản sử dụng của ${dict.site.name}` : `Terms of Service of ${dict.site.name}`,
  };
}

export default async function TermsViPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Scale className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Điều khoản sử dụng" : "Terms of Service"}
        </h1>
      </div>

      <div className="space-y-8 text-[--color-om-text] leading-relaxed">
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "1. Chấp nhận điều khoản" : "1. Acceptance of terms"}
          </h2>
          <p>
            {isVi
              ? "Khi sử dụng trang web và dịch vụ của Chạm Ôm Đà Lạt, bạn đồng ý với các điều khoản này. Nếu không đồng ý, vui lòng không sử dụng dịch vụ."
              : "By using the Cham Om Dalat website and services, you agree to these terms. If you do not agree, please do not use the services."}
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "2. Mô tả dịch vụ" : "2. Service description"}
          </h2>
          <p>
            {isVi
              ? "Chạm Ôm Đà Lạt cung cấp hành trình phát triển tiềm năng con người thông qua các hoạt động tự nhận biết, thử nghiệm, tạo giá trị và trao lại. Chạm không phải dịch vụ tư vấn tâm lý, tuyển dụng hay đào tạo nghề nghiệp."
              : "Cham Om Dalat provides a human potential journey through self-awareness, experimentation, value creation, and giving back. Cham is not a psychological counseling, recruitment, or vocational training service."}
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "3. Trách nhiệm của người dùng" : "3. User responsibilities"}
          </h2>
          <p>
            {isVi
              ? "Người dùng cam kết cung cấp thông tin chính xác và chịu trách nhiệm về quyết định của mình trong suốt hành trình. Chạm không chịu trách nhiệm cho các quyết định cá nhân của người dùng."
              : "Users commit to providing accurate information and are responsible for their own decisions throughout the journey. Cham is not liable for users' personal decisions."}
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "4. Giới hạn trách nhiệm" : "4. Limitation of liability"}
          </h2>
          <p>
            {isVi
              ? "Chạm Ôm Đà Lạt không bảo đảm việc làm, tăng thu nhập, chuyển đổi nghề nghiệp hoặc kết quả cụ thể nào. Giá trị của hành trình phụ thuộc vào sự tham gia và hoàn cảnh của mỗi người."
              : "Cham Om Dalat does not guarantee employment, income growth, career change, or any specific outcome. The value of the journey depends on each individual's participation and circumstances."}
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "5. Liên hệ" : "5. Contact"}
          </h2>
          <p>
            {isVi
              ? "Mọi thắc mắc về điều khoản, vui lòng liên hệ:"
              : "For questions about these terms, please contact:"}
          </p>
          <a
            href="mailto:cham@omdalat.com"
            className="text-[--color-om-green-700] hover:underline"
          >
            cham@omdalat.com
          </a>
        </section>

        <p className="text-sm text-[--color-om-muted] pt-8 border-t border-[rgba(21,49,38,0.12)]">
          {isVi ? "Cập nhật lần cuối: 2025" : "Last updated: 2025"}
        </p>
      </div>
    </div>
  );
}
