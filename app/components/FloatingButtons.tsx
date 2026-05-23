"use client";

import { useEffect } from "react";
import { motion, easeInOut } from "framer-motion";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function FloatingButtons() {
  const whatsappNumber = "966549038626";
  const phoneNumber = "tel:+966549038626";

  useEffect(() => {
    // تحميل Google Tag
    const script = document.createElement("script");
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-17945114293";
    script.async = true;

    document.head.appendChild(script);

    // إعداد gtag
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", "AW-17945114293");
  }, []);

  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: easeInOut,
    },
  };

  const baseStyle: React.CSSProperties = {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(184,147,33,0.18)",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        zIndex: 9999,
      }}
    >
      {/* بقية الكود */}
    </div>
  );
}