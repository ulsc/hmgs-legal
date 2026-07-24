import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  "https://ulsc.github.io/hmgs-legal";
const description =
  "HMGS Sınav Hazırlık gizlilik politikası, KVKK aydınlatma metni, kullanım koşulları ve destek merkezi.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "HMGS Sınav Hazırlık | Bilgi Merkezi",
    template: "%s | HMGS Sınav Hazırlık",
  },
  description,
  openGraph: {
    title: "HMGS Sınav Hazırlık | Bilgi Merkezi",
    description,
    type: "website",
    url: siteOrigin,
    images: [
      {
        url: `${siteOrigin}/og.png`,
        width: 1200,
        height: 630,
        alt: "HMGS Sınav Hazırlık — Gizlilik, Koşullar ve Destek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HMGS Sınav Hazırlık | Bilgi Merkezi",
    description,
    images: [`${siteOrigin}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
