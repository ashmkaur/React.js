import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home} from './components/index.js'
import {About} from './components/index.js'
import {Contact} from './components/index.js'
import {User} from './components/index.js'
import {Github} from './components/index.js'
import {githubinfoloader} from './components/github/github.jsx'


const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/> 
      },
      {
        path: 'about',
        element: <About/>, 
        // children:[
        //   {
        //     path:
        //     element:
        //   }
        // ]
        // if i want about/ashmeet
      },
      {
        path: 'contact',
        element: <Contact/> 
      },
      {
        path: 'user/:userid',
        element: <User/>
      },
      {
        path: 'github',
        element: <Github/>,
        loader:githubinfoloader
      }
    ]
  }
])

// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>

//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
