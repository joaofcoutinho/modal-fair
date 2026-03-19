import { Eye, Users, TrendingUp, Store, MessageCircle } from "lucide-react";

const beneficios = [
  {
    icon: Eye,
    cor: "#f5a623",
    titulo: "Alta Visibilidade",
    descricao: "Seu estande no centro do maior evento de logística e portos de Aracruz.",
  },
  {
    icon: Users,
    cor: "#8dc63f",
    titulo: "500+ Visitantes/dia",
    descricao: "Acesso direto a decisores e empresas do comércio exterior capixaba.",
  },
  {
    icon: TrendingUp,
    cor: "#4db8d4",
    titulo: "Geração de Negócios",
    descricao: "Ambiente propício para fechar contratos e expandir sua carteira de clientes.",
  },
  {
    icon: Store,
    cor: "#c0392b",
    titulo: "Presença de Marca",
    descricao: "3 dias de visibilidade para o público mais qualificado do setor no ES.",
  },
];

export default function Stand() {
  return (
    <section id="stand" className="py-24 bg-[#0d1b2e] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8dc63f]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#4db8d4]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#8dc63f] text-sm font-bold tracking-widest uppercase mb-4 block">
            Expositores
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Tenha seu <span className="text-[#8dc63f]">Stand</span> na Modal Fair
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Posicione sua empresa no coração do evento. Estandes montados e gerenciados pela{" "}
            <strong className="text-white">Stand By Eventos</strong>.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${b.cor}15`, border: `1px solid ${b.cor}25` }}
              >
                <b.icon size={22} style={{ color: b.cor }} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{b.titulo}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.descricao}</p>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="bg-gradient-to-r from-[#0f2a1a] to-[#091f15] border border-[#8dc63f]/20 rounded-3xl p-10 sm:p-14 text-center">
          <div className="flex justify-center gap-2 mb-8">
            {["#f5a623", "#8dc63f", "#4db8d4", "#c0392b"].map((cor, i) => (
              <div key={i} className="w-10 h-1.5 rounded-full" style={{ backgroundColor: cor }} />
            ))}
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Interesse em ter um stand?
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto text-lg">
            Entre em contato com a{" "}
            <span className="text-white font-semibold">Stand By Eventos</span> e garanta seu
            espaço na 1ª Modal Fair Aracruz.
          </p>
          <a
            href="https://wa.me/552732452608"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-[#8dc63f] text-[#0d1b2e] font-black text-base rounded-full hover:bg-[#7db52e] transition-all hover:scale-105 shadow-lg shadow-[#8dc63f]/20"
          >
            <MessageCircle size={20} />
            Falar com Stand By Eventos
          </a>
          <p className="text-white/30 text-sm mt-5">(27) 3245-2608 · Stand By Eventos</p>
        </div>
      </div>
    </section>
  );
}
