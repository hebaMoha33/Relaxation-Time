import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-white text-3xl tracking-[10px] mb-6">
          تواصل معنا
        </h2>

        {/* Description */}
        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
          نقدّم خدمات المساج المنزلي في جميع أحياء الرياض
          بتجربة راقية وخصوصية تامة.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-3 mb-14 text-[#d4af37] tracking-wide">
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
              text-black
              bg-[#d4af37]
              transition-all duration-300
              hover:bg-[#caa433]
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
              text-[#d4af37]
              border border-[#d4af37]/60
              transition-all duration-300
              hover:border-[#d4af37]
            "
          >
            اتصال مباشر
          </a>

        </div>

        {/* Map */}
        <div className="relative w-full h-[380px] lg:h-[460px] overflow-hidden border border-[#d4af37]/30">

          <iframe
            title="Riyadh Map"
            src="https://www.google.com/maps?q=Riyadh&z=11&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

          {/* Text */}
          <div className="absolute bottom-6 right-6 text-right pointer-events-none">
            <p className="text-[#d4af37] text-xs tracking-widest mb-1">
              نخدم جميع أحياء
            </p>
            <h3 className="text-white text-lg tracking-wide">
              مدينة الرياض
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
