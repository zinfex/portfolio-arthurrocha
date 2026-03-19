import { BsHouse } from "react-icons/bs";
import { FaRegUser, FaRegEnvelopeOpen } from "react-icons/fa";
import { RiNotificationBadgeLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="top-6 z-50 flex justify-between">
      <img src="picture.png" className="hidden md:block w-15 fixed left-6 top-6 border-2 border-sky-800/60 rounded-full" alt="picture" />

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 p-2 rounded-full border-1 border-blue-400/40
        bg-[#16223c]/60 backdrop-blur-md shadow-lg">

          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white transition-colors hover:bg-white/5">
            <BsHouse className="text-md text-[23px] md:text-[20px]" />
            <span className="text-[15px] hidden md:block ">Início</span>
          </a>

          <a href="#sobre" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white transition-colors hover:bg-white/5">
            <FaRegUser className="text-md text-[20px] md:text-[17px]" />
            <span className="text-[15px] hidden md:block ">Sobre</span>
          </a>

          <a href="#projetos" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white transition-colors hover:bg-white/5">
            <RiNotificationBadgeLine className="text-md text-[23px] md:text-[20px]" />
            <span className="text-[15px] hidden md:block ">Projetos</span>
          </a>

          <a href="#contato" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white transition-colors hover:bg-white/5">
            <FaRegEnvelopeOpen className="text-md text-[20px] md:text-[17px]" />
            <span className="text-[15px] hidden md:block ">Contato</span>
          </a>

        </div>  
      </nav>

      <div className="hidden md:block fixed right-6 top-8 flex items-center gap-3 p-2 px-6 rounded-full border-1 border-emerald-400
        bg-[#16223c]/60 backdrop-blur-md shadow-lg text-green-400">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 onlineball" /> Online
      </div>
    </div>
  );
}