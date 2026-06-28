import { Sparkles, Heart, Clock, Users } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  const icons = [Heart, Clock, Users];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Sparkles className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Giới thiệu" : "About"}
        </h1>
      </div>

      <div className="space-y-6 mb-16">
        <p className="text-lg text-[--color-om-text] leading-relaxed">
          {isVi
            ? "Chạm Ôm Đà Lạt là một hành trình phát triển tiềm năng con người, bắt đầu từ tự nhận biết, đi qua thử nghiệm nhỏ trong đời sống thật, chuyển hóa thành bằng chứng năng lực, rồi mở ra khả năng đóng góp và trao cơ hội cho người khác."
            : "Cham Om Dalat is a human potential journey that begins with self-awareness, moves through small real-world experiments, turns emerging ability into evidence, and eventually enables people to contribute and create opportunities for others."}
        </p>
        <p className="text-lg text-[--color-om-text] leading-relaxed">
          {isVi
            ? "Chạm giúp bạn nhìn thấy khả năng chưa được gọi tên, thử chúng trong đời sống thật, tạo bằng chứng có thể kiểm tra và từng bước làm chủ hướng đi của chính mình."
            : "Cham helps you recognize unnamed potential, test it in real life, create verifiable evidence, and gradually take ownership of your own direction."}
        </p>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-om-green-700] text-center mb-8">
        {isVi ? "Giá trị cốt lõi" : "Core Values"}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {dict.about.values.map((v, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-[--color-om-green-700]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[--color-om-text] mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-[--color-om-muted] leading-relaxed">
                {v.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)]">
        <p className="text-sm text-[--color-om-muted] text-center leading-relaxed">
          {isVi
            ? "Chạm Ôm Đà Lạt là một dự án độc lập thuộc hệ sinh thái Ôm Đà Lạt — một hệ thương hiệu địa phương giúp người dân, hộ kinh doanh và tổ chức tại Đà Lạt xây dựng hiện diện số rõ ràng, song ngữ và phát triển dài hạn."
            : "Cham Om Dalat is an independent project within the Om Dalat ecosystem — a local brand system helping people, businesses, and organizations in Da Lat build clear, bilingual, long-term digital presence."}
        </p>
        <div className="text-center mt-4">
          <a
            href="https://brand.omdalat.com"
            className="text-sm text-[--color-om-green-700] hover:underline"
          >
            brand.omdalat.com
          </a>
          <span className="text-[--color-om-muted] mx-2">&middot;</span>
          <a
            href="https://omdalat.com"
            className="text-sm text-[--color-om-green-700] hover:underline"
          >
            omdalat.com
          </a>
        </div>
      </div>
    </div>
  );
}
