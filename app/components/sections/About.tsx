import React from "react";
import { SPA_NAME_AR } from "@/constants/spa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#050505] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div className="text-right space-y-6">
          <h2 className="text-3xl md:text-4xl text-white font-light tracking-widest border-r-4 border-[#d4af37] pr-4">
            من نحن
          </h2>

          <p className="text-white/70 leading-relaxed text-[15px]">
            في <span className="text-[#d4af37]">{SPA_NAME_AR}</span> نوفّر
            تجربة مساج منزلي احترافية تجمع بين الراحة، الخبرة،
            والعناية الدقيقة بالجسم، دون الحاجة لمغادرة منزلك.
          </p>

          <p className="text-white/70 leading-relaxed text-[15px]">
            نقدم جلسات تدليك متخصصة بإشراف
            <span className="text-[#d4af37]"> أخصائيين فلبينيين رجال فقط </span>
            ذوي خبرة عالية في الاسترخاء العميق والعلاج العضلي،
            مع التزام كامل بالخصوصية والجودة.
          </p>

          <ul className="space-y-3 text-white/60 text-sm list-disc list-inside">
            <li>جلسات مساج احترافية ومتنوعة</li>
            <li>زيوت طبيعية وتعقيم كامل</li>
            <li>خدمة مساج منزلي في جميع أحياء الرياض</li>
            <li>تجربة راقية مصممة خصيصًا لك</li>
          </ul>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="https://wa.me/966549038626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#d4af37] px-12 py-3 text-[#d4af37] tracking-widest text-sm hover:bg-[#d4af37] hover:text-black transition"
            >
              احجز الآن
            </a>

            <p className="mt-4 text-[#d4af37]/80 text-xs">
              ✨ وقت الاسترخاء… لأن راحتك تستحق الأفضل ✨
            </p>
          </div>
        </div>

        <div className="relative group">
 <img
  src="/images/d7.jpg"
  alt={SPA_NAME_AR}
  className="
    w-full h-[420px] object-cover
    grayscale md:grayscale
    md:group-hover:grayscale-0
    grayscale-0
    transition duration-1000
  "
/>
  {/* إطار ذهبي */}
  <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-[#d4af37] -z-10" />
</div>

      </div>
    </section>
  );
};

export default About;
