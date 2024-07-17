import {createContext, useContext} from 'react'

export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo: "Todo message",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo= ()=>{
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider
// we can can make provider.jsx also but we have exported here only.