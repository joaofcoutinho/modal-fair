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

const WA_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const BRAND_COLORS = ["#f5a623", "#8dc63f", "#4db8d4", "#c0392b"];

export default function Patrocinio() {
  return (
    <section id="patrocinio" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0a" }}>

      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(245,166,35,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.12)" }} />
            <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58">Patrocine</span>
          </div>
        </Reveal>

        {/* Heading + texto */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal direction="right">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Seja parte do<br />
              <span style={{ color: "#f5a623" }}>maior evento</span><br />
              portuário do ES
            </h2>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <div className="space-y-6">
              <p className="text-white/65 text-base leading-relaxed font-light">
                Posicione sua marca no centro do maior evento de comércio exterior, logística e portos de Aracruz — conectando sua empresa a decisores, especialistas e oportunidades reais de negócio.
              </p>
              <a
                href="https://wa.me/5527996008632"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all hover:opacity-85"
                style={{ background: "#25D366", color: "#fff" }}
              >
                {WA_SVG}
                Seja Patrocinador
              </a>
            </div>
          </Reveal>
        </div>

        {/* Benefícios */}
        <div className="grid sm:grid-cols-3 gap-px mb-16" style={{ background: "rgba(255,255,255,0.07)" }}>
          {beneficios.map((b, i) => {
            const cor = BRAND_COLORS[i % BRAND_COLORS.length];
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 sm:p-10 h-full relative overflow-hidden" style={{ background: "#0a0a0a" }}>
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none" style={{ background: cor, opacity: 0.06, filter: "blur(24px)" }} />
                  <div className="w-8 h-[2px] mb-5" style={{ background: cor }} />
                  <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: cor }}>0{i + 1}</p>
                  <h3 className="text-white font-semibold text-base mb-3">{b.titulo}</h3>
                  <p className="text-white/52 text-sm font-light leading-relaxed">{b.descricao}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA final */}
        <Reveal direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-12" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #f5a623" }}>
            <div>
              <p className="text-white font-bold text-lg mb-1">Quer patrocinar a Modal Fair Aracruz?</p>
              <p className="text-white/52 text-sm font-light">Entre em contato agora e receba nossa proposta comercial.</p>
            </div>
            <a
              href="https://wa.me/5527996008632"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all hover:opacity-85"
              style={{ background: "#25D366", color: "#fff" }}
            >
              {WA_SVG}
              Fale Conosco
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
