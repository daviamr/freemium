import { DefaultLayout } from "@/components/default-layout/DefaultLayout";
import Image from "next/image";

export function Header() {
  return (
    <header>
      <DefaultLayout>
        <Image
          className="m-auto py-4"
          src="/logo-freemium.png"
          alt="Logo"
          width={105}
          height={35} />
      </DefaultLayout>
    </header>
  )
}