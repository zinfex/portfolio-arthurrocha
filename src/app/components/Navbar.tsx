import { BsHouse } from "react-icons/bs";
import { FaRegUser, FaRegEnvelopeOpen } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";

export default function Navbar() {
  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full 
      bg-[#191826]/60 backdrop-blur-md shadow-lg">

        <a href="#" className="flex items-center gap-2 px-3 py-2  round ed-full text-slate-400 hover:text-white transition-colors hover:text-white hover:bg-white/5">
          <BsHouse className="text-lg" />
          <span>Início</span>
        </a>

        <a href="#sobre" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white transition-colors hover:text-white hover:bg-white/5">
          <FaRegUser className="text-lg" />
          <span>Sobre</span>
        </a>

        <a href="#artigos" className="flex items-center gap-2 px-3 py-2  rounded-full text-slate-400 hover:text-white transition-colors hover:text-white hover:bg-white/5">
          <GrArticle className="text-lg" />
          <span>Artigos</span>
        </a>

        <a href="#contato" className="flex items-center gap-2 px-3 py-2  rounded-full text-slate-400 hover:text-white transition-colors hover:text-white hover:bg-white/5">
          <FaRegEnvelopeOpen className="text-lg" />
          <span>Contato</span>
        </a>

      </div>  
    </nav>
  );
}