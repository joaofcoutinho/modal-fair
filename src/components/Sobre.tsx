import { Target, TrendingUp, Users, Award } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { value: "500+", label: "Participantes por dia", cor: "#f5a623" },
  { value: "3",    label: "Dias de evento",        cor: "#8dc63f" },
  { value: "5",    label: "Painéis temáticos",     cor: "#4db8d4" },
  { value: "1ª",   label: "Edição em Aracruz",     cor: "#c0392b" },
];

const objetivos = [
  { icon: Target,     cor: "#f5a623", titulo: "Objetivo Principal",        descricao: "Gerar conexões que se transformem em negócios e investimentos concretos." },
  { icon: TrendingUp, cor: "#4db8d4", titulo: "Posicionamento Estratégico", descricao: "Posicionar Aracruz como novo polo portuário e logístico de relevância nacional." },
  { icon: Users,      cor: "#8dc63f", titulo: "Integração e Diálogo",       descricao: "Promover conhecimento e diálogo entre os setores de comércio exterior, logística e portos." },
  { icon: Award,      cor: "#c0392b", titulo: "Legado para Aracruz",        descricao: "Gerar legado de desenvolvimento econômico e social, impulsionando inovação e crescimento sustentável." },
];

const publico = [
  "Empresas de Logística",
  "Comércio Exterior",
  "Operadores Portuários",
  "Poder Público",
  "Sindicatos do Setor",
  "Advogados Especialistas",
  "Atacado e Varejo",
  "Setores Produtivos",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-28" style={{ background: "#0f0f0f" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 max-w-12" style={{ background: "rgba(255,255,255,0.12)" }} />
            <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58">O Evento</span>
          </div>
        </Reveal>

        {/* Main heading + intro */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-start">
          <Reveal direction="right">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              Transformando<br />
              conexões em<br />
              <span style={{ color: "#f5a623" }}>negócios.</span>
            </h2>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <div className="pt-2">
              <p className="text-white/75 text-base leading-relaxed font-light mb-6">
                A Modal Fair Aracruz é a <strong className="text-white/80 font-semibold">1ª Feira de Comércio Exterior, Logística e Portos de Aracruz</strong>, reunindo empresas, autoridades, sindicatos e especialistas para fortalecer o ecossistema portuário e logístico do Espírito Santo.
              </p>
              <p className="text-white/58 text-sm leading-relaxed font-light">
                Um evento criado para gerar conexões reais, debates qualificados e investimentos concretos na região de Aracruz e no Espírito Santo.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-20" style={{ background: "rgba(255,255,255,0.07)" }}>
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex flex-col justify-between p-5 sm:p-8" style={{ background: "#0f0f0f" }}>
                <p className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: stat.cor }}>{stat.value}</p>
                <p className="text-white/65 text-xs tracking-wide uppercase font-medium">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Objectives */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {objetivos.map((obj, i) => (
            <Reveal key={i} delay={i * 100} direction="up">
              <div className="flex flex-col gap-4 p-6 h-full relative overflow-hidden" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full pointer-events-none" style={{ background: obj.cor, opacity: 0.07, filter: "blur(20px)" }} />
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ border: `1px solid ${obj.cor}40`, background: `${obj.cor}10` }}>
                  <obj.icon size={16} style={{ color: obj.cor }} />
                </div>
                <div>
                  <div className="w-5 h-[2px] mb-3" style={{ background: obj.cor }} />
                  <h3 className="text-white font-semibold text-sm mb-2">{obj.titulo}</h3>
                  <p className="text-white/58 text-sm leading-relaxed font-light">{obj.descricao}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Who attends */}
        <Reveal direction="up" delay={100}>
          <div className="grid lg:grid-cols-2 gap-8 p-6 sm:p-10 lg:p-14" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58 mb-5 block">Público-alvo</span>
              <h3 className="text-3xl font-bold text-white leading-tight mb-4">
                Um evento feito para quem move o comércio exterior do estado
              </h3>
              <p className="text-white/58 text-sm font-light leading-relaxed">
                Reunimos os principais atores do setor em um ambiente pensado para gerar resultados concretos e conexões duradouras — incluindo setores produtivos como atacado e varejo, fortalecendo a presença de entidades como Sincades e Avenpes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {publico.map((item, i) => {
                const cores = ["#f5a623","#4db8d4","#8dc63f","#c0392b"];
                const cor = cores[i % cores.length];
                return (
                  <div key={i} className="flex items-center gap-3 px-4 py-3" style={{ border: `1px solid ${cor}20`, background: `${cor}06` }}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cor, opacity: 0.7 }} />
                    <span className="text-white/78 text-sm">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
