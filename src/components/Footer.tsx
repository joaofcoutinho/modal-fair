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
              <img src="/modalfair.png" alt="Modal Fair Aracruz" className="h-12 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
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
              { file: "LOGO.png",    large: true },
              { file: "LOGO-1.png" },
              { file: "LOGO-3.png" },
              { file: "LOGO-4.png" },
              { file: "LOGO-5.png",  large: true },
              { file: "LOGO-6.png" },
              { file: "LogoPortocel-Positivo (2).png" },
              { file: "Mais logo.png", large: true },
              { file: "Mais logo-1.png" },
              { file: "Mais logo-2.png" },
              { file: "Mais logo 4.png" },
              { file: "2.png" },
              { file: "logo-camara-aracruz.png" },
              { file: "logo-amear.png" },
              { file: "logo-vigano.png" },
              { file: "MVLM.png", large: true },
              { file: "1.png", folder: "/logos-add/" },
              { file: "2.png", folder: "/logos-add/" },
              { file: "3.png", folder: "/logos-add/", large: true },
              { file: "4.png", folder: "/logos-add/", large: true },
            ].map(({ file, large, folder }, i) => (
              <img
                key={i}
                src={`${folder ?? "/logos-apoiadores/logos/"}${encodeURIComponent(file)}`}
                alt={file.replace(".png", "")}
                style={{
                  height: large ? 44 : 32,
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: large ? 0.7 : 0.45,
                }}
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

