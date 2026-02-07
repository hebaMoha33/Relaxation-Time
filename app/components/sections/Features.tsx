import React from "react";

const features = [
  {
    title: "الاهتمام بالعميل",
    desc: "نضع راحتك ورضاك في المقام الأول، مع خدمة مخصصة واحترافية في كل جلسة.",
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
    <section id="features" className="bg-black py-24 scroll-mt-28">

      <div className="max-w-6xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

          {features.map((item, index) => (
            <div key={index} className="space-y-6">

              {/* Icon */}
              <div className="mx-auto w-16 h-16 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-2xl text-[#d4af37]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-lg tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
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
