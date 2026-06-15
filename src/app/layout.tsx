import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.danielnguyen.id.vn"),
  title: "NGUYỄN VIẾT DŨNG | Fullstack Developer",
  description: "Portfolio cá nhân của Nguyễn Viết Dũng - Fullstack Developer. Giới thiệu các dự án, kinh nghiệm làm việc và kỹ năng lập trình.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "NGUYỄN VIẾT DŨNG | Fullstack Developer",
    description: "Portfolio cá nhân của Nguyễn Viết Dũng - Fullstack Developer. Giới thiệu các dự án, kinh nghiệm làm việc và kỹ năng lập trình.",
    siteName: "Nguyễn Viết Dũng Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NGUYỄN VIẾT DŨNG | Portfolio Preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased font-body-md overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
