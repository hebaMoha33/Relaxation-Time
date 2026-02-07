import React from "react";
import { SPA_NAME_AR, SPA_NAME_EN } from "@/constants/spa";

const Hero = () => {
  return (
    <header id="home" className="relative h-[75vh] flex items-center justify-center overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/d1.mp4" type="video/mp4" />
        </video>

        {/* تدرج علوي خفيف */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

        {/* تدرج سفلي قوي (التلاشي) */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-4 px-4">
        <h2 className="text-white text-sm tracking-[8px] uppercase">
          مرحباً بك في {SPA_NAME_AR}
        </h2>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white">
          {SPA_NAME_AR}
        </h1>

        <p className="text-[#d4af37] tracking-[6px] uppercase text-sm">
          {SPA_NAME_EN}
        </p>

        <p className="text-[#d4af37] text-base md:text-lg max-w-xl mx-auto italic font-light">
          دع ضجيج العالم خلفك، وانغمس في تجربة استرخاء مصممة خصيصاً لك
        </p>
      </div>

    </header>
  );
};

export default Hero;
