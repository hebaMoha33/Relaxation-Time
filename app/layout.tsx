import type { Metadata } from "next";
import Script from "next/script"; // استيراد ميزة السكربت المحسن من Next.js
import "./globals.css";

export const metadata: Metadata = {
  title: "Relaxation Time",
  description: "الموقع الرسمي",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ملف Google Tag الأساسي */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17945114293"
          strategy="afterInteractive"
        />
        {/* كود التهيئة المخصص لتتبع الزيارات */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17945114293');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}