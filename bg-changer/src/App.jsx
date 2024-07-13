import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Buttons"

function App() {
  let [color, setColor] = useState("white")

  return (
      <>
      <div
        className="w-screen h-screen duration-300"
        style={{ backgroundColor: color}} 
      >
        <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <Button setColor color="red"/>
            <Button setColor color="green"/>
            <Button setColor color="yellow"/>
            <Button setColor color="blue"/>

          </div>
        </div>
      </div>
      </>
  )
}

export default App