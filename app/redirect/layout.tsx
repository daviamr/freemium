import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cadastro Ton",
  description:
    "Você será redirecionado para finalizar o cadastro no programa Ton.",
  robots: { index: false, follow: false },
}

export default function RedirectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
