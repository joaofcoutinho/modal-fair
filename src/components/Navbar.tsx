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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0d1b2e]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <ModalFairLogo size={40} />
            <div className="hidden sm:block">
              <p className="text-white font-black text-lg leading-none tracking-wide">MODAL FAIR</p>
              <p className="text-white font-black text-lg leading-none tracking-wide">ARACRUZ</p>
            </div>
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

function ModalFairLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="22" height="22" rx="2" fill="transparent" />
      {/* Top-left: orange arrows */}
      <g transform="translate(0, 0)">
        <path d="M18 4 L4 4 L4 18 L10 12 L18 4Z" fill="#f5a623" opacity="0.9"/>
        <path d="M4 18 L4 4 L18 18 L12 18 L4 18Z" fill="#f5a623" opacity="0.6"/>
      </g>
      {/* Top-right: green arrows */}
      <g transform="translate(26, 0)">
        <path d="M4 4 L18 4 L18 18 L12 12 L4 4Z" fill="#8dc63f" opacity="0.9"/>
        <path d="M18 18 L18 4 L4 18 L10 18 L18 18Z" fill="#8dc63f" opacity="0.6"/>
      </g>
      {/* Bottom-left: red arrows */}
      <g transform="translate(0, 26)">
        <path d="M18 18 L4 18 L4 4 L10 10 L18 18Z" fill="#c0392b" opacity="0.9"/>
        <path d="M4 4 L4 18 L18 4 L12 4 L4 4Z" fill="#c0392b" opacity="0.6"/>
      </g>
      {/* Bottom-right: blue arrows */}
      <g transform="translate(26, 26)">
        <path d="M4 18 L18 18 L18 4 L12 10 L4 18Z" fill="#4db8d4" opacity="0.9"/>
        <path d="M18 4 L18 18 L4 4 L10 4 L18 4Z" fill="#4db8d4" opacity="0.6"/>
      </g>
    </svg>
  );
}
