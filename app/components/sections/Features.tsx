import React from "react";

const features = [
  {
    title: "الاهتمام بالعميل",
    desc: "نضع راحتك ورضاك في المقام الأول، مع خدمة مخصصة وااحترافية في كل جلسة.",
    icon: "🤍",
  },
  {
    title: "تعقيم وجودة عالية",
    desc: "نستخدم أدوات معقمة وزيوت أصلية لضمان أعلى مستويات النظافة والسلامة.",
    icon: "✨",
  },
  {
    title: "فريق محترف ومعتمد",
    desc: "فريق مختص ومدرّب بخبرة واسعة في المساج الاسترخائي والعلاجي.",
    icon: "🧑‍⚕️",
  },
  {
    title: "أسعار مناسبة وثابتة",
    desc: "جلسات مساج احترافية بأسعار واضحة ومناسبة بدون أي تكاليف إضافية.",
    icon: "💰",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-[#fcfbf7] py-24 scroll-mt-28 relative">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf7] via-[#f7f5ee] to-[#fcfbf7] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

          {features.map((item, index) => (
            <div key={index} className="space-y-6 group">

              {/* Icon Container */}
              {/* تم ضبط حدود الدائرة واللون الذهبي، وإضافة خلفية بيضاء ناعمة لتميز الإيموجي */}
              <div className="mx-auto w-16 h-16 rounded-full border border-[#d4af37]/40 bg-white/60 flex items-center justify-center text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>

              {/* Title */}
              {/* تحويل العنوان من الأبيض الصريح إلى لون داكن وراقي */}
              <h3 className="text-[#171717] text-lg tracking-wide font-medium">
                {item.title}
              </h3>

              {/* Description */}
              {/* تحويل الوصف ليكون واضحاً ومقروءاً على الخلفية الفاتحة */}
              <p className="text-[#4a4a4a] text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;