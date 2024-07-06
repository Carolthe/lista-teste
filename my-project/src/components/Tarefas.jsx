import Delete from "../img/Delete.png"

export default function Tarefas (props){
    return(
        <div className="w-96 h-12 mt-16 pl-3 px-1 bg-white flex justify-between place-items-center">
            <p className=" content-center  text-green-500">{props.nome}</p>
            <img className="w-6 h-6 " src={Delete}/>
        </div>
    )
}