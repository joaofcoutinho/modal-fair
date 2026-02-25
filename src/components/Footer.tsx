import { MapPin, Calendar, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060f1c] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <FooterLogo />
              <div>
                <p className="text-white font-black text-lg leading-none">MODAL FAIR</p>
                <p className="text-white font-black text-lg leading-none">ARACRUZ</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              A 1ª Feira de Comércio Exterior, Logística e Portos de Aracruz.
              Transformando conexões em negócios e investimentos que fortalecem o
              ecossistema portuário e logístico do Espírito Santo.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
                { icon: <Mail size={18} />, label: "E-mail" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-[#f5a623] hover:border-[#f5a623]/30 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Event info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              O Evento
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar size={16} className="text-[#f5a623] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm font-semibold">14, 15 e 16 de Outubro de 2026</p>
                  <p className="text-white/40 text-xs">Quarta, Quinta e Sexta-feira</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#f5a623] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm font-semibold">Cerimonial 2 — Sítio Santa Joana</p>
                  <p className="text-white/40 text-xs">Aracruz, Espírito Santo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#sobre", label: "Sobre o evento" },
                { href: "#programacao", label: "Programação" },
                { href: "#palestrantes", label: "Palestrantes" },
                { href: "#local", label: "Local" },
                { href: "#patrocinio", label: "Patrocínio" },
                { href: "#inscricao", label: "Inscrições" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#f5a623] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sponsors row */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-white/30 text-xs tracking-widest uppercase text-center mb-6 font-bold">
            Realização
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Comissão de Eventos Modal Fair Aracruz"].map((sponsor, i) => (
              <span key={i} className="text-white/30 text-sm font-bold">
                {sponsor}
              </span>
            ))}
          </div>
        </div>

        {/* Apoio row */}
        <div className="border-t border-white/10 pt-6 mb-8">
          <p className="text-white/30 text-xs tracking-widest uppercase text-center mb-6 font-bold">
            Apoio
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["SINDIEX", "CDL", "Prefeitura de Aracruz", "Portocel", "Vports", "Terca Zilli", "Dotcode.ti"].map(
              (apoio, i) => (
                <span key={i} className="text-white/30 text-sm font-bold">
                  {apoio}
                </span>
              )
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>© 2026 Modal Fair Aracruz. Todos os direitos reservados.</p>
          <p>Desenvolvido com Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 0)">
        <path d="M18 4 L4 4 L4 18 L10 12 L18 4Z" fill="#f5a623" opacity="0.8"/>
        <path d="M4 18 L4 4 L18 18 L12 18 L4 18Z" fill="#f5a623" opacity="0.4"/>
      </g>
      <g transform="translate(26, 0)">
        <path d="M4 4 L18 4 L18 18 L12 12 L4 4Z" fill="#8dc63f" opacity="0.8"/>
        <path d="M18 18 L18 4 L4 18 L10 18 L18 18Z" fill="#8dc63f" opacity="0.4"/>
      </g>
      <g transform="translate(0, 26)">
        <path d="M18 18 L4 18 L4 4 L10 10 L18 18Z" fill="#c0392b" opacity="0.8"/>
        <path d="M4 4 L4 18 L18 4 L12 4 L4 4Z" fill="#c0392b" opacity="0.4"/>
      </g>
      <g transform="translate(26, 26)">
        <path d="M4 18 L18 18 L18 4 L12 10 L4 18Z" fill="#4db8d4" opacity="0.8"/>
        <path d="M18 4 L18 18 L4 4 L10 4 L18 4Z" fill="#4db8d4" opacity="0.4"/>
      </g>
    </svg>
  );
}
