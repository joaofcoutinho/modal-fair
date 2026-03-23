"use client";
import { useState, useRef, useEffect } from "react";

import Reveal from "./Reveal";
import Image from "next/image";

const CORES = ["#f5a623", "#4db8d4", "#8dc63f", "#c0392b"];

const palestrantes = [
  { nome: "Adriana Junger Lacerda",           cargo: "Delegada da Alfândega da Receita Federal do Porto de Vitória",                   foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Adriana Junger Lacerda - Delegada da Alfândega da Receita Federal do Porto de Vitória.jpeg" },
  { nome: "Alexandre Billot",                 cargo: "Gerente Executivo da PORTOCEL",                                                  foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/ALEXANDRE BILLOT - Gerente Executivo da PORTOCEL.jpg" },
  { nome: "Alexandre Malta",                  cargo: "Diretor de Relações Institucionais da Agência NOVA ES",                          foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Alexandre Malta - Diretor de Relações Institucionais da Agência NOVA ES.jpeg" },
  { nome: "Anderson Abreu",                   cargo: "Diretor Executivo do Parklog-ES",                                                foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Anderson Abreu - Diretor Executivo do Parklog-ES.jpeg" },
  { nome: "Anderson Carvalho",                cargo: "Diretor Executivo do IMETAME LOGÍSTICA PORTO",                                   foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Anderson Carvalho - Diretor Executivo do IMETAME LOGÍSTICA PORTO .jpeg" },
  { nome: "Bruno Carlesso",                   cargo: "Diretor Jurídico da IMETAME",                                                    foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Bruno Carlesso - Diretor Jurídico da IMETAME.jpeg" },
  { nome: "Carla Rios do Amaral",             cargo: "Gerente Comercial da VPORTS",                                                    foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Carla Rios Do Amaral - Gerente Comercial da VPORTS.jpeg" },
  { nome: "Christiane Menezes",               cargo: "Gerente Executiva da Agência NOVA ES",                                           foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Christiane Menezes - Gerente Executiva da Agência NOVA ES.jpeg" },
  { nome: "Daniella Caldellas",               cargo: "Chefe da Unidade Regional da ANTAQ de Vitória-ES",                               foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Daniella Caldellas - Chefe da Unidade Regional da ANTAQ de Vitória-ES.jpeg" },
  { nome: "Erimar Trindade",                  cargo: "Vice-Presidente do SINDIEX",                                                     foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Erimar Trindade - Vice-Presidente do SINDIEX.jpeg" },
  { nome: "Glegson Ninz",                     cargo: "Prof. do SENAC – FECOMÉRCIO",                                                    foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Glegson Ninz - Prof. do SENAC - FECOMÉRCIO.jpeg" },
  { nome: "Henrique Mauri",                   cargo: "Founder e CEO da Dotcode",                                                       foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Henrique Mauri - Founder e CEO da Dotcode.jpg" },
  { nome: "José Eduardo Farias de Azevedo",   cargo: "Secretário de Desenvolvimento Econômico da Prefeitura de Aracruz",               foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/José Eduardo Farias de Azevedo - Secretário de Desenvolvimento Econômico da Prefeitura de Aracruz.jpeg" },
  { nome: "Luciana Mattar",                   cargo: "Advogada Especialista em Direito Marítimo, Portuário e Aduaneiro",               foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Luciana Mattar - Advogada Especialista em Direito Marítimo, Portuário e Aduaneiro.jpeg" },
  { nome: "Luciano Kelly do Nascimento",      cargo: "Advogado Especialista em Direito Marítimo e Portuário",                          foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Luciano Kelly do Nascimento - Advogado Especialista em Direito Marítimo e Portuário .jpeg" },
  { nome: "Marcus Modenesi Vicente",          cargo: "Advogado do MVLM Advogados Associados",                                          foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Marcus Modenesi Vicente - Advogado do MVLM Advogados Associados.jpeg" },
  { nome: "Pablo Lira",                       cargo: "Diretor Geral do Instituto Jones dos Santos Neves",                              foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/PABLO LIRA - Diretor Geral do Instituto Jones dos Santos Neves.jpeg" },
  { nome: "Paulo Alves",                      cargo: "Diretor Executivo do TERCA ZILLI ARMAZÉNS GERAIS",                               foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Paulo Alves - Diretor Executivo do TERCA ZILLI ARMAZÉNS GERAIS.jpeg" },
  { nome: "Rafael Henrique G. T. de Freitas", cargo: "Especialista do COAL – Conselho de Assuntos Legislativos da FINDES",             foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Rafael Henrique G. T. De Freitas - Especialista do COAL - Conselho de Assuntos Legislativos da FINDES.jpeg" },
  { nome: "Roberta Kato",                     cargo: "CEO da Kato Soluções Empresariais",                                              foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Roberta Kato - CEO da Kato Soluções Empresariais.jpeg" },
  { nome: "Samir Nemer",                      cargo: "Especialista em Direito Tributário do Furtado Nemer Advogados",                  foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Samir Nemer - Especialista em Direito Tributário do Furtado Nemer Advogados.jpeg" },
  { nome: "Sidemar Acosta",                   cargo: "Presidente do SINDIEX",                                                          foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/Sidemar Acosta - Presidente do SINDIEX.jpeg" },
  { nome: "Valéria Becali",                   cargo: "Diretora Executiva da AMEAR – Associação dos Empresários de Aracruz e Região",   foto: "/FOTO DOS PALESTRANTES 2/FOTOS DOS PALESTRANTES/VALÉRIA BECALI - Diretora Executiva da AMEAR -Associação dos Empresários de Aracruz e Região.jpg" },
];

const mediadores = [
  { nome: "Abdo Filho",                   cargo: "Jornalista de A Gazeta",                                                           foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Abdo Filho - Jornalista de A Gazeta.jpeg" },
  { nome: "Carla Fregona",                cargo: "Advogada Especialista em Direito Marítimo",                                        foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Carla Fregona - Advogada Especialista em Direito Marítimo.jpeg" },
  { nome: "Eder Muller",                  cargo: "CEO da Convertido Marketing",                                                       foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Eder Muller - CEO da Convertido Marketing.jpeg" },
  { nome: "Filipe Loureiro",              cargo: "Advogado e Subprocurador da Câmara Municipal de Aracruz",                          foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Filipe Loureiro - Advogado e Subprocurador da Câmara Municipal de Aracruz.jpeg" },
  { nome: "Guilherme Travaglia Loureiro", cargo: "Advogado e Procurador do Município de Aracruz",                                    foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Guilherme Travaglia Loureiro - Advogado e Procurador do Município de Aracruz .jpeg" },
  { nome: "Ícaro Dominisini",             cargo: "Advogado Especialista em Direito Tributário e Procurador do Município de Aracruz", foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Ícaro Dominisini - Advogado Especialista em Direito Tributário e Procurador do Município de Aracruz.jpeg" },
  { nome: "Larissa Viale Baroni",         cargo: "Advogada e Secretária de Desenvolvimento Urbano da Prefeitura de Aracruz",         foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Larissa Viale Baroni - Advogada e Secretária de Desenvolvimento Urbano da Prefeitura de Aracruz.jpeg" },
  { nome: "Maurício Xavier Nascimento",   cargo: "Advogado e Procurador de carreira da Câmara Municipal de Aracruz",                 foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Maurício Xavier Nascimento - Advogado e Procurador de carreira da Câmara Municipal de Aracruz.jpeg" },
  { nome: "Sebastião Viganô Neto",        cargo: "Advogado Especialista em Direito Civil e Empresarial",                             foto: "/MEDIADORES MODAL FAIR 1/MEDIADORES DA MODAL FAIR ARACRUZ/Sebastião Viganô Neto - Advogado Especialista em Direito Civil e Empresarial.jpeg" },
];

function SpeakerCard({ nome, cargo, foto, cor }: { nome: string; cargo: string; foto: string; cor: string }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col w-52"
      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#141414" }}
    >
      <div className="relative h-56 overflow-hidden" style={{ background: "#0f0f0f", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <Image
          src={foto}
          alt={nome}
          fill
          className="object-cover object-top"
          sizes="208px"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.5) 0%, transparent 60%)" }} />
      </div>
      <div className="p-4 flex flex-col" style={{ height: 110 }}>
        <div className="w-5 h-[2px] mb-3 flex-shrink-0" style={{ background: cor }} />
        <h3 className="text-white font-semibold text-sm mb-1 leading-tight flex-shrink-0">{nome}</h3>
        <p className="text-white/52 text-xs leading-relaxed font-light overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{cargo}</p>
      </div>
    </div>
  );
}

const STEP = 240 * 4;

function GalleryNav({ items, coreOffset = 0 }: { items: typeof palestrantes; coreOffset?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const cor = CORES[coreOffset % CORES.length];

  const updateState = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    updateState();
  }, []);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "next" ? STEP : -STEP, behavior: "smooth" });
  };

  return (
    <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      {/* Track */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #060f22 20%, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #060f22 20%, transparent)" }} />
        <div
          ref={trackRef}
          onScroll={updateState}
          className="flex gap-4 overflow-x-auto px-6 pb-2 pt-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {items.map((p, i) => (
            <div key={i} className="flex-shrink-0 w-52">
              <SpeakerCard {...p} cor={CORES[(i + coreOffset) % CORES.length]} />
            </div>
          ))}
        </div>
      </div>

      {/* Botões centralizados */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => scroll("prev")}
          disabled={atStart}
          className="flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-all disabled:opacity-25"
          style={{ border: `1px solid ${cor}`, color: cor }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          Anterior
        </button>

        <button
          onClick={() => scroll("next")}
          disabled={atEnd}
          className="flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-all disabled:opacity-25"
          style={{ background: cor, border: `1px solid ${cor}`, color: "#0f0f0f" }}
        >
          Próximo
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  );
}

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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
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

        {/* Palestrantes */}
        <Reveal delay={80}>
          <GalleryNav items={palestrantes} coreOffset={0} />
        </Reveal>

        {/* Mediadores */}
        <Reveal>
          <div className="flex items-center gap-4 mb-10 mt-16">
            <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.12)" }} />
            <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58">Mediadores</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <GalleryNav items={mediadores} coreOffset={2} />
        </Reveal>


      </div>
    </section>
  );
}
