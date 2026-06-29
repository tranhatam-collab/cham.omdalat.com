import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionary";
import FaqPage from "@/components/faq-page";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.faq.h1,
    description: dict.faq.h1,
  };
}

export default async function FaqPageRoute({ params }: Props) {
  const { locale: raw } = await params;
  const locale = (raw === "en" ? "en" : "vi") as Locale;
  const dict = getDictionary(locale);
  return <FaqPage dict={dict} />;
}
