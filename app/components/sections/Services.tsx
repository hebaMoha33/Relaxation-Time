"use client";

import React, { useState } from "react";
import { SPA_NAME_AR } from "@/constants/spa";

const services = [
  {
    title: "مساج VIP",
    desc: "جلسة فاخرة مصممة خصيصاً لتمنحك أقصى درجات الاسترخاء.",
    img: "/images/d4.jpg",
  },
  {
    title: "الأحجار الساخنة",
    desc: "علاج عميق يخفف التوتر ويعيد توازن الطاقة.",
    img: "/images/d2.jpg",
  },
  {
    title: "كاسات الهواء",
    desc: "تقنية علاجية لتحسين الدورة الدموية وتخفيف الآلام.",
    img: "/images/a1.jpg",
  },
  {
    title: "المساج السويدي",
    desc: "لمسات ناعمة تنعش الجسد وتحرر الإجهاد.",
    img: "/images/a4.jpg",
  },
  {
    title: "المساج التايلندي",
    desc: "تمديدات عميقة تعيد المرونة للجسم.",
    img: "/images/a2.jpg",
  }
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-[#fcfbf7] py-24 scroll-mt-28 relative">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf7] via-[#f7f5ee] to-[#fcfbf7] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-[#171717] text-3xl tracking-[10px] mb-4 font-light">
            خدماتنا
          </h2>
          <p className="text-[#3a3a3a] max-w-xl mx-auto text-[15px] leading-relaxed">
            في {SPA_NAME_AR} نُقدّم تجارب علاجية مصممة بعناية لتمنحك
            توازناً مثالياً بين الجسد والعقل.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col-reverse md:flex-row gap-8 items-stretch">

          {/* IMAGE CONTAINER */}
          {/* إضافة انحناء ناعم للزوايا وظل خفيف لإبراز الصورة في المود الفاتح */}
          <div className="relative w-full md:w-1/2 h-[320px] md:h-auto min-h-[380px] overflow-hidden rounded-sm border border-[#d4af37]/20 shadow-sm">
            <img
              src={services[active].img}
              alt={services[active].title}
              className="w-full h-full object-cover transition duration-700"
            />
            {/* طبقة بيضاء خفيفة جداً لتحسين اندماج ألوان الصورة مع الثيم العام */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none" />
          </div>

          {/* SERVICES BUTTONS */}
          <div className="w-full md:w-1/2 flex flex-col justify-between space-y-3 text-right">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-full text-right p-4 rounded-sm transition-all duration-300 backdrop-blur-md ${
                  active === index
                    ? "bg-white/70 border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border-r-4 border-r-[#b89321] translate-x-[-4px]"
                    : "border border-transparent hover:bg-white/30 border-r-2 border-r-[#d4af37]/30 hover:border-r-[#d4af37]/60"
                }`} // تم تطبيق تأثير زجاجي تفاعلي وناعم للخدمة المفعلة
              >
                <div className="flex justify-end gap-5 items-start">
                  
                  {/* Text Details */}
                  <div className="flex-1">
                    <h3 className={`text-lg mb-1 transition-colors ${
                      active === index ? "text-[#b89321] font-medium" : "text-[#171717]"
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors ${
                      active === index ? "text-[#3a3a3a]" : "text-[#555555]/80"
                    }`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Number Indicator */}
                  <span className={`text-sm font-mono pt-1 transition-colors ${
                    active === index ? "text-[#b89321] font-bold" : "text-[#d4af37]/70"
                  }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}