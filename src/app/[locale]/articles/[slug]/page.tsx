import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ArticleDetailEnPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href={isVi ? `/${locale}/bai-viet` : `/${locale}/articles`}
        className="inline-flex items-center gap-2 text-sm text-[--color-om-green-700] hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        {isVi ? "Quay lại bài viết" : "Back to articles"}
      </Link>

      <div className="p-12 rounded-[--radius-om] border border-dashed border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.4)] text-center">
        <FileText className="h-12 w-12 text-[--color-om-green-300] mx-auto mb-6" />
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[--color-om-text] mb-4">
          {isVi ? "Bài viết đang được viết" : "Article being written"}
        </h1>
        <p className="text-[--color-om-muted] mb-2">
          {isVi ? `Slug: ${slug}` : `Slug: ${slug}`}
        </p>
        <p className="text-sm text-[--color-om-muted]">
          {isVi
            ? "Bài viết này chưa có nội dung. Vui lòng quay lại sau."
            : "This article does not have content yet. Please check back later."}
        </p>
      </div>
    </div>
  );
}
