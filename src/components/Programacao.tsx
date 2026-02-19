"use client";

import { useState } from "react";
import { Clock, Music, Coffee, Mic, MessageSquare, Utensils } from "lucide-react";

const dia1 = [
  {
    horario: "17h — 22h",
    titulo: "Coquetel de boas-vindas",
    descricao: "Abertura oficial com atração musical ao vivo",
    icon: <Music size={20} className="text-[#f5a623]" />,
    tipo: "social",
  },
];

const dia2 = [
  {
    horario: "8h — 9h",
    titulo: "Recepção e Credenciamento",
    descricao: "Boas-vindas e entrega do kit do participante",
    icon: <Clock size={20} className="text-[#4db8d4]" />,
    tipo: "operacional",
  },
  {
    horario: "8h30 — 9h",
    titulo: "Coffee Break de Abertura",
    descricao: "Coffee break com apresentação da Orquestra do Instituto Preservate",
    icon: <Coffee size={20} className="text-[#8dc63f]" />,
    tipo: "social",
  },
  {
    horario: "9h — 9h30",
    titulo: "Cerimônia de Abertura",
    descricao: "Boas-vindas ao público e fala das autoridades",
    icon: <Mic size={20} className="text-[#f5a623]" />,
    tipo: "plenaria",
  },
  {
    horario: "9h30 — 10h20",
    titulo: "1ª Mesa de Palestrantes",
    descricao: "Parklog do ES — Plataforma de Exportação do Agro Brasileiro",
    icon: <Mic size={20} className="text-[#f5a623]" />,
    tipo: "plenaria",
  },
  {
    horario: "10h20 — 11h30",
    titulo: "2ª Mesa de Palestrantes",
    descricao: "Raio X do Comércio Exterior Capixaba em 2026 e impactos da reforma tributária",
    icon: <Mic size={20} className="text-[#f5a623]" />,
    tipo: "plenaria",
  },
  {
    horario: "11h30 — 12h",
    titulo: "Networking — Debates",
    descricao: "Perguntas, respostas e troca de experiências",
    icon: <MessageSquare size={20} className="text-[#4db8d4]" />,
    tipo: "networking",
  },
  {
    horario: "12h — 14h",
    titulo: "Intervalo de Almoço",
    descricao: "Restaurante com churrasco a la carte (capacidade 240 pessoas)",
    icon: <Utensils size={20} className="text-[#8dc63f]" />,
    tipo: "social",
  },
  {
    horario: "14h — 15h",
    titulo: "3ª Mesa de Palestrantes",
    descricao: "Portos: Motores da Economia Capixaba no Comércio Internacional",
    icon: <Mic size={20} className="text-[#f5a623]" />,
    tipo: "plenaria",
  },
  {
    horario: "15h — 17h",
    titulo: "Networking — Debates",
    descricao: "Perguntas, respostas e troca de experiências",
    icon: <MessageSquare size={20} className="text-[#4db8d4]" />,
    tipo: "networking",
  },
  {
    horario: "16h — 19h",
    titulo: "Encerramento",
    descricao: "Coffee break e encerramento oficial do evento",
    icon: <Coffee size={20} className="text-[#8dc63f]" />,
    tipo: "social",
  },
];

const tipoColors: Record<string, string> = {
  plenaria: "border-l-[#f5a623]",
  networking: "border-l-[#4db8d4]",
  social: "border-l-[#8dc63f]",
  operacional: "border-l-white/20",
};

const tipoBg: Record<string, string> = {
  plenaria: "bg-[#f5a623]/10",
  networking: "bg-[#4db8d4]/10",
  social: "bg-[#8dc63f]/10",
  operacional: "bg-white/5",
};

const eixos = [
  {
    numero: "01",
    titulo: "Parklog do ES",
    descricao: "Plataforma de Exportação do Agro Brasileiro",
    cor: "#f5a623",
  },
  {
    numero: "02",
    titulo: "Raio X do Comércio Exterior Capixaba",
    descricao: "Espírito Santo como hub logístico e os impactos da reforma tributária em 2026",
    cor: "#4db8d4",
  },
  {
    numero: "03",
    titulo: "Portos: Motores da Economia",
    descricao: "Os portos capixabas como protagonistas do Comércio Internacional",
    cor: "#8dc63f",
  },
];

