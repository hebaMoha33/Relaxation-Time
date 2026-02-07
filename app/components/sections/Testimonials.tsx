"use client";

import React from "react";

const testimonials = [
  {
    text: "تجربة راقية جدًا، المعالج وصل في الوقت المحدد وكل شيء كان مرتب واحترافي.",
    name: "سلمان",
    area: "حي المونسية",
  },
  {
    text: "راحة جسدية ونفسية بعد الجلسة، واضح الاهتمام بأدق التفاصيل.",
    name: "ياسر",
    area: "حي الروضة",
  },
  {
    text: "أفضل مساج منزلي جربته، تعامل محترم وتعقيم ممتاز.",
    name: "نواف",
    area: "حي اليرموك",
  },
  {
    text: "شد العضلات خف بشكل ملحوظ من أول جلسة، تجربة تستحق التكرار.",
    name: "عبدالعزيز",
    area: "حي السويدي",
  },
  {
    text: "جلسة مريحة جدًا بعد يوم عمل طويل، الخدمة فعلًا فخمة.",
    name: "طارق",
    area: "حي الحمراء",
  },
  {
    text: "الاحترافية واضحة من البداية للنهاية، أنصح فيها بقوة.",
    name: "معتز",
    area: "حي الفيصلية",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#050505] py-28 relative overflow-hidden"
    >
      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-3xl tracking-[10px] mb-6">
            آراء عملائنا
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            تجارب حقيقية من عملائنا في مختلف أحياء الرياض،
            تعكس جودة الخدمة والاهتمام بالتفاصيل.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-8 border border-white/10 bg-black/40 backdrop-blur-sm transition hover:border-[#d4af37]/40"
            >
              {/* Quote */}
              <p className="text-white/80 leading-relaxed mb-8 text-sm">
                “{item.text}”
              </p>

              {/* Divider */}
              <div className="w-10 h-[1px] bg-[#d4af37] mb-4" />

              {/* Name */}
              <div className="text-right">
                <p className="text-white text-sm tracking-wide">
                  {item.name}
                </p>
                <p className="text-white/50 text-xs">
                  {item.area}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
