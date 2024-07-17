import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import Todoform from './components/Todoform'
import TodoItem from './components/Todoitem'

export default function App(){
    const[todos,setTodos]= useState([])

    const addTodo= (todo)=>{
        setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
    }

    const updateTodo= (id,todo)=>{
        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
    }

    const deleteTodo= (id)=>{
        setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id!==id)))
    }

    const toggleComplete=(id)=>{
        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo, completed:!prevTodo.completed}:prevTodo)))
    }

    useEffect(()=>{
        const todos= JSON.parse(localStorage.getItem("todos"))

        if(todos && todos.length>0){
            setTodos(todos)
        }
    },[])

    useEffect(()=>{
        (localStorage.setItem("todos",JSON.stringify(todos)))
    },[todos])

    return(
        <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <div className="bg-[#0e1d32] inset-0 fixed py-8 flex justify-center items-center"
        style={{backgroundImage:`url('https://media.istockphoto.com/id/683728442/photo/dark-blue-or-indigo-abstract-glass-texture-background-or-pattern.jpg?s=2048x2048&w=is&k=20&c=IZMEAZliAF3l8zyG-5Uzjx-FS69LXQ5DpwUrwejb3mE=')`}}>
                <div className="w-screen h-screen mx-auto shadow-md rounded-lg px-6 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2 flex items-center justify-center gap-4">
                        <span className='text-9xl text-pink-600 font-mono'>Manage </span>
                        <span className='text-6xl'>Your Todos</span></h1>
                    <div className="mb-4">
                       <Todoform/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                                <TodoItem todo={todo}/>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}