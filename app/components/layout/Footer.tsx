import React from "react";
import { SPA_NAME_AR, SPA_NAME_EN } from "@/constants/spa";

const Footer = () => {
  return (
    <footer className="py-16 text-center border-t border-[#d4af37]/10 bg-[#fcfbf7]">
      
      <div className="text-2xl text-[#b89321] mb-2">
        {SPA_NAME_AR}
      </div>

      <div className="text-sm text-[#8c7a4b] uppercase tracking-widest mb-6">
        {SPA_NAME_EN}
      </div>

      <p className="text-[#5f5f5f] text-sm">
        المملكة العربية السعودية – الرياض
      </p>

    </footer>
  );
};

export default Footer;