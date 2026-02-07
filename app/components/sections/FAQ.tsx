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
      className="relative bg-black py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl tracking-[10px] mb-6">
            الأسئلة الشائعة
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            كل ما تحتاج معرفته عن خدمات المساج المنزلي
            بطريقة واضحة وسهلة.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-[#d4af37]/25"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-5 text-right
                  text-white tracking-wide
                  hover:bg-white/5 transition
                "
              >
                <span>{item.q}</span>
                <span className="text-[#d4af37] text-xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-white/65 leading-relaxed">
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
