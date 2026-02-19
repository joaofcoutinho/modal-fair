const palestrantes = [
  {
    nome: "James Smith",
    cargo: "Delegado da Alfândega da Receita Federal do Brasil do Porto de Vitória/ES",
    imagem: null,
  },
  {
    nome: "Adriana Junjer",
    cargo: "Delegada da Alfândega da Receita Federal do Brasil do Porto de Vitória/ES",
    imagem: null,
  },
  {
    nome: "Jonathan",
    cargo: "Delegado da Alfândega da Receita Federal do Brasil do Porto de Vitória/ES",
    imagem: null,
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

export default function Palestrantes() {
  return (
    <section id="palestrantes" className="py-24 bg-[#0d1b2e] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background image — navio aéreo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&q=80')",
        }}
      />
      {/* Gradientes sobre a imagem */}
      <div className="absolute inset-0 bg-[#0d1b2e]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2e]/60 via-transparent to-[#0d1b2e]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2e]/70 via-transparent to-[#0d1b2e]/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-4 block">
            Speakers
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Palestrantes <span className="text-[#f5a623]">Confirmados</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Especialistas de alto nível para debater o futuro do comércio exterior,
            logística e portos do Espírito Santo.
          </p>
        </div>

        {/* Event info banner */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 py-4 px-8 bg-white/5 border border-white/10 rounded-2xl w-fit mx-auto">
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-[#f5a623]">📅</span>
            <span className="font-semibold">15/05/2026 — Sexta-feira</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-[#f5a623]">🕙</span>
            <span className="font-semibold">10h00</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-[#f5a623]">📍</span>
            <span className="font-semibold">Sítio Santa Joana, Aracruz — ES</span>
          </div>
        </div>

        {/* Speakers grid */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {palestrantes.map((p, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-[#1a2e4a] to-[#152438] border border-white/10 rounded-3xl overflow-hidden hover:border-[#f5a623]/30 transition-all hover:scale-[1.02]"
            >
              {/* Photo area */}
              <div className="h-64 bg-gradient-to-br from-[#0d1b2e] to-[#1a2e4a] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=60')] bg-cover bg-center opacity-10" />
                <div className="w-24 h-24 bg-[#f5a623]/20 border-2 border-[#f5a623]/40 rounded-full flex items-center justify-center z-10">
                  <span className="text-3xl font-black text-[#f5a623]">
                    {initials(p.nome)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="h-1 w-12 bg-[#f5a623] rounded-full mb-4" />
                <h3 className="text-white font-black text-xl mb-2">{p.nome}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.cargo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More speakers coming */}
        <div className="text-center bg-white/5 border border-dashed border-white/20 rounded-3xl py-10 px-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-2 h-2 bg-[#f5a623] rounded-full animate-pulse" />
            <span className="text-[#f5a623] font-bold text-sm tracking-widest uppercase">
              Em breve
            </span>
            <div className="w-2 h-2 bg-[#f5a623] rounded-full animate-pulse" />
          </div>
          <p className="text-white/60 text-base">
            Mais palestrantes serão anunciados em breve.
            <br />
            <span className="text-white/40 text-sm">Fique atento às nossas redes sociais.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
