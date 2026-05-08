import { Airplay, DollarSign, HandHeart, Heart } from "lucide-react"

export function MainCards() {
  const cards = [
    {
      title: 'Não precisa de experiência',
      description: 'Se você sabe vender, isso é ótimo! Mas muitos consultores começaram do zero e hoje a renda extra virou sua renda principal',
      icon: <><Heart color="#222C24"/></>,
    },
    {
      title: 'Não precisa de CNPJ',
      description: 'Também não precisa comprar nada pra começar a indicar. É só se cadastrar e baixar o app do Ton!',
      icon: <><DollarSign color="#222C24"/></>,
    },
    {
      title: 'Não precisa se preocupar',
      description: 'Você indica usando apenas seu celular e a gente cuida do resto, desde a entrega até o suporte ao cliente',
      icon: <><HandHeart color="#222C24"/></>,
    },
    {
      title: 'Não precisa de lugar fixo',
      description: 'Você indica de qualquer lugar do Brasil, presencial ou online, nos horários que definir',
      icon: <><Airplay color="#222C24"/></>,
    },
  ]
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-240 m-auto">
      {cards.map(i => (
        <div
          key={i.title}
          className="text-left min-w-0 w-full max-w-100 bg-white p-6 py-10 rounded-sm sm:w-auto">
          <div className="border-2 rounded-full p-2 w-max mb-4">{i.icon}</div>
          <p className="text-2xl font-semibold mb-2">{i.title}</p>
          <div>{i.description}</div>
        </div>
      ))}
    </div>
  )
}