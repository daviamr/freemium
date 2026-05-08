import { DefaultLayout } from "@/components/default-layout/DefaultLayout"
import { Loader } from "lucide-react"

export default function Page() {
    return (
        <div className="h-screen flex items-center justify-center bg-[#1A311E] px-4">
            <div className="flex flex-col items-center gap-4 p-16 rounded-lg bg-[#242424]">
                <Loader size={64} color="#68CAB2" className="animate-spin" />
                <p className="text-white text-center max-w-100 text-2xl font-semibold">Você está sendo redirecionado para finalizar seu cadastro.</p>
            </div>
        </div>
    )
}