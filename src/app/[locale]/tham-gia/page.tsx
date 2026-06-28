import { Sparkles } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function JoinPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Sparkles className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Tham gia" : "Join"}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-xl mx-auto">
          {isVi
            ? "Bắt đầu hành trình của bạn với Chạm."
            : "Start your journey with Cham."}
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="text-center">
            <div className="w-16 h-16 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-[--color-om-green-700] text-xl">
                {String(i).padStart(2, "0")}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[--color-om-text] mb-3">
              {isVi
                ? ["Khám phá", "Thử nghiệm", "Tạo giá trị", "Trao lại"][i - 1]
                : ["Discover", "Experiment", "Create", "Give Back"][i - 1]}
            </h2>
            <p className="text-sm text-[--color-om-muted] leading-relaxed">
              {isVi
                ? ["Nhìn lại hành trình, nhận diện kỹ năng và khả năng chưa khai phá.", "Thiết kế thử nghiệm nhỏ, kiểm chứng giả thuyết bằng hành động thật.", "Xây dựng bằng chứng thành giá trị thực cho người khác.", "Mentor, chia sẻ và mở cơ hội cho cộng đồng."][i - 1]
                : ["Look back at your journey, identify skills and untapped abilities.", "Design small experiments, test hypotheses through real action.", "Turn evidence into real value for others.", "Mentor, share, and create opportunities for the community."][i - 1]}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-lg mx-auto">
        <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
          <form
            action="mailto:cham@omdalat.com"
            method="GET"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-[--color-om-text] mb-1">
                {isVi ? "Họ và tên" : "Full name"}
              </label>
              <input
                name="subject"
                required
                className="w-full px-4 py-3 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.9)] text-sm text-[--color-om-text] placeholder:text-[--color-om-muted] focus:outline-none focus:ring-2 focus:ring-[--color-om-green-500]"
                placeholder={isVi ? "Tên của bạn" : "Your name"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[--color-om-text] mb-1">
                Email
              </label>
              <input
                type="email"
                name="body"
                required
                className="w-full px-4 py-3 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.9)] text-sm text-[--color-om-text] placeholder:text-[--color-om-muted] focus:outline-none focus:ring-2 focus:ring-[--color-om-green-500]"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-sm font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))",
              }}
            >
              {isVi ? "Gửi thông tin" : "Send info"}
            </button>
          </form>
          <p className="text-xs text-[--color-om-muted] text-center mt-4">
            {isVi
              ? "Chúng tôi sẽ phản hồi trong vòng 2-3 ngày làm việc."
              : "We'll respond within 2-3 business days."}
          </p>
        </div>
      </div>
    </div>
  );
}
