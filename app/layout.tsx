import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga Sri | 五月元素平衡重启",
  description: "Nadi Balance Scan × Hatha Yoga × Ayurveda × Five Elements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
