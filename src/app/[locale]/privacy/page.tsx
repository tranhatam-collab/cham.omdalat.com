import type { Metadata } from "next";
import { Shield } from "lucide-react";
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
    title: isVi ? dict.footer.privacy : "Privacy Policy",
    description: isVi ? `Chính sách quyền riêng tư của ${dict.site.name}` : `Privacy Policy of ${dict.site.name}`,
  };
}

export default async function PrivacyEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Shield className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Quyền riêng tư" : "Privacy"}
        </h1>
      </div>

      <div className="space-y-8 text-[--color-om-text] leading-relaxed">
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "1. Thông tin chúng tôi thu thập" : "1. Information we collect"}
          </h2>
          <p>
            {isVi
              ? "Chúng tôi thu thập thông tin bạn cung cấp qua biểu mẫu đăng ký, bao gồm họ tên, email, số điện thoại, vị trí địa lý, thông tin về công việc, kỹ năng và mức sẵn sàng tham gia chương trình."
              : "We collect information you provide through the application form, including full name, email, phone number, location, work information, skills, and readiness to participate."}
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "2. Mục đích sử dụng" : "2. How we use your information"}
          </h2>
          <p>
            {isVi
              ? "Thông tin của bạn được sử dụng để xem xét hồ sơ, liên hệ trao đổi về chương trình, cải thiện trải nghiệm và gửi thông tin liên quan nếu bạn đồng ý."
              : "Your information is used for application review, communication about programs, improving experience, and sending relevant information if you consent."}
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "3. Chia sẻ dữ liệu" : "3. Data sharing"}
          </h2>
          <p>
            {isVi
              ? "Chúng tôi không bán, cho thuê hoặc chia sẻ dữ liệu cá nhân của bạn cho bên thứ ba, trừ khi có yêu cầu pháp lý."
              : "We do not sell, rent, or share your personal data with third parties, except when required by law."}
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "4. Quyền của bạn" : "4. Your rights"}
          </h2>
          <p>
            {isVi
              ? "Bạn có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân của mình bất kỳ lúc nào bằng cách liên hệ với chúng tôi."
              : "You have the right to request access, correction, or deletion of your personal data at any time by contacting us."}
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] mb-4">
            {isVi ? "5. Liên hệ" : "5. Contact"}
          </h2>
          <p>
            {isVi
              ? "Mọi thắc mắc về quyền riêng tư, vui lòng liên hệ:"
              : "For privacy-related inquiries, please contact:"}
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