export default function Programacao() {
  const [diaSelecionado, setDiaSelecionado] = useState<"quinta" | "sexta">("sexta");

  const dias = [
    {
      id: "quinta" as const,
      label: "Quinta-feira",
      data: "14/05",
      cor: "#f5a623",
      corBg: "bg-[#f5a623]",
      corText: "text-[#0d1b2e]",
      itens: dia1,
      badge: null,
    },
    {
      id: "sexta" as const,
      label: "Sexta-feira",
      data: "15/05",
      cor: "#4db8d4",
      corBg: "bg-[#4db8d4]",
      corText: "text-[#0d1b2e]",
      itens: dia2,
      badge: "Programação principal",
    },
  ];

  const diaAtual = dias.find((d) => d.id === diaSelecionado)!;

  return (
    <section id="programacao" className="py-24 bg-[#091525] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-4 block">
            Agenda
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Programação <span className="text-[#f5a623]">Completa</span>
          </h2>
        </div>

        {/* Eixos Temáticos */}
        <div className="mb-16">
          <h3 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6 text-center">
            Eixos Temáticos
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {eixos.map((eixo, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors"
              >
                <span
                  className="text-4xl font-black opacity-20 block mb-3"
                  style={{ color: eixo.cor }}
                >
                  {eixo.numero}
                </span>
                <h4 className="text-white font-bold text-sm mb-1">{eixo.titulo}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{eixo.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Day selector */}
        <div className="mb-10">
          <p className="text-white/30 text-xs tracking-widest uppercase font-bold text-center mb-4">
            Selecione o dia
          </p>
          <div className="grid grid-cols-2 gap-4">
            {dias.map((dia) => {
              const ativo = diaSelecionado === dia.id;
              return (
                <button
                  key={dia.id}
                  onClick={() => setDiaSelecionado(dia.id)}
                  className={`
                    relative flex flex-col items-start gap-3 p-5 rounded-2xl border-2 transition-all duration-200 text-left
                    ${ativo
                      ? `border-[${dia.cor}] bg-[${dia.cor}]/10`
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                    }
                  `}
                  style={ativo ? { borderColor: dia.cor, backgroundColor: `${dia.cor}15` } : {}}
                >
                  {/* Badge principal */}
                  {dia.badge && (
                    <span
                      className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${dia.cor}25`, color: dia.cor }}
                    >
                      {dia.badge}
                    </span>
                  )}

                  {/* Data + dia */}
                  <div className="flex items-center gap-3 w-full">
                    <span
                      className="text-2xl font-black tabular-nums"
                      style={{ color: ativo ? dia.cor : "rgba(255,255,255,0.3)" }}
                    >
                      {dia.data}
                    </span>
                    <div className="flex flex-col">
                      <span className={`font-black text-base ${ativo ? "text-white" : "text-white/40"}`}>
                        {dia.label}
                      </span>
                      <span className="text-white/30 text-xs">
                        {dia.itens.length} {dia.itens.length === 1 ? "atividade" : "atividades"}
                      </span>
                    </div>
                  </div>

                  {/* Progress dots */}
                  <div className="flex gap-1 flex-wrap">
                    {dia.itens.map((_, idx) => (
                      <div
                        key={idx}
                        className="w-1.5 h-1.5 rounded-full transition-all"
                        style={{ backgroundColor: ativo ? dia.cor : "rgba(255,255,255,0.15)" }}
                      />
                    ))}
                  </div>

                  {/* Active indicator */}
                  {ativo && (
                    <div
                      className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: dia.cor }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Schedule items */}
        <div className="space-y-3">
          {diaAtual.itens.map((item, i) => (
            <div
              key={`${diaSelecionado}-${i}`}
              className={`
                flex items-start gap-4 border-l-4 ${tipoColors[item.tipo]}
                ${tipoBg[item.tipo]} border border-white/10
                rounded-r-2xl p-5 hover:border-white/20 transition-all
              `}
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5 p-2 bg-white/5 rounded-xl">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs font-black mb-1 tracking-widest"
                  style={{ color: diaAtual.cor }}
                >
                  {item.horario}
                </p>
                <h4 className="text-white font-bold text-base mb-1">{item.titulo}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.descricao}</p>
              </div>

              {/* Type badge */}
              <div className="flex-shrink-0 hidden sm:block">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full capitalize"
                  style={{
                    backgroundColor:
                      item.tipo === "plenaria"
                        ? "#f5a62320"
                        : item.tipo === "networking"
                        ? "#4db8d420"
                        : item.tipo === "social"
                        ? "#8dc63f20"
                        : "#ffffff10",
                    color:
                      item.tipo === "plenaria"
                        ? "#f5a623"
                        : item.tipo === "networking"
                        ? "#4db8d4"
                        : item.tipo === "social"
                        ? "#8dc63f"
                        : "#ffffff50",
                  }}
                >
                  {item.tipo === "operacional" ? "recepção" : item.tipo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          {[
            { cor: "#f5a623", label: "Plenária" },
            { cor: "#4db8d4", label: "Networking" },
            { cor: "#8dc63f", label: "Social / Coffee" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/40 text-xs">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.cor }} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
