import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative text-white px-4 md:px-0 h-[700px] md:h-[75vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#574b79] to-[#433763]">
      <div className="md:max-w-[1200px] mx-auto flex flex-col justify-center items-center text-center h-full">
        <h1 className="text-3xl md:text-5xl font-medium mb-4 mt-[20%] md:mt-[7%]">
          Você usa o Bling? Então venha aprender{" "}
          <br className="hidden md:block" />
          com seus dados a vender mais!
        </h1>
        <h2>
          Turbine o seu Bling com os dashboards do Template e obtenha os
          insights necessários <br className="hidden md:block" />
          para entender o seu desempenho e tomar as melhores decisões
        </h2>
        <div className="flex flex-col md:flex-row gap-6 my-6">
          <Link href="https://google.com" passHref target="_blank">
            <button className="w-full bg-[#FAD054] text-black font-bold rounded-full py-4 md:py-5 md:px-10">
              Teste grátis
            </button>
          </Link>
          <Link href={"https://google.com"} passHref target="_blank">
            <button className="flex gap-2 items-center h-full">
              <div className="relative w-6 h-6">
                <Image
                  src="/landing-page/whatsapp.svg"
                  fill
                  alt="Whatsapp Logo"
                  className="object-cover object-left"
                />
              </div>
              <span>Falar com especialista</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="flex gap-6 text-sm md:text-base text-[#F2D4B0]">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="relative w-[20px] h-[17px]">
              <Image
                src="/landing-page/ic-heart.svg"
                fill
                alt="Ícone de Coração"
                className="object-cover object-left"
              />
            </div>
            <span>Isso mesmo, teste Grátis</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="relative w-[20px] h-[18px]">
              <Image
                src="/landing-page/ic-card.svg"
                fill
                alt="Ícone de Cartão"
                className="object-cover object-left"
              />
            </div>
            <span>Não pedimos cartão de crédito</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="relative w-[25px] h-[18px]">
              <Image
                src="/landing-page/ic-integration.svg"
                fill
                alt="Ícone de Integração"
                className="object-cover object-left"
              />
            </div>
            <span>Configuração rápida com Bling</span>
          </div>
        </div>
        <div className="absolute right-0 left-0 mx-auto -bottom-[50px] md:left-auto md:right-10 md:-bottom-14 w-[100px] h-[100px] md:w-[17%] md:h-[50%]">
          <Image
            src="/landing-page/graph-right.svg"
            fill
            alt="Ilustração Gráfico 1"
            className="object-fit object-center"
          />
        </div>
        <div className="absolute hidden md:block left-10 bottom-[10vh] w-[17%] h-[50%]">
          <Image
            src="/landing-page/graph-left.svg"
            fill
            alt="Ilustração Gráfico 2"
            className="object-fit object-center"
          />
        </div>
      </div>
    </div>
  );
}
