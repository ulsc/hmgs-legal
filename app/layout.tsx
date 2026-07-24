import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description =
    "HMGS Sınav Hazırlık gizlilik politikası, KVKK aydınlatma metni, kullanım koşulları ve destek merkezi.";

  return {
    metadataBase: new URL(origin),
    title: {
      default: "HMGS Sınav Hazırlık | Bilgi Merkezi",
      template: "%s | HMGS Sınav Hazırlık",
    },
    description,
    openGraph: {
      title: "HMGS Sınav Hazırlık | Bilgi Merkezi",
      description,
      type: "website",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
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
      images: [`${origin}/og.png`],
    },
  };
}

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
