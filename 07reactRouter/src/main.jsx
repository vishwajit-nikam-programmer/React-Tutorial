import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import Layout from './Components/Layout'
import { About, Contact, Home, User } from './Components/Index'
import Github,from './Components/Github/Github'
import { githubInfoLoader } from './Constants/GithubInfoLoader'
//import App from './App.jsx'

// Way to use layout
// You cant use layout function anywhere and anyway

// const router1 = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//          path:"about",
//          element:<About/>
//       },
//       {
//           path:"contact",
//          element:<Contact/>
//       }
//     ]
//   }
// ])

const router1 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='User/:id' element={<User/>}/>
    <Route loader = {githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router1} />
  </StrictMode>,
)

