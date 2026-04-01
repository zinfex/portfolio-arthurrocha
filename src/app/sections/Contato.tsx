import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddAlert, MdMarkEmailUnread } from "react-icons/md";

export default function Contato() {
  return (
    <section id="contato" className="mt-24 md:mt-32 space-y-8">
      <div className="space-y-2">
        <h2 className="text-lg md:text-2xl font-semibold tracking-tight">
          Vamos conversar
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl">
          Aberto para oportunidades, projetos freelas e conexões na área de
          tecnologia. Sinta-se à vontade para entrar em contato pelos canais
          abaixo.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)]">
        {/* Info de contato */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:p-5">
            <div className="flex justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-100 ">
                Informações de contato
              </h3>

              <h3 className="text-sm font-semibold flex items-center gap-2 text-sky-400">
                Disponível para conversas <MdAddAlert />
              </h3>
            </div>
            <div className="space-y-3 text-md text-slate-300">
              <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-around mb-5 mt-4">
                <a
                  href="https://wa.link/vwljgz"
                  target="_blank"
                  className="bg-[#000000] px-5 py-2 flex items-center gap-3 rounded-xl border border-transparent hover:border-sky-500/70 hover:bg-slate-900/90 transition-colors"
                >
                  <IoLogoWhatsapp size={25} />
                  <div className="relative">
                    <span className="block text-xs uppercase tracking-wide text-slate-400">
                      Telefone
                    </span>
                    <span className="font-medium">(85) 99698-9310</span>
                  </div>
                </a>
                <a
                  href="https://wa.link/vwljgz"
                  target="_blank"
                  className="bg-[#000000] px-5 py-2 flex items-center gap-3 rounded-xl border border-transparent hover:border-sky-500/70 hover:bg-slate-900/90 transition-colors"
                >
                  <MdMarkEmailUnread size={25} />
                  <div className="relative">
                    <span className="block text-xs uppercase tracking-wide text-slate-400">
                      E-mail
                    </span>
                    <span className="font-medium">zinfegr@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
            <iframe
              className="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127394.47751649197!2d-38.602016250281835!3d-3.7933106885418737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37ca!2sFortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1773706413552!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <img src="picture.png" className="bottom-1" alt="" />
      </div>
    </section>
  );
}
