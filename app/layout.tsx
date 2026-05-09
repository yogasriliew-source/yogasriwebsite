export const metadata = {
  title: "Yoga Sri",
  description: "Classical Hatha Yoga & Ayurveda"
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
