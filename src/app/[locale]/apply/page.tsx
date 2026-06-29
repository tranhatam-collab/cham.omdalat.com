import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionary";
import RegisterForm from "@/components/register-form";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";
  return {
    title: isVi ? dict.register.h1 : dict.register.h1En,
    description: isVi ? dict.register.h1 : dict.register.h1En,
  };
}

export default async function RegisterEnPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  const isVi = locale === "vi";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-om-green-700]/10 text-[--color-om-green-700] text-sm mb-4">
          <Sparkles className="h-4 w-4" />
          <span>{dict.site.name}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[--color-om-green-700] mb-4">
          {isVi ? dict.register.h1 : dict.register.h1En}
        </h1>
      </div>

      <RegisterForm dict={dict} locale={locale} />
    </div>
  );
}
