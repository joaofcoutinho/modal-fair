"use client";

const logos = [
  { file: "LOGO.png",                        alt: "Apoiador" },
  { file: "LOGO-1.png",                      alt: "Apoiador" },
  { file: "LOGO-2.png",                      alt: "Apoiador" },
  { file: "LOGO-3.png",                      alt: "Apoiador" },
  { file: "LOGO-4.png",                      alt: "Apoiador" },
  { file: "LOGO-5.png",                      alt: "Apoiador" },
  { file: "LOGO-6.png",                      alt: "Apoiador" },
  { file: "LogoPortocel-Positivo (2).png",   alt: "Portocel" },
  { file: "Mais logo.png",                   alt: "Apoiador" },
  { file: "Mais logo-1.png",                 alt: "Apoiador" },
  { file: "Mais logo-2.png",                 alt: "Apoiador" },
  { file: "Mais logo 4.png",                 alt: "Apoiador" },
  { file: "2.png",                           alt: "Apoiador" },
  { file: "3.png",                           alt: "Apoiador" },
];

export default function Apoiadores() {
  const track = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <section
      className="relative"
      style={{ background: "#8dc63f", overflow: "hidden", padding: "28px 0" }}
    >
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Left/right fade */}
      <div className="absolute inset-y-0 left-0 z-10 w-40 pointer-events-none"
        style={{ background: "linear-gradient(to right, #8dc63f, transparent)" }} />
      <div className="absolute inset-y-0 right-0 z-10 w-40 pointer-events-none"
        style={{ background: "linear-gradient(to left, #8dc63f, transparent)" }} />

      {/* Label */}
      <p className="text-center text-sm tracking-[0.4em] uppercase font-semibold text-white mb-6">
        Apoio & Parceiros
      </p>

      {/* Marquee */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: "80px",
            width: "max-content",
            animation: "marquee-scroll 30s linear infinite",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              style={{ flexShrink: 0, height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={`/logos-apoiadores/logos/${encodeURIComponent(logo.file)}`}
                alt={logo.alt}
                style={{
                  height: "100%",
                  width: "auto",
                  maxWidth: 280,
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 1,
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
