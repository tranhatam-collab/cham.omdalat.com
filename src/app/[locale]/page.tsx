import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, ChevronRight, ArrowRight } from "lucide-react";
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
    title: isVi ? dict.meta.homeTitle : dict.meta.homeTitleEn,
    description: isVi ? dict.meta.homeDesc : dict.meta.homeDescEn,
  };
}

function SectionBlock({ title, body, children }: { title: string; body: string; children?: React.ReactNode }) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[--color-om-green-700] mb-6">{title}</h2>
          {body && <p className="text-lg text-[--color-om-text] leading-relaxed">{body}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

function SectionBlockAlt({ title, body, children }: { title: string; body: string; children?: React.ReactNode }) {
  return (
    <section className="py-24 bg-[rgba(255,255,255,0.4)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[--color-om-green-700] mb-6">{title}</h2>
          {body && <p className="text-lg text-[--color-om-text] leading-relaxed">{body}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  const p = (vi: string, en: string) => isVi ? vi : en;

  const steps = [
    dict.journey.fourSteps.step1,
    dict.journey.fourSteps.step2,
    dict.journey.fourSteps.step3,
    dict.journey.fourSteps.step4,
  ];

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0f3d2e 0%, #1a5c43 50%, #0f3d2e 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm mb-8">
            <Leaf className="h-4 w-4 text-[--color-om-green-500]" />
            <span>{dict.site.name}</span>
          </div>
          <p className="text-xs md:text-sm tracking-[0.2em] text-[--color-om-green-300] mb-6 font-medium uppercase">
            {dict.hero.eyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {dict.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={p(`/${locale}/dang-ky`, `/${locale}/apply`)}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
            >
              {dict.hero.cta}
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href={p(`/${locale}/hanh-trinh`, `/${locale}/journey`)}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-[--radius-om] border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              {dict.hero.cta2}
            </Link>
          </div>
          <p className="mt-12 text-sm text-white/60 max-w-xl mx-auto leading-relaxed italic">
            {dict.hero.trust}
          </p>
        </div>
      </section>

      <SectionBlock title={dict.sections.biggerThanCV.title} body={dict.sections.biggerThanCV.body} />

      <SectionBlockAlt title={dict.sections.fourSteps.title} body={dict.sections.fourSteps.body}>
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {steps.map((step, i) => (
            <div key={i} className="p-6 rounded-[--radius-om] border border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.78)] backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[--color-om-green-700]/10 flex items-center justify-center mb-4">
                <span className="font-bold text-[--color-om-green-700] text-lg">{i + 1}</span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[--color-om-text] mb-2">{step.title}</h3>
              <p className="text-sm text-[--color-om-muted] italic">{step.question}</p>
            </div>
          ))}
        </div>
      </SectionBlockAlt>

      <SectionBlock title={dict.sections.notZero.title} body={dict.sections.notZero.body} />

      <SectionBlockAlt title={dict.sections.realExample.title} body={dict.sections.realExample.body} />

      <SectionBlock title={dict.sections.program21.title} body={dict.sections.program21.body}>
        <div className="text-center mt-8">
          <Link
            href={p(`/${locale}/chuong-trinh/21-ngay-cham`, `/${locale}/programs/21-day-cham-journey`)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-[--radius-om] transition-all"
            style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
          >
            {p("Xem chi tiết", "View details")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionBlock>

      <SectionBlockAlt title={dict.sections.forOrgs.title} body={dict.sections.forOrgs.body}>
        <div className="text-center mt-8">
          <Link
            href={p(`/${locale}/danh-cho-doanh-nghiep`, `/${locale}/for-organizations`)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[--color-om-green-700] rounded-[--radius-om] border border-[--color-om-green-700] hover:bg-[--color-om-green-700] hover:text-white transition-all"
          >
            {p("Tìm hiểu thêm", "Learn more")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionBlockAlt>

      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[--color-om-green-700] mb-8">
            {dict.sections.finalCTA.title}
          </h2>
          <Link
            href={p(`/${locale}/dang-ky`, `/${locale}/apply`)}
            className="inline-flex items-center gap-2 px-10 py-5 text-lg font-medium text-white rounded-[--radius-om] transition-all hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, var(--color-om-green-700), var(--color-om-green-500))" }}
          >
            {dict.hero.cta}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
