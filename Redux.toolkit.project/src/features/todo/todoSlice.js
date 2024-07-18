import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos: [{id:1, text:"Hello World"}]
}
// Slice is bigger version for Reducers--> functionality.

export const todoSlice= createSlice({
    name: 'TODO',
    //name that will show at chrome nothing else
    initialState,
    reducers:{
        // properties and functions
        addtodo: (state,action)=>{
            const todo={
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        //addtodo-- property
        //the call back back fn in it is Function
        removetodo: (state,action)=>{ 
            state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updatetodo: (state, action) => {
            const { id, ntext } = action.payload;
            state.todos.find((todo) => todo.id === id).text=ntext
          }
    }
})

export const{addtodo,removetodo,updatetodo}= todoSlice.actions

export default todoSlice.reducer