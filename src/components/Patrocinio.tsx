"use client";
import { Check } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const cotas = [
  {
    nome: "PRO",
    preco: "R$ 5.000",
    cor: "#4db8d4",
    bg: "rgba(77,184,212,0.06)",
    destaque: false,
    items: [
      "Material promocional no kit dos participantes",
      "Visibilidade da marca no backdrop",
      "Visibilidade nas redes sociais",
    ],
  },
  {
    nome: "PREMIUM",
    preco: "R$ 10.000",
    cor: "#f5a623",
    bg: "rgba(245,166,35,0.06)",
    destaque: false,
    items: [
      "Material promocional no kit dos participantes",
      "Visibilidade da marca no backdrop",
      "Visibilidade nas redes sociais",
      "4 convites para o evento",
      "Exibição de vídeo institucional no telão do evento",
    ],
  },
  {
    nome: "MASTER",
    preco: "R$ 15.000",
    cor: "#8dc63f",
    bg: "rgba(141,198,63,0.06)",
    destaque: true,
    items: [
      "Material promocional no kit dos participantes",
      "Visibilidade da marca no backdrop",
      "Visibilidade nas redes sociais",
      "8 convites para o evento",
      "Exibição de vídeo institucional no telão do evento",
      "Participação em 1 dos Painéis do evento",
    ],
  },
];

const beneficios = [
  { titulo: "Posicionamento Estratégico", descricao: "Posicionamento no novo eixo portuário do Espírito Santo" },
  { titulo: "Relacionamento Qualificado", descricao: "Relacionamento direto com decisores e empresas do comércio exterior" },
  { titulo: "Geração de Leads", descricao: "Leads qualificados e presença no centro das negociações do setor" },
];

type Cota = (typeof cotas)[number];

function PricingCard({ cota }: { cota: Cota }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col p-5 sm:p-8 overflow-hidden"
      style={{
        background: hovered ? `${cota.cor}12` : cota.bg,
        border: `1px solid ${hovered ? cota.cor + "60" : cota.cor + "30"}`,
        borderTop: `2px solid ${cota.cor}`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 40px ${cota.cor}20` : "none",
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Glow blob no canto superior */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: cota.cor,
          opacity: hovered ? 0.12 : 0.04,
          filter: "blur(32px)",
          transition: "opacity 0.4s ease",
        }}
      />

      <div className="mb-8 relative z-10">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: cota.cor }}>
          {cota.nome}
        </p>
        <p
          className="text-4xl font-bold text-white"
          style={{
            transition: "letter-spacing 0.3s ease",
            letterSpacing: hovered ? "0.02em" : "normal",
          }}
        >
          {cota.preco}
        </p>
        {cota.destaque && (
          <p className="text-[11px] text-white/52 mt-1 tracking-wide uppercase">Mais escolhido</p>
        )}
      </div>

      <div
        className="h-px mb-6 relative z-10"
        style={{
          background: hovered ? `linear-gradient(90deg, ${cota.cor}60, transparent)` : "rgba(255,255,255,0.07)",
          transition: "background 0.4s ease",
        }}
      />

      <ul className="space-y-3 mb-8 flex-1 relative z-10">
        {cota.items.map((item, j) => (
          <li
            key={j}
            className="flex items-start gap-3 text-sm font-light"
            style={{
              color: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.70)",
              transform: hovered ? `translateX(4px)` : "translateX(0)",
              transition: `color 0.3s ease, transform 0.3s ease ${j * 40}ms`,
            }}
          >
            <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: cota.cor }} />
            {item}
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/5527996008632"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 text-xs font-semibold tracking-wide uppercase relative z-10 overflow-hidden"
        style={{
          border: `1px solid ${hovered ? cota.cor + "80" : "rgba(255,255,255,0.15)"}`,
          color: hovered ? cota.cor : "rgba(255,255,255,0.6)",
          background: hovered ? `${cota.cor}10` : "transparent",
          transition: "all 0.3s ease",
        }}
      >
        Quero patrocinar
      </a>
    </div>
  );
}

export default function Patrocinio() {
  return (
    <section id="patrocinio" className="py-28" style={{ background: "#0f0f0f" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58">Patrocine</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Proposta de<br />
            <span style={{ color: "#f5a623" }}>Patrocínio</span>
          </h2>
          <p className="text-white/65 text-sm leading-relaxed max-w-sm font-light lg:text-right">
            Posicione sua marca no centro do maior evento de comércio exterior e portos de Aracruz.
          </p>
        </div>

        {/* Benefits row */}
        <div className="grid sm:grid-cols-3 gap-px mb-16" style={{ background: "rgba(255,255,255,0.07)" }}>
          {beneficios.map((b, i) => (
            <div key={i} className="p-5 sm:p-8" style={{ background: "#0f0f0f" }}>
              <p className="text-xs text-white/70 font-medium mb-1">0{i + 1}</p>
              <h3 className="text-white font-semibold text-sm mb-3">{b.titulo}</h3>
              <p className="text-white/58 text-sm font-light leading-relaxed">{b.descricao}</p>
            </div>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {cotas.map((cota, i) => (
            <Reveal key={i} delay={i * 120} direction="up">
              <PricingCard cota={cota} />
            </Reveal>
          ))}
        </div>


      </div>
    </section>
  );
}
