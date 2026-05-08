"use client"

import { useEffect } from "react"
import { Loader } from "lucide-react"

const REDIRECT_URL =
    "https://trk.bdmkweb.com/c?o=21896735&m=9388&a=379994&mo=empre_mar26_t1-kv1_1920x1080"

export default function Page() {
    useEffect(() => {
        const id = window.setTimeout(() => {
            window.location.href = REDIRECT_URL
        }, 3000)

        return () => window.clearTimeout(id)
    }, [])

    return (
        <div className="h-screen flex items-center justify-center bg-[#1A311E] px-4">
            <div className="flex flex-col items-center gap-4 p-16 rounded-lg bg-[#242424]">
                <Loader size={64} color="#68CAB2" className="animate-spin" />
                <p className="text-white text-center max-w-100 text-2xl font-semibold">
                    Você está sendo direcionado para a página de finalização do seu cadastro.
                </p>
            </div>
        </div>
    )
}