import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiDocker,
    SiMongodb,
    SiN8N,
  } from "react-icons/si";
  
  const techs = [
    { icon: SiReact, name: "React", bg: "bg-cyan-500/20", color: "text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", bg: "bg-zinc-700/40", color: "text-white" },
    { icon: SiTypescript, name: "TypeScript", bg: "bg-blue-500/20", color: "text-blue-400" },
    { icon: SiNodedotjs, name: "Node.js", bg: "bg-green-500/20", color: "text-green-400" },
    { icon: SiDocker, name: "Docker", bg: "bg-sky-500/20", color: "text-sky-400" },
    { icon: SiMongodb, name: "MongoDB", bg: "bg-emerald-500/20", color: "text-emerald-400" },
    { icon: SiN8N, name: "N8N", bg: "bg-pink-500/20", color: "text-pink-400" },
  ];
  
  export default function StackIcons() {
    return (
      <div className="flex gap-4">
        {techs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              title={tech.name}
              className={`p-2 rounded-lg ${tech.bg} hover:scale-110 transition`}
            >
              <Icon size={28} className={tech.color} />
            </div>
          );
        })}
      </div>
    );
  }