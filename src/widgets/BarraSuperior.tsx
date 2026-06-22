import Link from "next/link"
import Logo from "../components/Logo/Logo"
import { IconUserCircle } from "@tabler/icons-react"
import BotaoIcone from "../components/Logo/Logo/BotaoIcone"

const BarraSuperior = () => {
    return (
         <div className="py-6 flex justify-between items-center">

          <Logo />

          <div className="flex gap-6">
            <Link className="font-semibold" href="/">Acomodações</Link>
            <Link className="opacity-60" href="/">Experiências</Link>
          </div>

        <BotaoIcone
        icone={(
             <IconUserCircle 
          aria-label="ícone de usuario"
          size={20}
          />
        )} >
        Entrar
        </BotaoIcone>


         
        

          </div>
    )
}

export default BarraSuperior