import { useState } from 'react'
import './App.css'
import AddTransaction from './components/add'
import DisplayTransaction from './components/DisplayTransaction';

function App() {

  const [transactions, setTransctions] = useState([]);
  const add = (transactionItem,amount,transactionType)=>{
    setTransctions((transactions)=>[...transactions,{transactionItem:transactionItem, amount:amount,transactionType:transactionType}]);
    console.log(transactions)
  }

  return (
    <>
      <div className="container"> 
        <DisplayTransaction transactions={transactions}/>
      <AddTransaction add={add}/>
    </div>
    </>
  )
}

export default App
