import React from "react";
import { SPA_NAME_AR, SPA_NAME_EN } from "@/constants/spa";

const Footer = () => {
  return (
    <footer className="py-16 text-center border-t border-white/5 bg-black">
      
      <div className="text-2xl text-[#d4af37] mb-2">
        {SPA_NAME_AR}
      </div>

      <div className="text-sm text-white/40 uppercase tracking-widest mb-6">
        {SPA_NAME_EN}
      </div>

      <p className="text-gray-600 text-sm">
        المملكة العربية السعودية – الرياض
      </p>

    </footer>
  );
};

export default Footer;
