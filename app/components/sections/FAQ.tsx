"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "هل خدمة المساج متوفرة في جميع أنحاء الرياض؟",
    a: "نغطي معظم أحياء مدينة الرياض بخدمة المساج المنزلي، ويمكنك التأكد من توفر الخدمة في موقعك عند التواصل معنا.",
  },
  {
    q: "هل يتم إحضار مستلزمات الجلسة كاملة؟",
    a: "نعم، نوفّر جميع أدوات المساج والزيوت الطبية وأدوات التعقيم لضمان تجربة مريحة وآمنة داخل منزلك.",
  },
  {
    q: "هل يمكن حجز جلسة في نفس اليوم؟",
    a: "في كثير من الأحيان نعم، وذلك يعتمد على توفر المواعيد. ننصح بالتواصل معنا مبكرًا لتأكيد الحجز.",
  },
  {
    q: "ما هي مدة جلسة المساج؟",
    a: "تختلف مدة الجلسة حسب نوع المساج والباقة المختارة، وعادة تتراوح بين ساعة إلى ساعة ونصف.",
  },
  {
    q: "ما هي طريقة الحجز أو التواصل؟",
    a: "يمكنك التواصل معنا مباشرة عبر واتساب أو الاتصال الهاتفي وسيقوم فريقنا بمساعدتك فورًا.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-[#fcfbf7] py-28 overflow-hidden" // تغيير الخلفية للبيج الفاتح
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf7] via-[#f7f5ee] to-[#fcfbf7]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#171717] text-3xl tracking-[10px] mb-6">
            الأسئلة الشائعة
          </h2>
          <p className="text-[#3a3a3a] max-w-xl mx-auto leading-relaxed">
            كل ما تحتاج معرفته عن خدمات المساج المنزلي
            بطريقة واضحة وسهلة.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-[#d4af37]/40 bg-white/40 backdrop-blur-sm" // جعل حدود الأكورديون أوضح مع خلفية بيضاء خفيفة جداً لتعطي عمقاً
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-5 text-right
                  text-[#171717] tracking-wide
                  hover:bg-[#b89321]/5 transition-all duration-200
                " // تم تعديل الـ hover ليعطي لوناً ذهبياً خفيفاً جداً بدلاً من الأبيض
              >
                <span className="font-light">{item.q}</span>
                <span className="text-[#b89321] text-xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-[#4a4a4a] leading-relaxed text-[15px]">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;