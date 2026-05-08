import Image from "next/image";
import { DefaultLayout } from "../default-layout/DefaultLayout";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function MainHero() {
  const router = useRouter()
  
  return (
    <div className="bg-[#1A311E] py-10 lg:pb-0">
      <DefaultLayout className="flex justify-center gap-64">
        <div>
          <p className="text-2xl font-extrabold text-[#68CAB2] underline">Revendedor de Maquininha</p>
          <h1 className="text-4xl font-extrabold max-w-130 mt-2 text-white">
            Ganhe <span className="text-[#32E001]">renda extra</span> com indicação de maquininhas
          </h1>

          <div className="flex items-center gap-4 mt-4">
            <ul className="text-[18px] text-white">
              <li>
                &bull; Não precisa de CNPJ
              </li>
              <li>
                &bull; Não precisa de experiência em vendas
              </li>
              <li>
                &bull; Pode ser feito do celular
              </li>
            </ul>
            <div className="flex flex-col justify-center items-center text-white border-2 border-[#68CAB2] p-2 px-4 rounded-sm">
              <p className="text-sm">Comissão de até</p>
              <div className="flex items-start">
                <span>R$</span>
                <span className="text-5xl text-[#68CAB2]">
                  590
                </span>
              </div>
              <p className="text-sm">por maquininha</p>
            </div>
          </div>
          <Button 
            className="w-full max-w-75 bg-[#7A43BB] rounded-full text-[18px] font-extrabold py-7 mt-7 cursor-pointer hover:bg-[#7A43BB]/80"
            onClick={() => router.push("/redirect")}>
            Quero começar
          </Button>
        </div>

        <div className="hidden lg:flex relative items-end justify-center shrink-0">
          <Image
            src="/green-effect.png"
            alt=""
            width={634}
            height={372}
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[372px] w-[634px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
            aria-hidden
          />
          <Image
            src="/woman.png"
            alt="Mulher sorrindo"
            width={263}
            height={407}
            className="relative z-10"
          />
        </div>
      </DefaultLayout>
    </div>
  )
}