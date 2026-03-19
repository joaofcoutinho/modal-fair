"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Inscricao() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    cargo: "",
    telefone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inscricao" className="py-24 bg-[#091525] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f5a623]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4db8d4]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div>
            <span className="text-[#4db8d4] text-sm font-bold tracking-widest uppercase mb-4 block">
              Inscrições abertas
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Garanta sua
              <br />
              <span className="text-[#4db8d4]">vaga agora</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Não perca a oportunidade de fazer parte do maior evento de comércio
              exterior e portos de Aracruz. Vagas limitadas a 500 participantes por dia.
            </p>

            <div className="space-y-4">
              {[
                "Acesso aos dois dias do evento",
                "Kit do participante (sacola, caneta, moleskin e garrafa)",
                "Certificado digital de participação",
                "Acesso ao networking lounge",
                "Coffee break e coquetel de abertura",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70">
                  <CheckCircle size={18} className="text-[#f5a623] flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Urgency */}
            <div className="mt-8 bg-[#f5a623]/10 border border-[#f5a623]/20 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-[#f5a623] rounded-full animate-pulse flex-shrink-0" />
              <p className="text-[#f5a623] text-sm font-semibold">
                Vagas limitadas. As inscrições encerram quando atingirmos a capacidade máxima.
              </p>
            </div>
          </div>

          {/* Right side — Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-[#8dc63f] mx-auto mb-6" />
                <h3 className="text-white font-black text-2xl mb-3">Inscrição realizada!</h3>
                <p className="text-white/60">
                  Obrigado! Você receberá mais informações no seu e-mail em breve.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-white font-black text-xl mb-6">Cadastre seu interesse</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623]/50 transition-colors"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Sua empresa"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623]/50 transition-colors"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                        Cargo
                      </label>
                      <input
                        type="text"
                        name="cargo"
                        value={form.cargo}
                        onChange={handleChange}
                        placeholder="Seu cargo"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623]/50 transition-colors"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623]/50 transition-colors"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="(27) 99999-9999"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623]/50 transition-colors"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#f5a623] text-[#0d1b2e] font-black text-base rounded-xl hover:bg-[#e09b1f] transition-all hover:scale-[1.02] mt-2"
                  >
                    <Send size={18} />
                    Garantir minha vaga
                  </button>
                  <p className="text-white/30 text-xs text-center">
                    Seus dados estão seguros. Não fazemos spam.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
