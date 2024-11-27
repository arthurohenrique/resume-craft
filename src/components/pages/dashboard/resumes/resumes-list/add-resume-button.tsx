import { Plus } from "lucide-react"
import { ResumeCardButton } from "../resume-card"

export const AddResumeButton = () => {
    return(
        <div className="w-full h-[300px] bg-muted/50 rounded border border-muted-foreground/20 flex items-center justify-center relative outline-none overflow-hidden hover:brightness-105 dark:hover:brightness-125 transition-all">
            <Plus size={50} />
            <div className="absolute w-full left-0 bottom-0 p-3 text-left bg-gradient-to-t from-backgroud/80">
                <p className="text-sm font-semibold font-title">Criar novo currículo</p>
                <span className="block text-xs text-muted-foreground">Comece do zero</span>
            </div>
        </div>
    )
}