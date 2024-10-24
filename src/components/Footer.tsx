import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Logo from '@/src/app/assets/Logo branco.amarelo.png'

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-12 px-6 md:px-4 md:py-14 bg-[#131313]">
      <div className="w-full max-w-[1200px] flex flex-col items-start p-2">
        <div className="w-full flex flex-col items-start gap-8 justify-between sm:items-center lg:flex-row">
          <div>
            <div className="flex items-center">
              <img
                src={Logo.src}
                className="w-48"
                alt="logo"
              />
            </div>
          </div>
        

          <div className="flex flex-col items-start justify-center gap-1 sm:items-center">
            <h2 className="text-neutral-200 font-semibold text-sm md:text-base">GESOLAR TECNOLOGIA E SOLUÇÕES EM ENERGIA SOLAR</h2>
            <span className="text-neutral-400 font-medium text-xs md:text-sm">Av. Paulista, 1842 - conjunto 155 - CEP 01310-200 - Bela Vista - Sao Paulo/Sp</span>
          </div>
        </div>

        <div className="w-full flex items-start justify-between flex-col gap-2 py-6 mt-8 border-t-2 border-t-neutral-800 sm:items-center lg:gap-0 lg:flex-row">
          <div>
            <span className="text-neutral-200 font-bold text-sm">© 2022 GESOLAR, Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/gesolarbr"
              target="_blank"
              rel="noreferrer"
              className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800  text-sun-500 rounded-2xl hover:bg-[#1e1e1e] hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#131313] focus:ring-amber-500 transition-colors duration-200"
            >
              <BsFacebook className="w-6 h-6" />
            </a>

            <a 
              href="https://www.instagram.com/gesolarbr/"
              target="_blank"
              rel="noreferrer"
              className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800  text-sun-500 rounded-2xl hover:bg-[#1e1e1e] hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#131313] focus:ring-amber-500 transition-colors duration-200"
            >
              <BsInstagram className="w-5 h-5"/>
            </a>

            <a 
              href="https://www.linkedin.com/company/gesolar-br/"
              target="_blank"
              rel="noreferrer"
              className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800  text-sun-500 rounded-2xl hover:bg-[#1e1e1e] hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#131313] focus:ring-amber-500 transition-colors duration-200"
            >
              <BsLinkedin className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}