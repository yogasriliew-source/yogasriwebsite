import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga Sri | 五月元素平衡重启",
  description:
    "Nadi Balance Scan × Hatha Yoga × Ayurveda × Five Elements",
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
    "Yoga Sri",
    "Isha Hatha Yoga",
    "Isha Yoga Malaysia",
    "Sadhguru Gurukulam",
    "Nadi Balance Scan",
    "Ayurveda Malaysia",
    "Ayurvedic Treatment",
    "Panchakarma",
    "Five Elements Purification",
    "五大元素净化",
    "阿育吠陀",
    "哈他瑜伽",
    "吉隆坡瑜伽",
    "马来西亚瑜伽",
  ],
  authors: [{ name: "Yoga Sri" }],
  creator: "Yoga Sri",
  publisher: "Yoga Sri Wellness",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Yoga Sri｜五月元素平衡重启",
    description:
      "Nadi Balance Scan × Isha Hatha Yoga × Ayurveda × 五大元素净化。五月健康重启系列，从身体检测开始，重新理解体质、能量、呼吸与生活节奏。",
    url: siteUrl,
    siteName: "Yoga Sri Wellness",
    locale: "zh_MY",
    alternateLocale: ["en_MY"],
    type: "website",
    images: [
      {
        url: "/yogasriprofile.jpg",
        width: 1200,
        height: 630,
        alt: "Yoga Sri - Sadhguru Gurukulam Certified Hatha Yoga Teacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Sri｜五月元素平衡重启",
    description:
      "Nadi Balance Scan × Isha Hatha Yoga × Ayurveda × 五大元素净化。",
    images: ["/yogasriprofile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f7efe4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-MY">
      <body>{children}</body>
    </html>
  );
}
