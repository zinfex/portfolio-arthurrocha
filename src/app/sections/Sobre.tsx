"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type NavItem = { id: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { id: "introducao", label: "Introdução" },
  { id: "experiencia", label: "Experiência" },
  { id: "certificacoes", label: "Certificações" },
  { id: "expertise", label: "Expertise Técnica" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Sobre() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timeline = useMemo(
    () => [
    {
        id: "exp-1",
        company: "Freelancer de Projetos    ",
        role: "Full Stack Developer",
        period: "2026 | Atualmente",
        bullets: [
            "Desenvolvimento de aplicações SAAS.",
            "N8N: Manutenção e criação de automações e agentes de IA.",
            "Páginas Next.js conectadas com Backend e Banco de Dados",
        ],
        tech: ["React", "Next.js", "Node.js", "N8N", "Typescript", "Docker"],
        },
      {
        id: "exp-2",
        company: "Chat2Desk Brasil",
        role: "Analista de Automações com IA | Frontend",
        period: "2025 | Outubro - Dezembro",
        bullets: [
          "Responsável por atendimento de Tickets e melhorias.",
          "Manutenção de automações e páginas da empresa com React, Node.js e N8N",
          "Soluções com IA e arquitetura RAG",
          "Criação de Dashboards em Next.js e PostgresSQL.",
          "API's de mensageria | Typescript & Nodejs."
        ],
        tech: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "N8N"],
      },
      {
        id: "exp-3",
        company: "085 Digital",
        role: "Full Stack Developer",
        period: "2024 | Janeiro - 2025 | Outubro",
        bullets: [
          "Responsável por criações e atualizações de aplicações SAAS da empresa.",
          "Criação de APIs de marketing, integradas a um banco de dados e CRM.",
          "Desenvolvimento de +10 landing pages em React e Next.js para campanhas de anúncios.",
          "N8N: Criação de agentes de IA e automações.",
          "Gestão de automações.",
          "Sistemas com integração com API's de marketing."
        ],
        tech: ["React", "Next.js", "Node.js", "N8N", "Typescript", "Easypanel", "Docker"],
      },
    ],
    [],
  );

  const certifications = useMemo(
    () => [
      {
        id: "cert-1",
        img: "/certificacoes/curso1.jpg",
        name: "Curso presencial Desenvolvedor Web",
        institution: "iwtraining educação avançada",
        badge: "Fullstack",
      },
      {
        id: "cert-2",
        img: "/certificacoes/freecodecamp.png",
        name: "Back End Development and APIs",
        institution: "freeCodeCamp",
        badge: "Back-End",
      },
      {
        id: "cert-3",
        img: "/certificacoes/digital.jpg",
        name: "Avanço na carreira Fullstack",
        institution: "Digital College - Fortaleza, CE",
        badge: "Fullstack",
      },
      {
        id: "cert-4",
        img: "/certificacoes/javascript.jpg",
        name: "Programming Using JavaScript",
        institution: "Curso em Vídeo",
        badge: "Javascript 40h",
      },
      {
        id: "cert-5",
        img: "/certificacoes/aws.jpg",
        name: "Desenvolvimento com IA",
        institution: "AWS Training",
        badge: "LLM",
      },
    ],
    [],
  );

  const expertise = useMemo(
    () => [
      {
        title: "Linguagens",
        items: ["TypeScript", "JavaScript", "Python"],
      },
      {
        title: "Frameworks",
        items: ["React", "Next.js", "Express", "Framework"],
      },
      {
        title: "Banco de Dados",
        items: ["PostgreSQL", "MongoDB", "Supabase", "MySQL"],
      },
      {
        title: "Testes & Qualidade",
        items: ["Jest", "Boas práticas", "Revisões", "Swagger"],
      },
      {
        title: "CI/CD & DevOps",
        items: ["GitHub Actions", "Docker"],
      },
      {
        title: "Integrações",
        items: ["Webhooks", "APIs REST", "Queues"],
      },
    ],
    [],
  );

  useEffect(() => {
    const sectionEls = NAV_ITEMS.map((it) =>
      document.getElementById(it.id),
    ).filter(Boolean) as HTMLElement[];
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).dataset.reveal;
          if (!id) return;
          setVisible((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-30% 0px -65% 0px", 
        threshold: 0 
      },
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => {
      revealObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <section id="sobre" className="mt-28 md:mt-36 scroll-mt-28">
      <div className="w-full py-10 md:py-16 relative">
        <div className="grid gap-10 md:grid-cols-[280px_minmax(0,1fr)] items-start">
          {/* Sidebar */}
          <aside className="hidden md:block sticky top-64 self-start">
            {/* Mobile menu (colapsável) */}
            <div className="md:hidden mb-4">
              <details className="group rounded-xl border border-slate-800 bg-slate-900/40">
                <summary className="list-none cursor-pointer px-4 py-3 text-sm font-medium text-slate-200">
                  Menu
                </summary>
                <div className="px-3 pb-4">
                  <nav className="space-y-2">
                    {NAV_ITEMS.map((item) => {
                      const isActive = item.id === activeId;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setActiveId(item.id);
                            scrollToId(item.id);
                          }}
                          className={[
                            "w-full text-left rounded-lg px-3 py-2 transition-all border border-transparent",
                            isActive
                              ? "bg-sky-500/10 text-sky-200 border-sky-400/70 shadow-[0_0_18px_rgba(56,189,248,0.25)] border-l-2 pl-4"
                              : "text-slate-400 hover:text-slate-100 hover:bg-white/5 hover:border-white/5",
                          ].join(" ")}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </details>
            </div>

            <div className="hidden md:block rounded-2xl backdrop-blur-md p-4">
              {/* Profile */}
              <div className="flex flex-col items-center text-center space-y-4 pb-4 border-b border-slate-800">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-sky-500/10 blur-md" />
                  <div className="relative h-50 w-50 rounded-full  ring-1 ring-slate-700/60 shadow-[0_0_40px_rgba(56,189,248,0.12)] ">
                    <img
                      src="/trabalho.jpeg"
                      alt="Foto de perfil"
                      className="rounded-4xl w-full"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-slate-100 mt-4">
                    Arthur Rocha
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-lg">
                    <MdLocationOn className="text-sky-400 " />
                    Fortaleza, CE
                  </div>
                </div>
              </div>

              {/* Nav */}
              <nav className="mt-4 space-y-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveId(item.id);
                        scrollToId(item.id);
                      }}
                      className={[
                        "w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all border border-transparent",
                        isActive
                          ? "bg-sky-500/10 border-sky-400/70 text-sky-200 border-l-2 pl-4"
                          : "text-slate-400 hover:text-slate-100 hover:bg-white/5 hover:border-white/5",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span
                        className={[
                          "h-2 w-2 rounded-full transition-all",
                          isActive
                            ? "bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                            : "bg-slate-500/60",
                        ].join(" ")}
                      />
                      <span className="text-sm">{item.label}</span>
                      <span className="ml-auto" aria-hidden>
                        {isActive ? (
                          <HiOutlineSparkles className="text-sky-400" />
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-10">
            {/* Header */}
            <header className="space-y-4">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Quem sou eu?
                  </h2>
                </div>
                <p className="text-slate-300 text-base md:text-lg">
                  Desenvolvedor{" "}
                  <span className="font-semibold text-sky-400">
                    Full Stack & Analista de Automações com IA
                  </span>
                </p>
              </div>
            </header>

            {/* Introdução */}
            <section id="introducao" className="space-y-4 scroll-mt-44">
              <div
                data-reveal="intro"
                className={[
                  visible.intro
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                  "transition-all duration-700 ease-out ",
                ].join(" ")}
              >
                <p className="text-slate-300 leading-relaxed">
                  Eu sou o Arthur Rocha, desenvolvedor Full Stack. Meu objetivo
                  é transformar requisitos em interfaces claras, arquiteturas
                  sustentáveis e sistemas que funcionam bem em produção.
                </p>
                
              </div>
            </section>


            {/* Experiência*/}
            <section id="experiencia" className="scroll-mt-44" > 
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-sky-400">
                    | Experiência Profissional
                  </h3>
                </div>

                <div className="relative">
                  {timeline.map((item) => (
                    <div
                      key={item.id}
                      className="relative pl-10 md:pl-12 pb-10 last:pb-0"
                      data-reveal={item.id}
                    >
                      <div
                        className="absolute left-5 top-2 h-full w-0.5 bg-slate-800"
                        aria-hidden
                      />
                      <div
                        className={[
                          "absolute left-3.5 top-2 h-3.5 w-3.5 rounded-full bg-sky-400",
                          "shadow-[0_0_22px_rgba(56,189,248,0.35)]",
                        ].join(" ")}
                        aria-hidden
                      />

                      <div
                        className={[
                          visible[item.id]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4",
                          "transition-all duration-700 ease-out",
                          "rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-5",
                        ].join(" ")}
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                          <div className="space-y-1">
                            <div className="text-sm uppercase tracking-wide text-slate-400">
                              {item.company}
                            </div>
                            <div className="text-lg font-semibold text-slate-100">
                              {item.role}
                            </div>
                            <div className="text-sm text-slate-400">
                              {item.period}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <ul className="space-y-2 text-slate-300">
                            {item.bullets.map((b) => (
                              <li key={b} className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-slate-400/60" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4 grid gap-3 md:grid-cols-[auto_1fr] items-center">
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-200"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Certificações */}
            <section id="certificacoes" className="scroll-mt-44 space-y-8" ref={containerRef}>
              <div className="sticky top-40 overflow-hidden py-10">
                <div className="mb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-sky-400">
                    | Certificações
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Role para navegar pelos certificados
                  </p>
                </div>

                {/* Container do Carrossel */}
                <div className="relative h-[450px]">
                  
                  <motion.div
                    style={{ 
                      x: useTransform(smoothProgress, [0, 1], ["0%", "-100%"]),
                      translateX: useTransform(smoothProgress, [0, 1], ["0px", "400px"]) 
                    }}
                    className="flex gap-6 absolute left-0"
                  >
                    <div className="w-[100px] md:w-[600px] flex-shrink-0" />
                    {certifications.map((c, index) => (
                      <motion.div
                        key={c.id}
                        style={{
                          opacity: useTransform(
                            smoothProgress,
                            [index * 0.2, index * 0.2 + 0.1, index * 0.2 + 0.2, index * 0.2 + 0.3],
                            [0.4, 1, 1, 0.4]
                          ),
                          scale: useTransform(
                            smoothProgress,
                            [index * 0.2, index * 0.2 + 0.1, index * 0.2 + 0.2, index * 0.2 + 0.3],
                            [0.9, 1, 1, 0.9]
                          ),
                        }}
                        className="flex-shrink-0 w-[300px] md:w-[450px] rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-6 shadow-xl"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="relative overflow-hidden rounded-xl h-48 md:h-64">
                            <img 
                              src={c.img} 
                              alt={c.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div className="space-y-3">
                            <div className="text-base md:text-lg font-bold text-slate-100 leading-tight">
                              {c.name}
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="text-sm text-slate-400 font-medium flex justify-between">
                                {c.institution}

                                <span className="rounded-full bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-xs text-sky-200 w-fit">
                                  {c.badge}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    </motion.div>
                </div>

                {/* Barra de progresso visual */}
                <div className="mt-8 h-1 w-full bg-slate-800 rounded-full overflow-hidden max-w-md">
                  <motion.div 
                    className="h-full bg-sky-500"
                    style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
                  />
                </div>
              </div>
              
              {/* Espaçador para criar a área de scroll (height proporcional ao número de itens) */}
              <div className="h-[200vh]" />
            </section>

            {/* Expertise Técnica */}
            <section id="expertise" className="scroll-mt-44 pb-32">
              <div className="space-y-5">
                <h3 className="text-lg md:text-xl font-semibold text-sky-400">
                  | Expertise Técnica
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  {expertise.map((cat) => (
                    <div
                      key={cat.title}
                      data-reveal={`ex-${cat.title}`}
                      className={[
                        visible[`ex-${cat.title}`]
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4",
                        "transition-all duration-700 ease-out",
                      ].join(" ")}
                    >
                      <div className="text-sm uppercase tracking-wide text-slate-400">
                        {cat.title}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {cat.items.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
