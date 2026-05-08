'use client'

import { DefaultLayout } from "@/components/default-layout/DefaultLayout"
import { MainCards } from "@/components/main-cards/MainCards"
import { MainHero } from "@/components/main-hero/MainHero"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  return (
    <main>
      <MainHero />
      <DefaultLayout className="text-center">
        <p className="text-2xl text-[#222C24] text-center py-4 font-semibold">
          Quer uma forma simples de <span className="font-extrabold">ganhar dinheiro extra?</span>
        </p>

        <MainCards />

        <Button
          className="w-full max-w-75 bg-[#7A43BB] rounded-full text-[18px] font-extrabold py-7 mt-8 mb-4 cursor-pointer hover:bg-[#7A43BB]/80"
          onClick={() => router.push("/redirect")}>
          Comece a indicar
        </Button>
      </DefaultLayout>
    </main>
  )
}
