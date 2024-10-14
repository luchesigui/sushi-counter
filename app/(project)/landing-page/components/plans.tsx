import Image from "next/image";
import Link from "next/link";

export default function Plans() {
  return (
    <div className="max-w-[90%] md:max-w-[1200px] mx-auto mb-[200px] md:mb-[200px]">
      <div className="relative flex flex-col bg-[#F5F5F5] rounded-[25px] md:rounded-[50px] h-[1200px] md:h-[700px] text-center p-5 md:p-10">
        <h2 className="font-bold text-2xl md:text-4xl">
          Temos o plano ideal <br />
          pensado para você!
        </h2>
        <p className="mt-2 mb-4">
          Somos um serviço pré-pago, com cancelamento sem burocracia e sem
          aquele contrato <br className="hidden md:block" />
          chato de fidelidade. Nosso objetivo é ver você crescer, sem amarras
        </p>
        <div className="flex justify-center md:gap-6">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="relative w-[20px] h-[18px]">
              <Image
                src="/landing-page/ic-heart-purple.svg"
                fill
                alt="Ícone de Cartão"
                className="object-cover object-left"
              />
            </div>
            <span className="text-[#433763] text-sm">
              Isso mesmo, teste Grátis
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="relative w-[20px] h-[18px]">
              <Image
                src="/landing-page/ic-card-purple.svg"
                fill
                alt="Ícone de Cartão"
                className="object-cover object-left"
              />
            </div>
            <span className="text-[#433763] text-sm">
              Não pedimos cartão de crédito
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="relative w-[20px] h-[18px]">
              <Image
                src="/landing-page/ic-calendar.svg"
                fill
                alt="Ícone de Calendário"
                className="object-cover object-left"
              />
            </div>
            <span className="text-[#433763] text-sm">
              Cancele quando quiser
            </span>
          </div>
          <div className="absolute flex flex-col md:flex-row -bottom-[5vh] md:-bottom-[80px] h-[75%] gap-6 text-left md:max-w-[80%]">
            <div className="bg-[#433763] rounded-[40px] p-8 text-white flex flex-col w-full">
              <h3 className="text-3xl text-[#8FF5E9] font-medium">
                Template Pro
              </h3>
              <p className="my-4">
                Feito para quem está começando ou quem ainda tem um pequeno
                negócio, mas sonha grande!
              </p>
              <div>
                <span className="font-bold text-4xl mr-1">R$ 68,90</span>
                <span>/ mês</span>
              </div>
              <div className="my-6">
                <div className="flex flex-col gap-2 text-xs md:text-base">
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Integração com 1 conta do Bling ERP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Até 5 usuários</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Atualização diária de dados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Suporte com especialistas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Sem custo de implementação</span>
                  </div>
                </div>
              </div>
              <Link
                href="https://google.com"
                passHref
                target="_blank"
                className="mt-auto"
              >
                <button className="bg-[#FAD054] text-black font-bold rounded-full py-4 px-10 w-full">
                  Quero testar grátis
                </button>
              </Link>
            </div>
            <div className="rounded-[40px] shadow-md bg-white p-8 text-black flex flex-col w-full">
              <h3 className="text-3xl text-[#433763] font-medium">
                Template Custom
              </h3>
              <p className="mt-4">Agora, se você busca:</p>
              <div className="my-6">
                <div className="flex flex-col gap-2 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Visualizações customizadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Atualização a cada hora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Integrar mais de uma conta</span>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base">
                Vamos bater um papo e entender melhor suas metas, necessidades e
                te ajudar a construir o plano perfeito para impulsionar seus
                sonhos. Afinal, cada história é única e estamos ansiosos para
                ser parte da sua jornada rumo ao topo. Clique abaixo e venha
                falar conosco via WhatsApp.
              </p>
              <Link
                href="https://google.com"
                passHref
                target="_blank"
                className="mt-5 md:mt-auto"
              >
                <button className="w-full flex gap-2 items-center justify-center bg-[#433763] text-white font-bold rounded-full py-3 md:py-4 md:px-10">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/landing-page/whatsapp.svg"
                      fill
                      alt="Whatsapp Logo"
                      className="object-cover object-left"
                    />
                  </div>
                  <span className="text-sm md:text-base ">
                    Fale com nosso especialista
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="relative w-[20px] h-[20px]">
      <Image
        src="/landing-page/check.svg"
        fill
        alt="Checkmark"
        className="object-cover object-center"
      />
    </div>
  );
}
