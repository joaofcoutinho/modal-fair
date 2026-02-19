"use client";

import { useEffect, useState } from "react";
import { MapPin, Calendar, Users } from "lucide-react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-05-14T17:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2e]/70 via-[#0d1b2e]/50 to-[#0d1b2e]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#f5a623]/20 border border-[#f5a623]/40 text-[#f5a623] text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#f5a623] rounded-full animate-pulse" />
          1ª Edição — 2026
        </div>

        {/* Logo + Title */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <HeroLogo />
          <h1 className="text-5xl sm:text-7xl font-black text-white leading-none tracking-tight">
            MODAL FAIR
            <br />
            <span className="text-[#f5a623]">ARACRUZ</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl tracking-widest uppercase">
            1ª Feira de Comércio Exterior, Logística e Portos de Aracruz
          </p>
        </div>

        {/* Event Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 mt-8">
          <div className="flex items-center gap-2 text-white/90">
            <Calendar size={18} className="text-[#f5a623]" />
            <span className="font-semibold">14 e 15 / Maio / 2026</span>
          </div>
          <div className="w-px h-4 bg-white/30 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/90">
            <MapPin size={18} className="text-[#f5a623]" />
            <span className="font-semibold">Sítio Santa Joana — Aracruz/ES</span>
          </div>
          <div className="w-px h-4 bg-white/30 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/90">
            <Users size={18} className="text-[#f5a623]" />
            <span className="font-semibold">500 participantes/dia</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12">
          {[
            { value: timeLeft.days, label: "Dias" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Minutos" },
            { value: timeLeft.seconds, label: "Segundos" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-16 sm:w-24 h-16 sm:h-24 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-black text-white tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-white/50 text-xs sm:text-sm mt-2 tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inscricao"
            className="px-10 py-4 bg-[#f5a623] text-[#0d1b2e] font-black text-base rounded-full hover:bg-[#e09b1f] transition-all hover:scale-105 shadow-lg shadow-[#f5a623]/30"
          >
            Garanta sua inscrição
          </a>
          <a
            href="#sobre"
            className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-base rounded-full hover:bg-white/20 transition-all"
          >
            Saiba mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

function HeroLogo() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 0)">
        <path d="M32 6 L6 6 L6 32 L18 20 L32 6Z" fill="#f5a623"/>
        <path d="M6 32 L6 6 L32 32 L18 32 L6 32Z" fill="#f5a623" opacity="0.6"/>
      </g>
      <g transform="translate(42, 0)">
        <path d="M6 6 L32 6 L32 32 L20 20 L6 6Z" fill="#8dc63f"/>
        <path d="M32 32 L32 6 L6 32 L20 32 L32 32Z" fill="#8dc63f" opacity="0.6"/>
      </g>
      <g transform="translate(0, 42)">
        <path d="M32 32 L6 32 L6 6 L18 18 L32 32Z" fill="#c0392b"/>
        <path d="M6 6 L6 32 L32 6 L18 6 L6 6Z" fill="#c0392b" opacity="0.6"/>
      </g>
      <g transform="translate(42, 42)">
        <path d="M6 32 L32 32 L32 6 L20 18 L6 32Z" fill="#4db8d4"/>
        <path d="M32 6 L32 32 L6 6 L20 6 L32 6Z" fill="#4db8d4" opacity="0.6"/>
      </g>
    </svg>
  );
}
