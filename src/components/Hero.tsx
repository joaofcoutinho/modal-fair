import { MapPin, Calendar, Users, MessageCircle } from "lucide-react";

const BRAND_COLORS = ["#f5a623", "#8dc63f", "#4db8d4", "#c0392b"];

const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

function fadeUp(delay: number) {
  return { animation: `hero-fade-up 0.8s ${ease} ${delay}s both` };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "#0f0f0f" }}>

      <style>{`
        video::-webkit-media-controls { display: none !important; }
        video::-webkit-media-controls-start-playback-button { display: none !important; -webkit-appearance: none; }
        video::-webkit-media-controls-panel { display: none !important; }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-scale-in {
          from { opacity: 0; transform: scale(0.65); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes hero-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes strip-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes line-grow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
      `}</style>

      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        // @ts-ignore
        webkit-playsinline="true"
        style={{ opacity: 0.85, animation: `hero-fade-in 1.2s ease 0.2s both`, pointerEvents: "none" }}
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0" style={{ background: "rgba(15,15,15,0.3)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/40 via-transparent to-[#0f0f0f]" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.35) 0%, transparent 100%)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-20 flex flex-col items-center">

        {/* Label */}
        <div className="flex items-center gap-3 mb-2" style={fadeUp(0.1)}>
          <div
            className="h-px w-10"
            style={{ background: "rgba(255,255,255,0.3)", transformOrigin: "left", animation: `line-grow 0.6s ${ease} 0.1s both` }}
          />
          <span className="text-[11px] tracking-[0.4em] uppercase font-semibold" style={{ color: "#8dc63f", textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}>
            1ª Edição · Outubro 2026
          </span>
          <div
            className="h-px w-10"
            style={{ background: "rgba(255,255,255,0.3)", transformOrigin: "right", animation: `line-grow 0.6s ${ease} 0.1s both` }}
          />
        </div>

        {/* Logo */}
        <img
          src="/modalfair.png"
          alt="Modal Fair Aracruz"
          className="w-72 sm:w-96 object-contain mb-1"
          style={{ animation: `hero-scale-in 1s ${ease} 0.25s both` }}
        />

        {/* Subtitle */}
        <p
          className="text-white/90 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] uppercase font-semibold mb-8 px-2 text-center"
          style={{ textShadow: "0 1px 16px rgba(0,0,0,0.9)", ...fadeUp(0.45) }}
        >
          Feira de Comércio Exterior, Logística e Portos de Aracruz
        </p>

        {/* Divider */}
        <div className="flex w-48 mb-10">
          {BRAND_COLORS.map((cor, i) => (
            <div
              key={i}
              className="flex-1 h-[2px]"
              style={{ background: cor, transformOrigin: "left", animation: `strip-grow 0.4s ${ease} ${0.55 + i * 0.1}s both` }}
            />
          ))}
        </div>

        {/* Event meta */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 text-white/90 text-sm px-6 py-3"
          style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", ...fadeUp(0.7) }}
        >
          <div className="flex items-center gap-2">
            <Calendar size={13} className="text-white/60" />
            <span>14, 15 e 16 de Outubro de 2026</span>
          </div>
          <div className="hidden sm:block h-3 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-white/60" />
            <span>Sítio Santa Joana — Aracruz/ES</span>
          </div>
          <div className="hidden sm:block h-3 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <Users size={13} className="text-white/60" />
            <span>500 participantes/dia</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {[
            { href: "https://www.sympla.com.br/evento/modal-fair-aracruz-1-edicao-da-feira-de-comercio-exterior-logistica-e-portos-de-aracruz/3371335", label: "Garanta sua vaga", style: { background: "#f5a623", color: "#0f0f0f" }, delay: 0.85 },
            { href: "https://wa.me/5527996008632", label: "Seja Patrocinador", delay: 0.95 },
            { href: "https://wa.me/552732452608", label: "Quero um Stand", delay: 1.05 },
          ].map((cta, i) => (
            <a
              key={i}
              href={cta.href}
              target={cta.href.startsWith("http") ? "_blank" : undefined}
              rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="px-8 py-3 text-sm font-medium rounded-full transition-all flex items-center gap-2 hover:opacity-80"
              style={{
                ...(cta.style ?? { border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }),
                ...fadeUp(cta.delay),
              }}
            >
              {i > 0 && <MessageCircle size={14} />}
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom brand strip */}
      <div className="absolute bottom-0 left-0 right-0 flex">
        {BRAND_COLORS.map((cor, i) => (
          <div
            key={i}
            className="flex-1 h-[3px]"
            style={{
              background: cor,
              transformOrigin: "left",
              animation: `strip-grow 0.4s ${ease} ${1.1 + i * 0.12}s both`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
