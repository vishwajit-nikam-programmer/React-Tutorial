import './App.css'
import Card from '../Components/Card'

function App() {

  return (
   <>
       <h1 className='bg-green-400 text-black 
       rounded-xl mb-4 '>Tailwind Test</h1>
       <Card props="Vishwajit Nikam" btnText="Click Me"/>
       <br/>
       <br/>
       <Card props="Vaishnavi Nikam"/>
   </>
  )
}

export default App
