import type { MetadataRoute } from "next";

const BASE = "https://cham.omdalat.com";

const locales = ["vi", "en"] as const;

const staticRoutes: Record<string, string[]> = {
  vi: [
    "", "cham-la-gi", "hanh-trinh", "chuong-trinh", "chuong-trinh/21-ngay-cham",
    "bai-viet", "cau-chuyen", "dang-ky", "cau-hoi-thuong-gap",
    "quyen-rieng-tu", "dieu-khoan", "lien-he", "danh-cho-doanh-nghiep",
    "kham-pha-tiem-nang", "thu-nghiem", "tao-gia-tri", "trao-lai",
    "tham-gia", "gioi-thieu", "co-hoi", "trai-nghiem",
  ],
  en: [
    "", "what-is-cham", "journey", "programs", "programs/21-day-cham-journey",
    "articles", "stories", "apply", "faq",
    "privacy", "terms", "contact", "for-organizations",
    "discover-potential", "experiments", "create-value", "give-back",
    "discover-potential", "what-is-cham", "opportunities",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const routes = staticRoutes[locale];
    for (const route of routes) {
      entries.push({
        url: `${BASE}/${locale}/${route}`.replace(/\/$/,""),
        lastModified: new Date(),
        changeFrequency: route === "" ? "monthly" : "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            vi: `${BASE}/vi/${route === "" ? "" : route}`,
            en: `${BASE}/en/${route === "" ? "" : route}`,
          },
        },
      });
    }
  }

  return entries;
}
