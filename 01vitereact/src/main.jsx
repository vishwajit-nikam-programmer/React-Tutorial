import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'


function MyApp()
{
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
const anotherUser = "Chai aur react"
 
const anotherElement =
(
  <a href ="https://google.com" target='_blank'>Visit google </a>
)

//Custom Render Method
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },
  'Click me to Visit Google',
  anotherUser

)

createRoot(document.getElementById('root')).render(
  //  <MyApp />
  //This also works but not correct 
  //according to optimization
  //MyApp()
  //anotherElement
  reactElement
)
