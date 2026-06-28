import { Mail, MapPin, MessageCircle } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Mail className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? "Liên hệ" : "Contact"}
        </h1>
        <p className="text-lg text-[--color-om-muted] max-w-xl mx-auto">
          {isVi
            ? "Chúng tôi luôn sẵn sàng lắng nghe bạn."
            : "We are always here to listen."}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm text-center">
          <div className="w-12 h-12 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6 text-[--color-om-green-700]" />
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[--color-om-text] mb-2">
            Email
          </h2>
          <a href="mailto:cham@omdalat.com" className="text-sm text-[--color-om-green-700] hover:underline">
            cham@omdalat.com
          </a>
        </div>

        <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm text-center">
          <div className="w-12 h-12 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-6 w-6 text-[--color-om-green-700]" />
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[--color-om-text] mb-2">
            {isVi ? "Địa điểm" : "Location"}
          </h2>
          <p className="text-sm text-[--color-om-muted]">
            {isVi ? "Đà Lạt, Việt Nam" : "Da Lat, Vietnam"}
          </p>
        </div>

        <div className="p-8 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm text-center">
          <div className="w-12 h-12 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-6 w-6 text-[--color-om-green-700]" />
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[--color-om-text] mb-2">
            {isVi ? "Phản hồi" : "Response"}
          </h2>
          <p className="text-sm text-[--color-om-muted]">
            {isVi ? "Trong vòng 2-3 ngày làm việc" : "Within 2-3 business days"}
          </p>
        </div>
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
              {isVi ? "Gửi tin nhắn" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
