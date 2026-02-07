"use client";

import { motion, easeInOut } from "framer-motion";

export default function FloatingButtons() {
  const whatsappNumber = "966549038626";
  const phoneNumber = "tel:+966549038626";

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
    boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
    backdropFilter: "blur(6px)",
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
        animate={pulse}
        whileHover={{ scale: 1.12 }}
        style={{
          ...baseStyle,
          background:
            "linear-gradient(145deg, #d4af37 0%, #b8962e 100%)",
        }}
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4L21 21l-4.1-1.5a8.5 8.5 0 1 1 4.1-8z" />
          <path d="M8.5 9.5c.2-.3.4-.3.6-.3h.5c.2 0 .4.1.5.3l.8 1.9c.1.2.1.4 0 .5l-.5.6c-.1.1-.1.3 0 .4.4.7 1 1.3 1.7 1.7.1.1.3.1.4 0l.6-.5c.1-.1.3-.1.5 0l1.9.8c.2.1.3.3.3.5v.5c0 .2 0 .4-.3.6-.3.3-.9.6-1.5.6-1.5 0-3.5-1.2-4.9-2.6-1.4-1.4-2.6-3.4-2.6-4.9 0-.6.3-1.2.6-1.5z" />
        </svg>
      </motion.a>

      {/* زر الاتصال */}
      <motion.a
        href={phoneNumber}
        animate={pulse}
        whileHover={{ scale: 1.12 }}
        transition={{ delay: 0.4 }}
        style={{
          ...baseStyle,
          background: "rgba(0,0,0,0.8)",
          border: "1px solid rgba(212,175,55,0.6)",
        }}
        aria-label="Call"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L9 10a16 16 0 0 0 5 5l.7-.1a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z" />
        </svg>
      </motion.a>
    </div>
  );
}
