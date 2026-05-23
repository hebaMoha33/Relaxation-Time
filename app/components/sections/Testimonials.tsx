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
      className="bg-[#fcfbf7] py-28 relative overflow-hidden" // خلفية بيج فاتحة وموحدة
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf7] via-[#f7f5ee] to-[#fcfbf7]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#171717] text-3xl tracking-[10px] mb-6 font-light">
            آراء عملائنا
          </h2>
          <p className="text-[#3a3a3a] max-w-2xl mx-auto leading-relaxed text-[15px]">
            تجارب حقيقية من عملائنا في مختلف أحياء الرياض،
            تعكس جودة الخدمة والاهتمام بالتفاصيل.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-8 border border-white/60 bg-white/60 backdrop-blur-md transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.01)] hover:shadow-[0_8px_32px_0_rgba(184,147,33,0.05)] hover:border-[#b89321]/40" 
              // تم تطبيق تأثير الـ Glassmorphism هنا (خلفية بيضاء شفافة + فلاتر ضبابية + ظل ناعم)
            >
              {/* Quote */}
              <p className="text-[#4a4a4a] leading-relaxed mb-8 text-[14.5px] italic">
                “{item.text}”
              </p>

              {/* Divider */}
              <div className="w-10 h-[1px] bg-[#b89321] mb-4" />

              {/* Name & Area */}
              <div className="text-right">
                <p className="text-[#171717] text-sm font-medium tracking-wide">
                  {item.name}
                </p>
                <p className="text-[#555555]/70 text-xs mt-0.5">
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