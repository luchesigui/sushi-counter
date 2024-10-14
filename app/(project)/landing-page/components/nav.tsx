import Image from "next/image";
import NavMobile from "./nav-mobile";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="absolute w-full z-10 mt-4 md:mt-0 pt-1 md:pt-5">
      <div className="flex items-center justify-center text-white gap-3 md:gap-6 mx-4 md:mx-[10vw]">
        <div className="relative">
          <Link href={"/landing-page"} className="flex items-center gap-2">
            <div className="relative size-7 md:size-9">
              <Image
                src="/template-icon.webp"
                fill
                alt="Template Logo"
                className="object-fit object-center"
                priority
              />
            </div>
            <span className="hidden md:block font-bold text-lg">
              Template SaaS
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <a href="#vantagens">Vantagens</a>
        </div>
        <div className="hidden md:block">
          <a href="#recursos">Recursos</a>
        </div>
        <div className="hidden md:block">
          <a href="#faq">FAQ</a>
        </div>
        <div className="ml-auto hidden md:block">
          <Link href={"https://google.com"} passHref target="_blank">
            <button className="flex gap-2 items-center">
              <div className="relative w-5 h-5">
                <Image
                  src="/landing-page/ic-login.svg"
                  fill
                  alt="Ícone de Login"
                  className="object-cover object-left"
                />
              </div>
              <span>Entrar</span>
            </button>
          </Link>
        </div>
        <div className="ml-auto md:ml-0">
          <Link href={"https://google.com"} passHref target="_blank">
            <button className="text-[#433763] font-medium bg-white rounded-full px-4 py-2 md:py-3 md:px-8">
              Teste grátis
            </button>
          </Link>
        </div>
        <NavMobile />
      </div>
    </nav>
  );
}
