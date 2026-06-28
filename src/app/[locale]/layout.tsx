import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isEn = locale === "en";
  return {
    title: {
      default: isEn ? "Cham Om Dalat" : "Chạm Ôm Đà Lạt",
      template: isEn ? "%s | Cham Om Dalat" : "%s | Chạm Ôm Đà Lạt",
    },
    description: isEn ? dict.meta.homeDescEn : dict.meta.homeDesc,
    openGraph: {
      locale: isEn ? "en_US" : "vi_VN",
      siteName: "Cham Om Dalat",
    },
    alternates: {
      languages: {
        vi: "/vi",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const otherLocale = locale === "vi" ? "en" : "vi";

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.overview },
    { href: `/${locale}/cham-la-gi`, label: dict.nav.what, enHref: `/${locale}/what-is-cham` },
    { href: `/${locale}/hanh-trinh`, label: dict.nav.journey, enHref: `/${locale}/journey` },
    { href: `/${locale}/chuong-trinh`, label: dict.nav.programs, enHref: `/${locale}/programs` },
    { href: `/${locale}/bai-viet`, label: dict.nav.articles, enHref: `/${locale}/articles` },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(238,244,239,0.85)] border-b border-[rgba(21,49,38,0.12)]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-[--color-om-text] no-underline">
            <Sparkles className="h-5 w-5 text-[--color-om-green-700]" />
            <span className="font-bold text-lg tracking-tight">
              {locale === "vi" ? "Chạm Ôm" : "Cham Om"}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] rounded-[--radius-om] transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/danh-cho-doanh-nghiep`}
              className="px-3 py-2 text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] rounded-[--radius-om] transition-colors no-underline"
            >
              {dict.nav.forOrgs}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={`/${otherLocale}`}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-[--color-om-green-700] text-[--color-om-green-700] bg-transparent hover:bg-[--color-om-green-700] hover:text-white transition-colors no-underline"
            >
              {dict.nav.otherLocale}
            </Link>
            <Link
              href={`/${locale}/dang-ky`}
              className="px-4 py-2 text-sm font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02] no-underline"
              style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
            >
              {dict.nav.register}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.5)]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href={`/${locale}`} className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-[--color-om-text] mb-3 no-underline">
                <Sparkles className="h-5 w-5 text-[--color-om-green-700]" />
                <span className="font-bold">{locale === "vi" ? "Chạm Ôm" : "Cham Om"}</span>
              </Link>
              <p className="text-sm text-[--color-om-muted] leading-relaxed">{dict.footer.brand}</p>
              <p className="text-sm text-[--color-om-green-700] mt-2 italic">{dict.footer.attribution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[--color-om-text] mb-3">{dict.footer.navigation}</h4>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/cham-la-gi`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.nav.what}</Link></li>
                <li><Link href={`/${locale}/hanh-trinh`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.nav.journey}</Link></li>
                <li><Link href={`/${locale}/chuong-trinh/21-ngay-cham`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.nav.programs}</Link></li>
                <li><Link href={`/${locale}/bai-viet`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.nav.articles}</Link></li>
                <li><Link href={`/${locale}/danh-cho-doanh-nghiep`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.nav.forOrgs}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[--color-om-text] mb-3">{dict.footer.info}</h4>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/dang-ky`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.nav.register}</Link></li>
                <li><Link href={`/${locale}/cau-hoi-thuong-gap`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{locale === "vi" ? "FAQ" : "FAQ"}</Link></li>
                <li><Link href={`/${locale}/quyen-rieng-tu`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.footer.privacy}</Link></li>
                <li><Link href={`/${locale}/dieu-khoan`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.footer.terms}</Link></li>
                <li><Link href={`/${locale}/lien-he`} className="text-sm text-[--color-om-muted] hover:text-[--color-om-green-700] transition-colors no-underline">{dict.footer.contact}</Link></li>
                <li><a href="https://omdalat.com" className="text-sm text-[--color-om-green-700] hover:underline transition-colors">{dict.footer.omdalat}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[rgba(21,49,38,0.12)] text-center text-xs text-[--color-om-muted]">
            &copy; {new Date().getFullYear()} {locale === "vi" ? "Chạm Ôm Đà Lạt" : "Cham Om Dalat"} &mdash; {dict.footer.attribution}
          </div>
        </div>
      </footer>
    </div>
  );
}
