"use client";
import { MapPin, Store, Mic, Users, Wifi, Car, Coffee, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/sitio/slide1.jpeg",
  "/sitio/slide2.jpeg",
  "/sitio/slide3.jpeg",
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="relative flex-1 min-h-64 overflow-hidden group">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Sítio Santa Joana ${i + 1}`}
          fill
          className="object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ))}
      {/* overlay escuro leve */}
      <div className="absolute inset-0 bg-black/30" />

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
      >
        <ChevronRight size={18} />
      </button>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 rounded-full transition-all"
            style={{ background: i === current ? "#f5a623" : "rgba(255,255,255,0.4)" }}
          />
        ))}
      </div>
    </div>
  );
}

const infraestrutura = [
  {
    icon: Store,
    titulo: "Área de Exposições",
    cor: "#f5a623",
    items: ["Estandes padronizados e customizados", "Credenciamento automatizado", "Backdrop instagramável", "Totens interativos"],
  },
  {
    icon: Mic,
    titulo: "Plenária",
    cor: "#4db8d4",
    items: ["Palco com painéis de LED", "Auditório com 400 cadeiras", "Sonorização profissional", "Apresentação cultural"],
  },
  {
    icon: Users,
    titulo: "Networking Lounge",
    cor: "#8dc63f",
    items: ["Sofás e lounges confortáveis", "Máquina de café", "Pontos de recarga de celular", "TV LED para conteúdo"],
  },
  {
    icon: Coffee,
    titulo: "Coffee Center",
    cor: "#c0392b",
    items: ["Espaço de networking premium", "Mobiliário personalizado", "Distribuição de brindes", "Apoio para reuniões"],
  },
];

const facilities = [
  { icon: Car,    label: "Estacionamento gratuito para 1.200 carros" },
  { icon: Wifi,   label: "Wi-Fi gratuito full time" },
  { icon: Coffee, label: "Restaurante — Churrasco a la carte" },
  { icon: Shield, label: "Segurança, gerador e ambulância" },
];

export default function Local() {
  return (
    <section id="local" className="py-28" style={{ background: "#141414" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58">Local</span>
        </div>

        <h2 className="text-5xl font-bold text-white mb-16 leading-tight">
          Onde acontece
        </h2>

        {/* Venue card */}
        <div
          className="grid lg:grid-cols-2 mb-16"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Slideshow side */}
          {/* Slideshow side */}
          <div className="flex flex-col min-h-64" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
            <Slideshow />
          </div>

          {/* Info side */}
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="text-white font-semibold text-xl mb-1">Sítio Santa Joana</p>
            <p className="text-white/58 text-sm mb-6">Aracruz, Espírito Santo</p>

            <p className="text-white/65 text-sm leading-relaxed font-light mb-8">
              Espaço completo e estratégico para receber os maiores nomes do comércio exterior, logística e portos do Brasil. Infraestrutura de ponta para garantir a melhor experiência.
            </p>

            <div className="space-y-3 mb-8">
              {facilities.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70 text-sm">
                  <f.icon size={14} className="text-white/70 flex-shrink-0" />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wide uppercase rounded-full transition-all hover:opacity-80"
              style={{ background: "#f5a623", color: "#0f0f0f" }}
            >
              <MapPin size={12} />
              Ver no mapa
            </a>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.07)" }}>
          {infraestrutura.map((item, i) => (
            <div key={i} className="p-5 sm:p-8 flex flex-col gap-4 relative overflow-hidden" style={{ background: "#141414" }}>
              {/* glow de fundo sutil */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: item.cor, opacity: 0.08, filter: "blur(24px)" }}
              />
              {/* ícone com borda colorida */}
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ border: `1px solid ${item.cor}40`, background: `${item.cor}10` }}
              >
                <item.icon size={16} style={{ color: item.cor }} />
              </div>
              {/* linha colorida + título */}
              <div className="relative z-10">
                <div className="w-5 h-[2px] mb-3" style={{ background: item.cor }} />
                <h4 className="text-white font-semibold text-sm">{item.titulo}</h4>
              </div>
              <ul className="space-y-2 relative z-10">
                {item.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/58 text-xs font-light">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.cor, opacity: 0.6 }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
