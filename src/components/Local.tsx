import { MapPin, Store, Mic, Users, Wifi, Car, Coffee, Shield } from "lucide-react";

const infraestrutura = [
  {
    icon: <Store size={22} className="text-[#f5a623]" />,
    titulo: "Área de Exposições",
    items: ["Estandes padronizados e customizados", "Credenciamento automatizado", "Backdrop instagramável", "Totens interativos"],
  },
  {
    icon: <Mic size={22} className="text-[#8dc63f]" />,
    titulo: "Plenária",
    items: ["Palco com painéis de LED", "Auditório com 400 cadeiras", "Sonorização profissional", "Apresentação cultural"],
  },
  {
    icon: <Users size={22} className="text-[#4db8d4]" />,
    titulo: "Networking Lounge",
    items: ["Sofás e lounges confortáveis", "Máquina de café", "Pontos de recarga de celular", "TV LED para conteúdo"],
  },
  {
    icon: <Coffee size={22} className="text-[#c0392b]" />,
    titulo: "Coffee Center",
    items: ["Espaço de networking premium", "Mobiliário personalizado", "Distribuição de brindes", "Apoio para reuniões"],
  },
];

const facilities = [
  { icon: <Car size={18} />, label: "Estacionamento gratuito para 1.200 carros" },
  { icon: <Wifi size={18} />, label: "Wi-Fi gratuito full time" },
  { icon: <Coffee size={18} />, label: "Restaurante — Churrasco a la carte" },
  { icon: <Shield size={18} />, label: "Segurança, gerador e ambulância" },
];

export default function Local() {
  return (
    <section id="local" className="py-24 bg-[#091525] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-4 block">
            VEJA NO MAPA
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            O <span className="text-[#f5a623]">Local</span>
          </h2>
        </div>

        {/* Venue card */}
        <div className="bg-gradient-to-r from-[#1a2e4a] to-[#152438] border border-white/10 rounded-3xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-64 lg:h-auto min-h-64 bg-gradient-to-br from-[#0d1b2e] to-[#152438] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <MapPin size={32} className="text-[#f5a623]" />
                  </div>
                  <p className="text-white font-black text-xl">Sítio Santa Joana</p>
                  <p className="text-white/60 text-sm mt-1">Aracruz/ES</p>
                </div>
              </div>
            </div>

            {/* Info side */}
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={20} className="text-[#f5a623]" />
                <div>
                  <p className="text-white font-black text-xl">Sítio Santa Joana</p>
                  <p className="text-white/50 text-sm">Aracruz, Espírito Santo</p>
                </div>
              </div>

              <p className="text-white/60 text-base leading-relaxed mb-8">
                Um espaço completo e estratégico para receber os maiores nomes do
                comércio exterior, logística e portos do Brasil.
                Infraestrutura de ponta para garantir a melhor experiência.
              </p>

              {/* Facilities */}
              <div className="space-y-3">
                {facilities.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <span className="text-[#f5a623]">{f.icon}</span>
                    <span className="text-sm">{f.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#f5a623] text-[#0d1b2e] font-bold text-sm rounded-full hover:bg-[#e09b1f] transition-colors"
              >
                <MapPin size={16} />
                Ver no mapa
              </a>
            </div>
          </div>
        </div>

        {/* Infrastructure grid */}
        <h3 className="text-white/50 text-sm font-bold tracking-widest uppercase mb-8 text-center">
          Infraestrutura do Evento
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infraestrutura.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">{item.icon}</div>
              <h4 className="text-white font-bold text-base mb-4">{item.titulo}</h4>
              <ul className="space-y-2">
                {item.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/50 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mt-1.5 flex-shrink-0" />
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
