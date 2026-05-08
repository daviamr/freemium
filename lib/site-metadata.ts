import type { Metadata } from "next"

/**
 * URLs absolutas para Open Graph precisam de metadataBase definido na raiz.
 * Ajuste NEXT_PUBLIC_SITE_URL no deploy se o domínio canônico não for este.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://freemium.com.br"

const metadataBase = new URL(siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl)

export const rootMetadata = {
  metadataBase,
  title: {
    default:
      "Renda extra indicando maquininhas Ton | Sem CNPJ | Freemium",
    template: "%s | Freemium",
  },
  description:
    "Cadastre-se e ganhe comissões até R$ 590 por maquininha Ton. Indicação pelo celular, sem CNPJ obrigatório e sem precisar de experiência em vendas — em qualquer cidade do Brasil.",
  keywords: [
    "Freemium",
    "renda extra",
    "maquininha de cartão",
    "máquina de cartão",
    "Ton",
    "Stone Ton",
    "revendedor de maquininha",
    "indicação de maquininha",
    "comissão por indicação",
    "trabalho pelo celular",
    "programa de parceiros",
    "consultor Ton",
    "ganhar dinheiro em casa",
    "cadastro Ton",
    "sem CNPJ",
  ],
  authors: [{ name: "Freemium" }],
  creator: "Busca Descontos Serviços de Marketing e Publicidade Ltda.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Freemium",
    title: "Renda extra indicando maquininhas Ton | Freemium",
    description:
      "Comissões até R$ 590 por equipamento Ton. Cadastro pelo app, sem CNPJ obrigatório. Indique de qualquer lugar do Brasil.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renda extra indicando maquininhas Ton | Freemium",
    description:
      "Comissões até R$ 590 por equipamento Ton. Cadastro pelo app, sem CNPJ obrigatório.",
  },
} satisfies Metadata
