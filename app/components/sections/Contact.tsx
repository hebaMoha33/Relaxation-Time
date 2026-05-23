import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#fcfbf7] py-28 overflow-hidden" // تغيير الخلفية للبيج الفاتح
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf7] via-[#f7f5ee] to-[#fcfbf7]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-[#171717] text-3xl tracking-[10px] mb-6">
          تواصل معنا
        </h2>

        {/* Description */}
        <p className="text-[#3a3a3a] leading-relaxed max-w-2xl mx-auto mb-10">
          نقدّم خدمات المساج المنزلي في جميع أحياء الرياض
          بتجربة راقية وخصوصية تامة.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-3 mb-14 text-[#b89321] tracking-wide">
          <span>📍</span>
          <span>نخدم جميع مناطق الرياض</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">

          <a
            href="https://wa.me/966549038626"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-10 py-3
              text-xs tracking-[4px]
              text-white
              bg-[#b89321]
              transition-all duration-300
              hover:bg-[#a07f1c]
            "
          >
            احجز عبر واتساب
          </a>

          <a
            href="tel:+966549038626"
            className="
              inline-flex items-center justify-center
              px-10 py-3
              text-xs tracking-[4px]
              text-[#b89321]
              border border-[#d4af37]/60
              transition-all duration-300
              hover:border-[#d4af37]
              hover:bg-[#d4af37]
              hover:text-white
            "
          >
            اتصال مباشر
          </a>

        </div>

        {/* Map - تم الإبقاء على كود الخريطة والـ iframe الأصلي تماماً بدون أي تعديل خارجي */}
        <div className="relative w-full h-[380px] lg:h-[460px] overflow-hidden border border-[#d4af37]/30">

          <iframe
            title="Riyadh Map"
            src="https://www.google.com/maps?q=Riyadh&z=11&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* تم إزالة طبقات التعتيم السوداء تماماً لتبقى الخريطة واضحة كودك الأصلي */}
          <div className="absolute inset-0 pointer-events-none" />

          {/* Text التوضيحي بالأسفل تم تغيير ألوانه ليصبح مقروءاً بوضوح فوق الخريطة المستقرة */}
          <div className="absolute bottom-6 right-6 text-right pointer-events-none">
            <p className="text-[#b89321] text-xs tracking-widest mb-1 font-medium">
              نخدم جميع أحياء
            </p>
            <h3 className="text-[#171717] text-lg tracking-wide font-medium">
              مدينة الرياض
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;