import { useState } from "react"
import { useTodo } from "../context"

export default function Todoform(){
    const[todo, setTodo]= useState("")

    const{addTodo}= useTodo()

    const add=(e)=>{
        e.preventDefault()

        if(!todo) return

        addTodo({todo:todo,completed:false})
        setTodo("") 
     
    }
    return(
        <form onSubmit={add}className="flex">
            <input type="text" 
            placeholder="Write todo.."
            className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}/>

            <button type="submit" className="bg-pink-600" >Add</button>
        </form>
    )
}