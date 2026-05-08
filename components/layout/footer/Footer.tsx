import Link from "next/link";
import { DefaultLayout } from "../../default-layout/DefaultLayout";
import { Copyright } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="py-4 bg-[#3F3F3F]">
        <DefaultLayout>
          <nav className="flex flex-wrap gap-2 items-center justify-center sm:gap-8 text-white">
            <Link href="/" target="_blank" className="flex items-center gap-2"><Copyright /> 2026 - Todos os direitos reservados</Link>
            <Link href="https://freemium.com.br/politica-de-privacidade.html" target="_blank">Política de Privacidade</Link>
          </nav>
        </DefaultLayout>
      </div>

      <DefaultLayout>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-8">
          <Image
            className="py-4"
            src="/logo-freemium.png"
            alt="Logo"
            width={105}
            height={35} />

          <p className="text-xs text-center max-w-120 text-[#747474]">
            Busca Descontos Serviços de Marketing e Publicidade ltda - 1.818.144/0001-76 - Rua Fernão Dias, 110, Pinheiros, CEP 05427-000, São Paulo, SP
          </p>
        </div>
      </DefaultLayout>
    </footer>
  )
}