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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2e]/95 backdrop-blur-md shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#">
            <img src="/modalfair.png" alt="Modal Fair Aracruz" className="h-14 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#f5a623] transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#inscricao"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#f5a623] text-[#0d1b2e] font-bold text-sm rounded-full hover:bg-[#e09b1f] transition-colors"
          >
            Garanta sua vaga
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1b2e]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-[#f5a623] transition-colors text-base font-medium py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-[#f5a623] text-[#0d1b2e] font-bold rounded-full"
            >
              Garanta sua vaga
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

