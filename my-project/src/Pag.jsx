import { useState } from "react";
import Tarefas from "./components/Tarefas";

export default function Pag (){
    const [adicionar, setAdicionar] = useState ([])
    const [input, setInput] = useState("")
    function adicionarTarefa (){
        setAdicionar([...adicionar, input])
    }
    return(
        <div>
            <input className="w-96 h-10 mt-40 p-4" type="text"
            placeholder="Escreva uma tarefa"
            value={input}
            onChange={(event)=> setInput (event.target.value)} />
            <button
            onClick={adicionarTarefa}
            className="bg-white ml-5 w-16 h-10 text-green-500"> Criar +</button>
            <div>
                 {
                    adicionar.map((nomeTarefa, i)=> <Tarefas nome ={nomeTarefa} key={`${nomeTarefa} ${i}`} /> )
                 }
            </div>
        </div>

    )
}