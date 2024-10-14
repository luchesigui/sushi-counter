import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-[#433763] py-[20px] md:py-[70px] text-center md:text-left">
      <div className="flex flex-col md:flex-row text-white items-center justify-between max-w-[90%] md:max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2 md:gap-3">
          <div className="flex items-center gap-2">
            <div className="relative size-7">
              <Image
                src="/template-icon.webp"
                fill
                alt="Template Logo"
                className="object-fit object-center"
              />
            </div>
            <span className="text-lg font-bold">Template SaaS</span>
          </div>
          <div className="flex gap-2">
            <Link href={"https://instagram.com/"} passHref target="_blank">
              <div className="bg-white rounded-full p-1 hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 fill-[#6F46E3]"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </div>
            </Link>
            <Link href={"https://www.linkedin.com"} passHref target="_blank">
              <div className="h-full bg-white rounded-full py-1 px-[6px] hover:opacity-80">
                <div className="relative w-5 h-5">
                  <Image
                    src="/landing-page/linkedin.svg"
                    fill
                    alt="Linkedin Logo"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Link>
            <Link href={"https://www.youtube.com/"} passHref target="_blank">
              <div className="bg-white rounded-full p-1 hover:opacity-80">
                <div className="relative w-6 h-6">
                  <Image
                    src="/landing-page/youtube.svg"
                    fill
                    alt="Youtube Logo"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Link>
          </div>
          <span className="hidden md:block text-xs">
            <strong>© {new Date().getFullYear()} Template SaaS</strong> - Todos
            os direitos reservados. Política de privacidade
          </span>
        </div>
        <div className="flex flex-col gap-4 mt-3 md:mt-0">
          <p>
            O Template é especialista em soluções para empresas{" "}
            <br className="hidden md:block" />
            que usam o Bling e que querem vender mais
          </p>
          <div className="flex gap-2 md:gap-4">
            <Link
              href="https://google.com"
              passHref
              target="_blank"
              className="w-full"
            >
              <button className="bg-[#FAD054] text-black font-bold rounded-full py-2 md:py-4 md:px-0 w-full">
                Quero testar grátis
              </button>
            </Link>
            <Link
              href={"https://google.com"}
              passHref
              target="_blank"
              className="w-full"
            >
              <button className="text-xs md:text-base border-2 border-white font-bold rounded-full py-[10px] md:py-4 md:px-0 w-full">
                Falar com especialista
              </button>
            </Link>
          </div>
        </div>
        <span className="block md:hidden text-xs">
          <strong>© {new Date().getFullYear()} Template SaaS</strong> - Todos os
          direitos reservados. Política de privacidade
        </span>
      </div>
    </div>
  );
}
