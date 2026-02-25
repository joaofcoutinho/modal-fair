import { Target, TrendingUp, Users, Award } from "lucide-react";

const objetivos = [
  {
    icon: <Target size={28} className="text-[#f5a623]" />,
    titulo: "Objetivo Principal",
    descricao: "Gerar conexões que se transformem em negócios e investimentos concretos.",
  },
  {
    icon: <TrendingUp size={28} className="text-[#8dc63f]" />,
    titulo: "Posicionamento Estratégico",
    descricao: "Posicionar Aracruz como um novo polo portuário e logístico de relevância nacional, destacando seu potencial no comércio exterior.",
  },
  {
    icon: <Users size={28} className="text-[#4db8d4]" />,
    titulo: "Integração e Diálogo",
    descricao: "Promover conhecimento, integração e diálogo entre os setores de comércio exterior, logística e portos, estimulando debates qualificados.",
  },
  {
    icon: <Award size={28} className="text-[#c0392b]" />,
    titulo: "Legado para Aracruz",
    descricao: "Gerar um legado de desenvolvimento econômico e social para Aracruz, impulsionando oportunidades, inovação e crescimento sustentável.",
  },
];

const stats = [
  { value: "500+", label: "Participantes por dia" },
  { value: "3", label: "Dias de evento" },
  { value: "5", label: "Painéis temáticos" },
  { value: "1ª", label: "Edição em Aracruz" },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#0d1b2e] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4db8d4]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-4 block">
            O Evento
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Transformando conexões em{" "}
            <span className="text-[#f5a623]">negócios</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
            A Modal Fair Aracruz é a <strong className="text-white">1ª Feira de Comércio Exterior, Logística e Portos de Aracruz</strong>,
            um evento que reunirá empresas, autoridades, sindicatos e especialistas para fortalecer
            o ecossistema portuário e logístico do Espírito Santo.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#f5a623]/30 transition-colors"
            >
              <p className="text-4xl sm:text-5xl font-black text-[#f5a623] mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objetivos.map((obj, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {obj.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-3">{obj.titulo}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{obj.descricao}</p>
            </div>
          ))}
        </div>

        {/* Who attends */}
        <div className="mt-20 bg-gradient-to-r from-[#1a2e4a] to-[#152438] border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-4 block">
                Público-alvo
              </span>
              <h3 className="text-3xl font-black text-white mb-4">
                Um evento feito para quem move o comércio exterior do estado
              </h3>
              <p className="text-white/60 leading-relaxed">
                Reunimos os principais atores do setor em um ambiente pensado para gerar
                resultados concretos e conexões duradouras.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Empresas de Logística",
                "Comércio Exterior",
                "Operadores Portuários",
                "Poder Público",
                "Sindicatos do Setor",
                "Advogados Especialistas",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                >
                  <div className="w-2 h-2 bg-[#f5a623] rounded-full flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
