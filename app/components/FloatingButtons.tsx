"use client";

import { motion, easeInOut } from "framer-motion";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function FloatingButtons() {
  const whatsappNumber = "966549038626";
  const phoneNumber = "tel:+966549038626";

  const trackConversion = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17945114293/INzPCPGKp7IcELXt8uxC",
      });
    }
  };

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
      {/* زر واتساب */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackConversion}
        animate={pulse}
        whileHover={{ scale: 1.12 }}
        style={{
          ...baseStyle,
          background:
            "linear-gradient(145deg, #d4af37 0%, #b89321 100%)",
        }}
      >
        WhatsApp
      </motion.a>

      {/* زر الاتصال */}
      <motion.a
        href={phoneNumber}
        onClick={trackConversion}
        animate={pulse}
        whileHover={{ scale: 1.12 }}
        style={{
          ...baseStyle,
          background: "#fcfbf7",
        }}
      >
        Call
      </motion.a>
    </div>
  );
}