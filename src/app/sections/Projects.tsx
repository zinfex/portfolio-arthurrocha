export default function Projects() {
  const projects = [
    {
      title: "TaskMind",
      description:
        "Focado em organização pessoal, unindo tarefas, hábitos e visão do dia em um só lugar, com uma interface agradável.",
      techs: ["Next.js", "TypeScript"],
      imageUrl: "/projects/taskmind.jpeg",
      link: "https://github.com/zinfex/taskmind", 
    },
    {
      title: "StatusHook",
      description:
        "Aplicação na qual o usuário cadastra suas automações de diversas plataformas e monitora o desempenho de cada uma.",
      techs: ["React", "Node.js", "MongoDB", "Docker", "N8N"],
      imageUrl: "/projects/statushook.webp",
      link: "https://github.com/zinfex/statushook-opensource",
    },
    {
      title: "Askwise",
      description:
        "Sistema de criação e exibição de formulários modernos e agradáveis, com ótima funcionalidade.",
      techs: ["Next.js", "N8N", "OpenAI", "TypeScript"],
      imageUrl: "/projects/askwise.png",
      link: "https://github.com/zinfex/Askwise",
    },
  ];
  
  return (
    <section className="mt-16 md:mt-20 space-y-6">
      {/* Título */}
      <div className="space-y-2">
        <h2 className="text-lg md:text-2xl font-semibold tracking-tight">
          Meus projetos
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-2xl">
          Alguns projetos que demonstram minha experiência com aplicações web modernas, integrações complexas e boas práticas de engenharia de software.
        </p>
      </div>

      {/* Grid de projetos */}
      <div className="grid gap-6 md:gap-7 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-sky-500/70 hover:bg-slate-900/90 transition-colors flex flex-col justify-end"
          >
            {/* Imagem no topo */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 md:h-48 object-cover"
            />

            <div className="p-4 md:p-5 space-y-2">
              <h3 className="text-base md:text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-400">
                {project.description}
              </p>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2 text-[11px] md:text-xs text-sky-100">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full px-2 py-0.5 bg-sky-900/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link opcional */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-sm text-sky-400 hover:underline"
                >
                  Repositório no Github
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}