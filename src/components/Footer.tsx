import { MapPin, Calendar, Instagram, Linkedin, Mail } from "lucide-react";

const BRAND_COLORS = ["#f5a623", "#8dc63f", "#4db8d4", "#c0392b"];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Brand strip */}
      <div className="flex">
        {BRAND_COLORS.map((cor, i) => (
          <div key={i} className="flex-1 h-[2px]" style={{ background: cor }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <FooterLogo />
              <div>
                <p className="text-white font-bold text-base leading-none">MODAL FAIR</p>
                <p className="text-white/58 font-medium text-xs leading-none mt-1 tracking-widest">ARACRUZ</p>
              </div>
            </div>
            <p className="text-white/70 text-sm font-light leading-relaxed max-w-sm mb-8">
              A 1ª Feira de Comércio Exterior, Logística e Portos de Aracruz. Transformando conexões em negócios e investimentos que fortalecem o ecossistema portuário e logístico do Espírito Santo.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: <Instagram size={14} />, label: "Instagram" },
                { icon: <Linkedin size={14} />,  label: "LinkedIn" },
                { icon: <Mail size={14} />,       label: "E-mail" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/60 transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Event info */}
          <div>
            <h4 className="text-white/58 text-[11px] font-medium tracking-[0.3em] uppercase mb-6">O Evento</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar size={13} className="text-white/38 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/78 text-sm font-medium">14, 15 e 16 de Outubro de 2026</p>
                  <p className="text-white/38 text-xs font-light mt-0.5">Quarta, Quinta e Sexta-feira</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-white/38 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/78 text-sm font-medium">Cerimonial 2 — Sítio Santa Joana</p>
                  <p className="text-white/38 text-xs font-light mt-0.5">Aracruz, Espírito Santo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/58 text-[11px] font-medium tracking-[0.3em] uppercase mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: "#sobre",        label: "Sobre o evento" },
                { href: "#programacao",  label: "Programação" },
                { href: "#palestrantes", label: "Palestrantes" },
                { href: "#local",        label: "Local" },
                { href: "#patrocinio",   label: "Patrocínio" },
                { href: "#inscricao",    label: "Inscrições" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-white/70 hover:text-white/78 transition-colors text-sm font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sponsors */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-8 mb-6">
          <p className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/38 mb-5">Realização</p>
          <p className="text-white/38 text-sm">Comissão de Eventos Modal Fair Aracruz</p>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-6 mb-10">
          <p className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/52 mb-6">Apoio</p>
          <div className="flex flex-wrap items-center gap-6">
            {[
              "LOGO.png",
              "LOGO-1.png",
              "LOGO-2.png",
              "LOGO-3.png",
              "LOGO-4.png",
              "LOGO-5.png",
              "LOGO-6.png",
              "LogoPortocel-Positivo (2).png",
              "Mais logo.png",
              "Mais logo-1.png",
              "Mais logo-2.png",
              "Mais logo 4.png",
              "2.png",
              "3.png",
            ].map((file, i) => (
              <img
                key={i}
                src={`/logos-apoiadores/logos/${encodeURIComponent(file)}`}
                alt={`Apoiador ${i + 1}`}
                className="h-8 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.45 }}
              />
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/52 text-xs font-light">
          <p>© 2026 Modal Fair Aracruz. Todos os direitos reservados.</p>
          <p>Desenvolvido com Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0,0)">
        <path d="M18 4 L4 4 L4 18 L10 12 L18 4Z" fill="#f5a623" opacity="0.9"/>
        <path d="M4 18 L4 4 L18 18 L12 18 L4 18Z" fill="#f5a623" opacity="0.3"/>
      </g>
      <g transform="translate(26,0)">
        <path d="M4 4 L18 4 L18 18 L12 12 L4 4Z" fill="#8dc63f" opacity="0.9"/>
        <path d="M18 18 L18 4 L4 18 L10 18 L18 18Z" fill="#8dc63f" opacity="0.3"/>
      </g>
      <g transform="translate(0,26)">
        <path d="M18 18 L4 18 L4 4 L10 10 L18 18Z" fill="#c0392b" opacity="0.9"/>
        <path d="M4 4 L4 18 L18 4 L12 4 L4 4Z" fill="#c0392b" opacity="0.3"/>
      </g>
      <g transform="translate(26,26)">
        <path d="M4 18 L18 18 L18 4 L12 10 L4 18Z" fill="#4db8d4" opacity="0.9"/>
        <path d="M18 4 L18 18 L4 4 L10 4 L18 4Z" fill="#4db8d4" opacity="0.3"/>
      </g>
    </svg>
  );
}
