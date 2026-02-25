import { Check, Star } from "lucide-react";

const cotas = [
  {
    nome: "PRO",
    preco: "R$ 9.000",
    cor: "#c0c0c0",
    corBg: "from-[#2a2a2a] to-[#1a1a1a]",
    corBorder: "border-white/20",
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
    corBg: "from-[#2a1f0a] to-[#1a1408]",
    corBorder: "border-[#f5a623]/40",
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
    cor: "#d4af37",
    corBg: "from-[#2a2510] to-[#1a1808]",
    corBorder: "border-[#d4af37]/40",
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
  {
    titulo: "Posicionamento Estratégico",
    descricao: "Posicionamento no novo eixo portuário do Espírito Santo",
  },
  {
    titulo: "Relacionamento Qualificado",
    descricao: "Relacionamento direto com decisores e empresas do comércio exterior",
  },
  {
    titulo: "Geração de Leads",
    descricao: "Leads qualificados e presença no centro das negociações do setor",
  },
];

export default function Patrocinio() {
  return (
    <section id="patrocinio" className="py-24 bg-[#0d1b2e] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f5a623]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-4 block">
            Patrocine
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Proposta de <span className="text-[#f5a623]">Patrocínio</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Posicione sua marca no centro do maior evento de comércio exterior e portos de Aracruz.
          </p>
        </div>

        {/* Why Sponsor */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#f5a623]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-[#f5a623]/10 border border-[#f5a623]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star size={20} className="text-[#f5a623]" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{b.titulo}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.descricao}</p>
            </div>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cotas.map((cota, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-b ${cota.corBg} border ${cota.corBorder} rounded-3xl p-8 ${
                cota.destaque ? "scale-105 shadow-2xl" : ""
              } transition-transform hover:scale-[1.02]`}
            >
              {cota.destaque && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f5a623] text-[#0d1b2e] text-xs font-black px-4 py-1.5 rounded-full">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: cota.cor }}>
                  {cota.nome}
                </p>
                <p className="text-4xl font-black text-white">{cota.preco}</p>
              </div>

              <div
                className="h-px mb-6 opacity-20"
                style={{ background: cota.cor }}
              />

              <ul className="space-y-3 mb-8">
                {cota.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/70 text-sm">
                    <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: cota.cor }} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5527996008632"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all"
                style={{
                  backgroundColor: cota.destaque ? cota.cor : "transparent",
                  color: cota.destaque ? "#0d1b2e" : cota.cor,
                  border: `2px solid ${cota.cor}`,
                }}
              >
                Quero patrocinar
              </a>
            </div>
          ))}
        </div>

        {/* Current sponsors */}
        <div className="bg-white/5 border border-white/10 rounded-3xl py-10 px-8">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-6 font-bold text-center">
            Patrocinadores
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {["Avenpesbr", "IMETAME", "SINDIEX"].map((sponsor, i) => (
              <div
                key={i}
                className="bg-white/5 border border-[#f5a623]/20 rounded-xl px-8 py-4 text-white/70 font-black text-lg tracking-widest hover:border-[#f5a623]/40 transition-colors"
              >
                {sponsor}
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-6 font-bold text-center">
              Apoio
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["CDL", "Prefeitura de Aracruz", "Portocel", "Vports", "Terca Zilli", "Dotcode.ti"].map((apoio, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-white/50 font-bold text-sm tracking-widest hover:border-white/20 transition-colors"
                >
                  {apoio}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
