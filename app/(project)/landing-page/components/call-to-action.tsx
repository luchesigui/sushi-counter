import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="relative w-full h-[60vh] md:h-[600px]">
      <div className="flex flex-col gap-3 justify-center h-full max-w-[90%] md:max-w-[1200px] mx-auto text-white pr-12 md:pr-0">
        <h4 className="text-2xl md:text-4xl font-medium md:font-bold">
          Aqui, você fala com <br />
          gente que ajuda gente!
        </h4>
        <p className="max-w-[500px]">
          Você é livre para adotar ou não adotar, mas se por acaso percebeu que
          a ferramenta pode fazer a diferença, ai vem falar conosco, que
          queremos te ajudar a vender mais
        </p>
        <Link href="https://google.com" passHref target="_blank">
          <button className="flex gap-2 items-center w-[300px] border-2 font-bold rounded-full py-4 px-8 mt-4">
            <div className="relative w-6 h-6">
              <Image
                src="/landing-page/whatsapp.svg"
                fill
                alt="Whatsapp Logo"
                className="object-cover object-left"
              />
            </div>
            <span>Vem falar no WhatsApp</span>
          </button>
        </Link>
      </div>
      <div className="absolute top-0 h-full w-full bg-black -z-10 bg-opacity-40" />
      <div className="absolute top-0 w-full h-full -z-20">
        <Image
          src="/landing-page/woman.jpg"
          fill
          alt="Mulher sorrindo"
          className="object-cover object-[60%] md:object-top"
        />
      </div>
    </div>
  );
}
