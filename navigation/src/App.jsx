import { useState } from 'react'
import './App.css'
import AddTransaction from './components/add'

function App() {

  const [transactions, setTransctions] = useState([]);
  const add = (transactionItem,amount,transactionType)=>{
    setTransctions((transactions)=>[...transactions,{transactionItem:transactionItem, amount:amount,transactionType:transactionType}]);
  }

  return (
    <>
      <div className="container"> 
      <AddTransaction/>
    </div>
    </>
  )
}

export default App
