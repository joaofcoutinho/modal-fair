"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programacao", label: "Programação" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#local", label: "Local" },
  { href: "#patrocinio", label: "Patrocínio" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? "rgba(15,15,15,0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(24px)" : "none",
      }}
    >
      <style>{`
        @keyframes nav-grow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes nav-slide-down {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* Bottom border that grows left→right on scroll */}
      {isScrolled && (
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, #f5a623, #8dc63f, #4db8d4, #c0392b)",
            transformOrigin: "left",
            animation: "nav-grow 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <a href="#">
            <img src="/modalfair.png" alt="Modal Fair Aracruz" className="h-10 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#inscricao"
            className="hidden md:inline-flex items-center px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all hover:opacity-80"
            style={{ background: "#f5a623", color: "#0f0f0f" }}
          >
            Garanta sua vaga
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/60 hover:text-white p-2 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{ background: "rgba(15,15,15,0.99)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/75 hover:text-white transition-colors text-sm font-medium py-3 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-wide uppercase rounded-full"
              style={{ background: "#f5a623", color: "#0f0f0f" }}
            >
              Garanta sua vaga
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
