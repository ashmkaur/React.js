import { useState,useCallback, useEffect, useRef } from 'react'

// useCallback--> optimize
// useEffect--> rerun the given function

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [length,setLength]= useState(8)
  const[numberAllowed, setNumberAllowed]=useState(false)
  const[charAllowed, setcharAllowed]=useState(false)
  const[password, setPassword]= useState("")

  const passwordref= useRef(null)

  const passwordgen= useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"

    if(numberAllowed) str +="0123456789"


    if(charAllowed) str +="!@#$%~`%^&*()_+=-"

    for(let i=1; i<=length; i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass+= str.charAt(char)
    }

    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

  const copytoclipboard= useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
     passwordgen()
  },[length,passwordgen,numberAllowed,charAllowed])
  return(
    <>
    <div className='flex flex-wrap space-around w-450'>
    <h1>Password generator</h1>
    <div className='flex w-screen max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-green-500'></div>
    <div className='flex shadow-md rounded-lg overflow-hidden scroll-mb-4'>
      <input type="text" value={password} 
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordref}/>

      <button
      onClick={copytoclipboard}
      className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy

      </button>
    </div>
    <div className='flex tezt-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}  />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed} 
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}/>
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
        type="checkbox"
        defaultChecked={numberAllowed} 
        id='numberInput'
        onChange={()=>{
          setcharAllowed((prev)=>!prev)
        }}/>
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App

