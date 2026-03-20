import Reveal from "./Reveal";

const palestrantes = [
  { nome: "James Smith",    cargo: "Delegado da Alfândega da Receita Federal do Brasil — Porto de Vitória/ES", cor: "#f5a623" },
  { nome: "Adriana Junjer", cargo: "Delegada da Alfândega da Receita Federal do Brasil — Porto de Vitória/ES", cor: "#4db8d4" },
  { nome: "Jonathan",       cargo: "Delegado da Alfândega da Receita Federal do Brasil — Porto de Vitória/ES", cor: "#8dc63f" },
];

const initials = (name: string) =>
  name.split(" ").slice(0, 2).map((n) => n[0]).join("");

export default function Palestrantes() {
  return (
    <section id="palestrantes" className="py-28" style={{ background: "#060f22" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.12)" }} />
            <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58">Quem conduz</span>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal direction="right">
            <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Palestrantes<br />
              <span className="text-white/58">Confirmados</span>
            </h2>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm font-light lg:text-right">
              Especialistas de alto nível para debater o futuro do comércio exterior, logística e portos do Espírito Santo.
            </p>
          </Reveal>
        </div>

        {/* Event meta row */}
        <Reveal delay={100}>
          <div
            className="flex flex-wrap items-center gap-6 px-6 py-4 mb-16 text-sm text-white/65 font-light"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#141414" }}
          >
            <span>📅 15 e 16/10/2026</span>
            <span className="hidden sm:block w-px h-3 bg-white/10" />
            <span>🕙 A partir das 10h</span>
            <span className="hidden sm:block w-px h-3 bg-white/10" />
            <span>📍 Sítio Santa Joana, Aracruz — ES</span>
          </div>
        </Reveal>

        {/* Speaker grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {palestrantes.map((p, i) => (
            <Reveal key={i} delay={i * 120} direction="up">
            <div
              className="flex flex-col"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#141414" }}
            >
              {/* Avatar area */}
              <div
                className="h-52 flex items-center justify-center"
                style={{ background: "#0f0f0f", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-18 h-18 flex items-center justify-center text-2xl font-bold"
                  style={{
                    width: 72,
                    height: 72,
                    border: `1px solid ${p.cor}40`,
                    color: p.cor,
                  }}
                >
                  {initials(p.nome)}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="w-6 h-[2px] mb-4" style={{ background: p.cor }} />
                <h3 className="text-white font-semibold text-base mb-2">{p.nome}</h3>
                <p className="text-white/58 text-xs leading-relaxed font-light">{p.cargo}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* More coming */}
        <div
          className="flex items-center gap-4 py-8 px-8"
          style={{ border: "1px dashed rgba(255,255,255,0.1)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
          <p className="text-white/58 text-sm font-light">
            Mais palestrantes serão anunciados em breve. Acompanhe nossas redes sociais.
          </p>
        </div>

      </div>
    </section>
  );
}
