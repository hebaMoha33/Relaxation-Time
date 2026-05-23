"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SPA_NAME_AR, SPA_NAME_EN } from "@/constants/spa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "الرئيسية", href: "#home" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "مميزاتنا", href: "#features" },
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcfbf7]/90 backdrop-blur-md border-b border-[#d4af37]/10">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* اللوقو + الاسم */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />

          <div className="text-right">
            <div className="text-xl font-extralight tracking-[3px] text-[#171717]">
              {SPA_NAME_AR}
            </div>

            <div className="text-[10px] tracking-[4px] text-[#8c7a4b] uppercase">
              {SPA_NAME_EN}
            </div>
          </div>
        </div>

        {/* قائمة الديسكتوب */}
        <ul className="hidden md:flex gap-10 text-[11px] uppercase tracking-[3px] text-[#3a3a3a]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-[#b89321]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* زر الجوال */}
        <button
          className="md:hidden text-[#171717] text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* قائمة الجوال */}
      {open && (
        <div className="md:hidden bg-[#fcfbf7] border-t border-[#d4af37]/10">
          <ul className="flex flex-col items-center gap-6 py-8 text-[#171717] text-sm tracking-[3px]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-[#b89321]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;