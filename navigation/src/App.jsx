import { useState } from 'react'
import './App.css'
import AddTransaction from './components/add'
import DisplayTransaction from './components/DisplayTransaction';
import Home from './components/home';

function App() {

  const [transactions, setTransctions] = useState([]);
  const add = (transactionItem,amount,transactionType)=>{
    setTransctions((transactions)=>[...transactions,{transactionItem:transactionItem, amount:amount,transactionType:transactionType}]);
    console.log(transactions)
  }

  return (
    <>
      <div className="container"> 
        <Home add={add} transactions={transactions}/>
    </div>
    </>
  )
}

export default App
