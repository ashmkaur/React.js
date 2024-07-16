import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Header} from './components/index'
import {Home} from './components/index'
import {Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <header/>
      <home/>
      <footer/> */}

      {/* as such we wont be able to render the things as we have used the react router dom

      so make the things work go to main.jsx and make Router component...Going Bye  */}

      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
