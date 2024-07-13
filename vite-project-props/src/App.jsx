import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count,setCount]=useState(0)

  let myObj={
    username: 'Ashmeet',
    age: 19
  }

  let newArr=[1,2,3,4,5]
  return(
    <>
    <Card channel='AshmeetKaur' btnText='huhahahahahah'/>
    <Card channel='Ashmaskaur' btnText='click mee pleaseee'/>
    {/* Now we have made the cards and stored as components too what if we want different values in it but the same body--> Props */}
    </>
  )
}

export default App
