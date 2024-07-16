// My website--> game play element
import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Buttons"

function App() {
  let [color, setcolor] = useState("white")

  return (
      <>
      <div
        className="w-screen h-screen duration-300 no-scrollbar"
        style={{ backgroundColor: color}} 
      >
        <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
            onClick={(e)=>{setcolor(e.target.value)}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            value="blue">blue</button>

          <button 
            onClick={(e)=>{setcolor(e.target.value)}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            value="green">green</button>

          <button 
            onClick={(e)=>{setcolor(e.target.value)}}className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "yellow"}}
            value="yellow">yellow</button>

          <button 
            onClick={(e)=>{setcolor(e.target.value)}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            value="red">red</button>
            
            <button 
            onClick={(e)=>{setcolor(e.target.value)}}className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "pink"}}
            value="pink">pink</button>

          </div>
        </div>
      </div>
      </>
  )
}

export default App