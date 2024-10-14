import Image from "next/image";

export default function SubHero() {
  return (
    <div
      id="vantagens"
      className="max-w-[90%] md:max-w-[1200px] mx-auto pt-10 md:pt-0"
    >
      <div className="relative text-center mt-10 w-full md:w-[800px] mx-auto">
        <h2 className="block md:hidden relative text-3xl md:text-4xl font-medium mb-4">
          Eles &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; descobriram o
          poder das <br className="hidden md:block" />
          métricas mais importantes em um só lugar
          <div className="absolute left-[20.5%] -top-[12%] w-[70px] h-[70px] md:left-[18.7%] md:-top-[46.5%] md:w-[120px] md:h-[120px]">
            <Image
              src="/landing-page/people-in-text.svg"
              fill
              alt="People smilling"
              className="object-fit object-center"
            />
          </div>
        </h2>
        <h2 className="hidden md:block relative text-3xl md:text-4xl font-medium mb-4">
          Eles
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          descobriram o poder das <br className="hidden md:block" />
          métricas mais importantes em um só lugar
          <div className="absolute left-[20.5%] -top-[12%] w-[70px] h-[70px] md:left-[20%] md:-top-[46.5%] md:w-[120px] md:h-[120px]">
            <Image
              src="/landing-page/people-in-text.svg"
              fill
              alt="People smilling"
              className="object-fit object-center"
            />
          </div>
        </h2>
        <p>
          Não basta apenas ter dados disponíveis no Bling, é preciso saber como
          tratá-los e <br className="hidden md:block" />
          transformá-los em informação útil e é aí que o Template pode te ajudar
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 h-[750px] md:h-[450px] mt-12">
        <div className="relative w-full h-full bg-[#08C07B] rounded-[25px] md:rounded-[50px] text-white p-5 md:p-10 overflow-hidden">
          <h3 className="text-xl md:text-3xl mb-4">
            Feito para todo tipo de <br className="hidden md:block" />
            e-commerce que usa o Bling
          </h3>
          <p>
            Somos uma ferramenta indispensável para você que usa o{" "}
            <br className="hidden md:block" />
            Bling e quer entender melhor seus números e negócio
          </p>
          <div className="absolute right-0 left-0 -bottom-3 mx-auto w-[90%] md:w-[80%] h-[50%] md:h-[55%]">
            <Image
              src="/landing-page/note-bling.png"
              fill
              alt="Imagem do Bling ERP"
              className="object-contain object-center"
              quality={100}
            />
          </div>
        </div>
        <div className="relative w-full h-full bg-[#F5F5F5] rounded-[25px] md:rounded-[50px] p-5 md:p-10 overflow-hidden">
          <h3 className="text-xl md:text-3xl font-medium mb-4">
            Integre ao Bling com <br className="hidden md:block" />
            poucos cliques
          </h3>
          <p>
            Veja como é fácil: Você conecta sua conta Bling, integra e já{" "}
            <br className="hidden md:block" />
            consegue construir um dashboard completo em segundos
          </p>
          <div className="absolute right-0 left-0 -bottom-4 mx-auto w-[90%] md:w-[80%] h-[50%] md:h-[55%]">
            <Image
              src="/landing-page/note-cel.png"
              fill
              alt="Imagem do dashboard"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
