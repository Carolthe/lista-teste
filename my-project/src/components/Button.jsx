import { useState } from "react"

export default function Button (){

    const [cont, setCont] = useState (0)

    function contador (){
        setCont (cont + 1)
    }

    return(
        <div>
            <button
            onClick={contador}
            className="bg-white w-28 h-16 mt-10">{cont}</button>
        </div>
    )
}