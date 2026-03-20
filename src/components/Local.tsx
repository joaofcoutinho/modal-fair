import { MapPin, Store, Mic, Users, Wifi, Car, Coffee, Shield } from "lucide-react";

const infraestrutura = [
  {
    icon: Store,
    titulo: "Área de Exposições",
    items: ["Estandes padronizados e customizados", "Credenciamento automatizado", "Backdrop instagramável", "Totens interativos"],
  },
  {
    icon: Mic,
    titulo: "Plenária",
    items: ["Palco com painéis de LED", "Auditório com 400 cadeiras", "Sonorização profissional", "Apresentação cultural"],
  },
  {
    icon: Users,
    titulo: "Networking Lounge",
    items: ["Sofás e lounges confortáveis", "Máquina de café", "Pontos de recarga de celular", "TV LED para conteúdo"],
  },
  {
    icon: Coffee,
    titulo: "Coffee Center",
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
          {/* Map/image side */}
          <div
            className="relative h-72 lg:h-auto min-h-64 flex items-center justify-center"
            style={{ background: "#0f0f0f", borderRight: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80')",
                opacity: 0.15,
              }}
            />
            <div className="relative z-10 text-center">
              <MapPin size={32} className="mx-auto mb-3 text-white/38" />
              <p className="text-white/60 font-semibold text-lg">Sítio Santa Joana</p>
              <p className="text-white/52 text-sm mt-1">Aracruz, Espírito Santo</p>
            </div>
          </div>

          {/* Info side */}
          <div className="p-10 lg:p-12">
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
            <div key={i} className="p-8 flex flex-col gap-4" style={{ background: "#141414" }}>
              <item.icon size={18} className="text-white/70" />
              <h4 className="text-white font-semibold text-sm">{item.titulo}</h4>
              <ul className="space-y-2">
                {item.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/52 text-xs font-light">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-white/20" />
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
