import type { Metadata } from "next";
import { getDictionary, type Locale } from "./dictionary";

type PageMeta = {
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
};

export function generatePageMetadata(
  locale: Locale,
  meta: PageMeta
): Metadata {
  const isVi = locale === "vi";
  const dict = getDictionary(locale);
  return {
    title: isVi ? meta.title : meta.titleEn,
    description: isVi ? meta.desc : meta.descEn,
    alternates: {
      languages: {
        vi: `/vi/${meta.title}`,
        en: `/en/${meta.titleEn}`,
      },
    },
    openGraph: {
      locale: isVi ? "vi_VN" : "en_US",
      siteName: dict.site.name,
      title: isVi ? meta.title : meta.titleEn,
      description: isVi ? meta.desc : meta.descEn,
    },
  };
}
