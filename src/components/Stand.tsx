"use client";
import { Eye, Users, TrendingUp, Store, MessageCircle } from "lucide-react";

const beneficios = [
  { icon: Eye,        cor: "#f5a623", titulo: "Alta Visibilidade",      descricao: "Seu estande no centro do maior evento de logística e portos de Aracruz." },
  { icon: Users,      cor: "#4db8d4", titulo: "500+ Visitantes/dia",    descricao: "Acesso direto a decisores e empresas do comércio exterior capixaba." },
  { icon: TrendingUp, cor: "#8dc63f", titulo: "Geração de Negócios",    descricao: "Ambiente propício para fechar contratos e expandir sua carteira de clientes." },
  { icon: Store,      cor: "#c0392b", titulo: "Presença de Marca",      descricao: "3 dias de visibilidade para o público mais qualificado do setor no ES." },
];

const BRAND_COLORS = ["#f5a623", "#8dc63f", "#4db8d4", "#c0392b"];

export default function Stand() {
  return (
    <section id="stand" className="py-28" style={{ background: "#141414" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58">Expositores</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Tenha seu Stand<br />
            <span style={{ color: "#8dc63f" }}>na Modal Fair</span>
          </h2>
          <p className="text-white/65 text-sm leading-relaxed max-w-sm font-light lg:text-right">
            Estandes montados e gerenciados pela <strong className="text-white/60 font-semibold">Stand By Eventos</strong>.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-16" style={{ background: "rgba(255,255,255,0.07)" }}>
          {beneficios.map((b, i) => (
            <div key={i} className="p-5 sm:p-8 flex flex-col gap-4 relative overflow-hidden" style={{ background: "#141414" }}>
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full pointer-events-none" style={{ background: b.cor, opacity: 0.08, filter: "blur(20px)" }} />
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ border: `1px solid ${b.cor}40`, background: `${b.cor}10` }}>
                <b.icon size={16} style={{ color: b.cor }} />
              </div>
              <div>
                <div className="w-5 h-[2px] mb-3" style={{ background: b.cor }} />
                <h3 className="text-white font-semibold text-sm mb-2">{b.titulo}</h3>
                <p className="text-white/58 text-xs font-light leading-relaxed">{b.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div
          className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-6 sm:p-10 lg:p-14 overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "blur(2px) saturate(0.6)" }}
          >
            <source src="/video-cta-final.mp4" type="video/mp4" />
          </video>
          {/* Strong overlay so AI details aren't visible */}
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.88)" }} />
          <div className="relative z-10">
            {/* Color strip */}
            <div className="flex mb-6">
              {BRAND_COLORS.map((cor, i) => (
                <div key={i} className="w-6 h-[2px]" style={{ background: cor }} />
              ))}
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Interesse em ter um stand?</h3>
            <p className="text-white/58 text-sm font-light leading-relaxed max-w-md">
              Entre em contato com a <span className="text-white/60 font-medium">Stand By Eventos</span> e garanta seu espaço na 1ª Modal Fair Aracruz.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-3 lg:items-end flex-shrink-0">
            <a
              href="https://wa.me/552732452608"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-semibold tracking-wide uppercase rounded-full transition-all hover:opacity-80"
              style={{ background: "#8dc63f", color: "#0f0f0f" }}
            >
              <MessageCircle size={14} />
              Falar com Stand By Eventos
            </a>
            <p className="text-white/38 text-xs">(27) 3245-2608 · Stand By Eventos</p>
          </div>
        </div>

      </div>
    </section>
  );
}
