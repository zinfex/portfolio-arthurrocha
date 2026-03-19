"use client";

import { FaUsers } from "react-icons/fa";

export default function Comunidade() {
  return (
    <section id="comunidade" className="mt-16 md:mt-28 space-y-8 scroll-mt-28">
      {/* Título e Descrição */}
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
          <FaUsers className="text-sky-400" />
          Comunidade de Desenvolvimento com IA
        </h2>
        <p className="text-slate-400 max-w-3xl text-base md:text-lg leading-relaxed">
          Como fundador da comunidade, meu objetivo é conectar entusiastas e profissionais para explorar o potencial das IAs e Automações. Compartilhamos ferramentas, estratégias e as melhores práticas para otimizar processos e escalar resultados.
        </p>
      </div>

      {/* Caixas Interativas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Caixa Esquerda - comunidade2.png */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md transition-all hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          <div className="aspect-video overflow-hidden">
            <img
              src="/comunidade2.png"
              alt="Comunidade IA e Automação 2"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white font-medium">Networking e Conhecimento</p>
          </div>
        </div>

        {/* Caixa Direita - comunidade1.png */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md transition-all hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          <div className="aspect-video overflow-hidden">
            <img
              src="/comunidade1.png"
              alt="Comunidade IA e Automação 1"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white font-medium">Automações na Prática</p>
          </div>
        </div>
      </div>

      {/* Botão */}
      <div className="flex justify-center pt-4">
        <a
          href="https://linktr.ee/arthurochaz" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-sky-50 text-black hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(240,249,255,0.3)] hover:scale-105 active:scale-95"
        >
          <FaUsers size={20} />
          Entrar na comunidade
        </a>
      </div>
    </section>
  );
}
