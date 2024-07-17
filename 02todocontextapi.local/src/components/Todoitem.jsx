import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    const [istodoeditable,setistodoeditable]=useState(false)
    const [todomessage,settodomessage]=useState(todo.todo)
    const {updateTodo,deleteTodo,toggleComplete}= useTodo()

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todomessage})
        setistodoeditable(false)
    }

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#496a84]" : "bg-[#bdbac2]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    istodoeditable? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todomessage}
                onChange={(e) => settodomessage(e.target.value)}
                readOnly={!istodoeditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (istodoeditable) {
                        editTodo();
                    } else setistodoeditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {istodoeditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
