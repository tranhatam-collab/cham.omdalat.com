import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Chạm Ôm Đà Lạt | Cham Om Dalat",
    template: "%s | Chạm Ôm Đà Lạt",
  },
  description:
    "Khám phá Đà Lạt qua những trải nghiệm thật — sống, làm, học và kết nối cùng con người nơi đây.",
  keywords: [
    "Đà Lạt",
    "trải nghiệm",
    "sống chậm",
    "làm việc từ xa",
    "Da Lat",
    "experience",
    "slow living",
    "remote work",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
