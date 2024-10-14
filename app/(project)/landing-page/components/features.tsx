import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div
      id="recursos"
      className="text-center md:text-left max-w-[90%] md:max-w-[1200px] mx-auto flex flex-col gap-4 md:gap-[100px] mt-[100px] md:mb-[100px] mb-[50px]"
    >
      <div className="h-[750px] md:h-[400px] w-full flex flex-col-reverse md:flex-row gap-4 md:gap-0">
        <div className="w-full h-full">
          <div className="flex flex-col gap-4 md:pt-8 md:pr-8">
            <h2 className="text-2xl md:text-4xl font-medium">
              Visualização dos principais indicadores de vendas
            </h2>
            <p>
              Diga adeus à adivinhação e abrace o conhecimento: Com nossa
              plataforma, integrada ao seu Bling, você terá um Dashboard
              completo para analisar seus dados em um único lugar, como
              faturamento, número de vendas, ticket médio e desempenho por canal
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative w-[50px] h-[50px] md:w-[110px] md:h-[60px] mr-5">
                <Image
                  src="/landing-page/fernando.jpg"
                  fill
                  alt="Fernando cliente"
                  className="object-fit object-center"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <p className="text-xs">
                  Com o Dashboard do Template eu deixo minhas análises de dados
                  no piloto automático e tenho mais tempo para focar na
                  estratégia do meu negócio
                </p>
                <span className="text-xs font-bold">
                  Fernando Torquetti, dono de e-commerce
                </span>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6">
              <Link
                href="https://google.com"
                passHref
                target="_blank"
                className="w-full"
              >
                <button className="bg-[#FAD054] text-black font-bold rounded-full py-3 md:py-4 md:px-10 w-full">
                  Quero testar grátis
                </button>
              </Link>
              <Link
                href="https://google.com"
                passHref
                target="_blank"
                className="w-full"
              >
                <button className="text-xs md:text-base w-full border-2 border-[#433763] text-black font-bold rounded-full py-[14px] md:py-4 md:px-10">
                  Falar com especialista
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[45%] md:h-full">
          <div className="relative w-full h-full">
            <Image
              src="/landing-page/feature-1.png"
              fill
              alt="Dashboard Template"
              className="object-fit object-center"
            />
          </div>
        </div>
      </div>
      <div className="h-[800px] md:h-[400px] w-full flex flex-col md:flex-row gap-4 md:gap-0">
        <div className="w-full h-[55%] md:h-full">
          <div className="relative w-full h-full md:w-[80%] md:h-full mx-auto my-auto">
            <Image
              src="/landing-page/feature-2.png"
              fill
              alt="Dashboard Template"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col gap-4 md:pt-8 md:pr-8">
            <h2 className="text-2xl md:text-4xl font-medium">
              Utilização de IA para gerar insights personalizados
            </h2>
            <p>
              Temos uma equipe de Cientistas de Dados trabalhando para criar o
              melhor a melhor plataforma para você. Hoje, trazemos o poder da
              Inteligência Artificial para te ajudar a vender mais, errar menos
              e entender cada vez mais do seu negócio
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative w-[50px] h-[50px] md:w-[110px] md:h-[60px] mr-5">
                <Image
                  src="/landing-page/caroline.jpg"
                  fill
                  alt="Caroline cliente"
                  className="object-fit object-center"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <p className="text-xs">
                  Os insights me ajudam diariamente a vender mais e o melhor de
                  tudo: A errar menos. Tenho o que há de mais moderno a favor
                  das minhas vendas
                </p>
                <span className="text-xs font-bold">
                  Caroline Nunes, social media
                </span>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6 ">
              <Link
                href="https://google.com?utm_source=website&utm_medium=features2"
                passHref
                target="_blank"
                className="w-full"
              >
                <button className="w-full bg-[#FAD054] text-black font-bold rounded-full py-3 md:py-4 md:px-10">
                  Quero testar grátis
                </button>
              </Link>
              <Link
                href="https://google.com"
                passHref
                target="_blank"
                className="w-full"
              >
                <button className="text-xs md:text-base w-full border-2 border-[#433763] text-black font-bold rounded-full py-[14px] md:py-4 md:px-10">
                  Falar com especialista
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[700px] md:h-[400px] w-full flex flex-col-reverse md:flex-row gap-4 md:gap-0">
        <div className="w-full h-full">
          <div className="flex flex-col gap-4 md:pt-8 md:pr-8">
            <h2 className="text-2xl md:text-4xl font-medium">
              Análise avançada de segmentação de clientes
            </h2>
            <p>
              Desvende o segredo do sucesso das grandes empresas: Nossa
              plataforma identifica seus melhores clientes e quais quais merecem
              um cuidado e atenção extra. Uma estratégia usada por grandes
              empresas e que agora está acessível para você
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative w-[50px] h-[50px] md:w-[110px] md:h-[60px] mr-5">
                <Image
                  src="/landing-page/solange.jpg"
                  fill
                  alt="Solange cliente"
                  className="object-fit object-center"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <p className="text-xs">
                  Agora meus clientes compram mais porque consigo montar
                  estratégias mais corretas para seus perfis e também consegui
                  abandonar as velhas planilhas no Excell
                </p>
                <span className="text-xs font-bold">
                  Solange Gomes, empresária
                </span>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6">
              <Link
                href="https://google.com?utm_source=website&utm_medium=features3"
                passHref
                target="_blank"
                className="w-full"
              >
                <button className="w-full bg-[#FAD054] text-black font-bold rounded-full py-3 md:py-4 md:px-10">
                  Quero testar grátis
                </button>
              </Link>
              <Link
                href="https://google.com"
                passHref
                target="_blank"
                className="w-full"
              >
                <button className="text-xs md:text-base w-full border-2 border-[#433763] text-black font-bold rounded-full py-[14px] md:py-4 md:px-10">
                  Falar com especialista
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:h-full">
          <div className="relative w-full h-full">
            <Image
              src="/landing-page/feature-3.png"
              fill
              alt="Dashboard Template"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
