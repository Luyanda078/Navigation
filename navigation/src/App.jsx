import { useState } from 'react'
import './App.css'
import AddTransaction from './components/add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container"> 
      <AddTransaction/>
    </div>
    </>
  )
}

export default App
