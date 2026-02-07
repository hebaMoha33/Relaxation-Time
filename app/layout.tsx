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

export const metadata: Metadata = {
  title: {
    default: "وقت الاسترخاء | مساج متنقل في الرياض",
    template: "%s | وقت الاسترخاء"
  },
  description:
    "خدمة مساج متنقلة في الرياض تشمل مساج منزلي، مساج فندقي، جلسات استرخاء VIP بأيدي مختصين.",

  keywords: [
    "خدمة مساج متنقلة الرياض",
    "مساج منزلي الرياض",
    "مساج فندقي الرياض",
    "سبا متنقل",
    "Relaxation Time Spa",
    "Mobile Massage Riyadh"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
