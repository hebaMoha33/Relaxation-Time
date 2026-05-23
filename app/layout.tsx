import type { Metadata } from "next";
import Script from "next/script";
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
        {/* تحميل Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17945114293"
          strategy="afterInteractive"
        />

        {/* تهيئة Google Ads */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'AW-17945114293');
          `}
        </Script>

        {/* تتبع Conversion عند زيارة الصفحة */}
        <Script id="google-conversion-pageview" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17945114293/wJJ2COXHkrIcELXt8uxC',
              'value': 1.0,
              'currency': 'SAR'
            });
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}