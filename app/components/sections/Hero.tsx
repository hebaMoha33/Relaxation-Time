import React from "react";
import { SPA_NAME_AR, SPA_NAME_EN } from "@/constants/spa";

const Hero = () => {
  return (
    <header id="home" className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-[#fcfbf7]">

      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-85 grayscale-[5%]" // تم رفع الـ opacity هنا ليكون الفيديو ساطعاً وواضحاً جداً
        >
          <source src="/videos/d1.mp4" type="video/mp4" />
        </video>

        {/* تدرج علوي شفاف جداً لا يكتم الفيديو */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf7]/20 via-transparent to-transparent" />

        {/* تدرج سفلي تم تقصير ارتفاعه (h-28 بدلاً من h-40) ليختفي الفيديو فقط عند الحافة السفلية تماماً */}
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-[#fcfbf7] via-[#fcfbf7]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-4 px-4">
        <h2 className="text-[#3a3a3a] text-sm tracking-[8px] uppercase font-light">
          مرحباً بك في {SPA_NAME_AR}
        </h2>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#171717]">
          {SPA_NAME_AR}
        </h1>

        <p className="text-[#b89321] tracking-[6px] uppercase text-sm font-medium">
          {SPA_NAME_EN}
        </p>

        <p className="text-[#b89321] text-base md:text-lg max-w-xl mx-auto italic font-light">
          دع ضجيج العالم خلفك، وانغمس في تجربة استرخاء مصممة خصيصاً لك
        </p>
      </div>

    </header>
  );
};

export default Hero;