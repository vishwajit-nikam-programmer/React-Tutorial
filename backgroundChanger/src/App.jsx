import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Orange")

  return (
    <>
      <div className="w-full h-screen duration-200"
       style={{backgroundColor:color }}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button onClick={()=>{setColor("Red")}}
             className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg ' style={{backgroundColor:"Red"}}>Red</button>
             <button onClick={()=>{setColor("Green")}}
             className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"Green"}}>Green</button>
             <button onClick={()=>{setColor("Blue")}}
             className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"Blue"}}>Blue</button>
             <button onClick={()=>{setColor("Purple")}}
             className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"Purple"}}>Purple</button>
             <button onClick={()=>{setColor("Cyan")}}
             className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"Cyan"}}>Cyan</button>
             <button onClick={()=>{setColor("#ff00ff")}}
             className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"Magenta"}}>Magenta</button>
             <button onClick={()=>{setColor("Teal")}}
             className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"Teal"}}>Teal</button>
             
          </div>
        </div>
       </div>
    </>
  )
}

export default App
