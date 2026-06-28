import Link from "next/link";
import { Frown } from "lucide-react";

export default function RootNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[--color-om-bg]">
      <div className="text-center px-4">
        <Frown className="h-16 w-16 text-[--color-om-green-300] mx-auto mb-6" />
        <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[--color-om-green-700] mb-4">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[--color-om-text] mb-3">
          Page not found / Trang không tìm thấy
        </h2>
        <p className="text-[--color-om-muted] mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
          <br />
          Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/vi"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))",
            }}
          >
            Trang chủ (VI)
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))",
            }}
          >
            Home (EN)
          </Link>
        </div>
      </div>
    </div>
  );
}
