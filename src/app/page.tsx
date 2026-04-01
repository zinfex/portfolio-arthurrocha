"use client";

import Navbar from "./components/Navbar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BiDownload } from "react-icons/bi";
import Projects from "./sections/Projects";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import StackIcons from "./components/StacksIcons";
import Contato from "./sections/Contato";
import Sobre from "./sections/Sobre";
import Link from "next/link";
import Comunidade from "./sections/Comunidade";

const code = `const FullStackDeveloper = {
  name: "Arthur Rocha",
  role: "Full Stack Developer",
  experience: "2+ years",
  location: "Fortaleza, CE",
  birth: "07 de Novembro, 2005",
}

const TechStack = {
  frontend: ["React", "Next.js", "TailwindCSS"],
  backend: ["Node.js", "Express", "N8N"], 
  database: ["PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "AWS", "Jest"],
}`;

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-100 flex flex-col bg-[#020617]">
      {/* Glow backgrounds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl bgball" />

        {/* Bottom blurs */}
        <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-sky-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[30%] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(30,64,175,0.18),transparent_55%)]" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 pt-12 mt-40 md:pt-16">
        {/* Hero */}
        <section className="flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center">
          {/* Left side - intro */}
          <div className="flex-1 space-y-6 justify-center">
            <div className="space-y-2">
              <img
                src="avatar.jpg"
                className="w-20 rounded-full"
                alt="avatar"
              />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight arthurtext">
                Arthur Rocha<span className="cursor">|</span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-xl">
                Desenvolvedor <span className="font-semibold">Full Stack</span>{" "}
                com mais de{" "}
                <span className="font-semibold">2 anos de experiência</span>{" "}
                construindo aplicações web modernas e performáticas.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mb-12">
                <Link
                  className="flex items-center justify-center border-2 w-full sm:w-fit px-4 py-[6px] rounded-full bg-sky-50 text-black gap-1 text-base sm:text-lg hover:bg-slate-300 hovertransition font-bold"
                  href="/cv_Arthur_Rocha.pdf"
                  download="cv_arthur_rocha.pdf"
                  target="_blank"
                >
                  <BiDownload size={20} className="sm:w-[23px] sm:h-[23px]" />
                  Baixar CV
                </Link>
                <div className="flex gap-3">
                  <Link
                    href="https://github.com/zinfex"
                    target="_blank"
                    className="flex items-center justify-center w-full sm:w-fit px-3 py-1 rounded-full font-semibold hover:bg-sky-50 text-white hover:text-black gap-1 transition text-base sm:text-lg"
                  >
                    <FaGithub />
                    Github
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/rocha-dev/"
                    target="_blank"
                    className="flex items-center justify-center w-full sm:w-fit px-3 py-1 rounded-full font-semibold hover:bg-sky-50 text-white hover:text-black gap-1 transition text-base sm:text-lg"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>

            <StackIcons />
          </div>

          {/* Right side - VSCode like box */}
          <div className="flex-1 w-full float-diagonal hidden lg:block">
            <div className="rounded-xl border border-slate-800 bg-[#2d2d3d] shadow-2xl shadow-sky-900/40 overflow-hidden">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-[#2d2d3d]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 text-xs text-slate-300">
                  <span className="text-sky-400">developer.ts</span>
                  <span className="text-slate-500">•</span>
                  <span>TypeScript</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  VSCode
                </span>
              </div>
              <div className="code">
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    background: "transparent",
                    padding: "15px",
                    fontSize: "12px",
                    lineHeight: "1.4",
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <Sobre />

        <Comunidade />

        <Projects />

        <Contato />
      </div>

      <Navbar />
    </main>
  );
}
