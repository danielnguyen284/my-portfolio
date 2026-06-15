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
  title: "NGUYEN VIET DUNG | Technical Partner & AI Integrator",
  description: "Portfolio of Nguyen Viet Dung, an expert Technical Partner & AI Integrator. I build, manage, and scale end-to-end web ecosystems powered by modern AI.",
  icons: {
    icon: "/favicon.ico",
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
