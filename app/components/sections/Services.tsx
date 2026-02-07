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
    img: "/images/service3.jpg",
  },
  {
    title: "المساج السويدي",
    desc: "لمسات ناعمة تنعش الجسد وتحرر الإجهاد.",
    img: "/images/service1.jpg",
  },
  {
    title: "المساج التايلندي",
    desc: "تمديدات عميقة تعيد المرونة للجسم.",
    img: "/images/service2.jpg",
  },
  {
    title: "الحمام المغربي",
    desc: "تنقية البشرة وتجديد الحيوية بتجربة تقليدية فاخرة.",
    img: "/images/service3.jpg",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-[#050505] py-24 scroll-mt-28">


      {/* HEADER */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-white text-3xl tracking-[10px] mb-4">
          خدماتنا
        </h2>
        <p className="text-white/60 max-w-xl mx-auto">
          في {SPA_NAME_AR} نُقدّم تجارب علاجية مصممة بعناية لتمنحك
          توازناً مثالياً بين الجسد والعقل.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-8 items-start">

        {/* IMAGE */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[380px] overflow-hidden">
          <img
            src={services[active].img}
            alt={services[active].title}
            className="w-full h-full object-cover transition duration-700"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* SERVICES */}
        <div className="w-full md:w-1/2 space-y-6 text-right">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-full text-right transition ${
                active === index
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <div className="flex justify-end gap-4 border-r-2 pr-4 border-[#d4af37]">
                <span className="text-[#d4af37] text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
