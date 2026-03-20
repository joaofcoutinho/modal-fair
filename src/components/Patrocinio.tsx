import { Check } from "lucide-react";

const cotas = [
  {
    nome: "PRO",
    preco: "R$ 9.000",
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
    ],
  },
  {
    nome: "MASTER",
    preco: "R$ 12.000",
    cor: "#8dc63f",
    bg: "rgba(141,198,63,0.06)",
    destaque: true,
    items: [
      "Material promocional no kit dos participantes",
      "Visibilidade da marca no backdrop",
      "Visibilidade nas redes sociais",
      "8 convites para o evento",
    ],
  },
];

const beneficios = [
  { titulo: "Posicionamento Estratégico", descricao: "Posicionamento no novo eixo portuário do Espírito Santo" },
  { titulo: "Relacionamento Qualificado", descricao: "Relacionamento direto com decisores e empresas do comércio exterior" },
  { titulo: "Geração de Leads", descricao: "Leads qualificados e presença no centro das negociações do setor" },
];

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
          <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
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
            <div key={i} className="p-8" style={{ background: "#0f0f0f" }}>
              <p className="text-xs text-white/70 font-medium mb-1">0{i + 1}</p>
              <h3 className="text-white font-semibold text-sm mb-3">{b.titulo}</h3>
              <p className="text-white/58 text-sm font-light leading-relaxed">{b.descricao}</p>
            </div>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {cotas.map((cota, i) => (
            <div
              key={i}
              className="relative flex flex-col p-8"
              style={{
                background: cota.bg,
                border: `1px solid ${cota.cor}30`,
                borderTop: `2px solid ${cota.cor}`,
              }}
            >

              <div className="mb-8">
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: cota.cor }}>
                  {cota.nome}
                </p>
                <p className="text-4xl font-bold text-white">{cota.preco}</p>
                {cota.destaque && (
                  <p className="text-[11px] text-white/52 mt-1 tracking-wide uppercase">Mais escolhido</p>
                )}
              </div>

              <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.07)" }} />

              <ul className="space-y-3 mb-8 flex-1">
                {cota.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/70 text-sm font-light">
                    <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: cota.cor }} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5527996008632"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 text-xs font-semibold tracking-wide uppercase transition-all hover:opacity-80"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
              >
                Quero patrocinar
              </a>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
