import { useState } from 'react'
import './App.css'
import AddTransaction from './components/add'
import DisplayTransaction from './components/DisplayTransaction';
import Login from './components/login';
import Home from './components/home';
import NoPages from './components/noPages';
import SignUp from './components/signUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [transactions, setTransctions] = useState([]);

  const add = (transactionItem,amount,transactionType)=>{

    setTransctions((transactions)=>[...transactions,{transactionItem:transactionItem, amount:amount,transactionType:transactionType}]);
    console.log(transactions)
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
      
          <Route path='/home' element={<Home AddTransaction={add} transactions={transactions}/>} />
          <Route path="add" element={<AddTransaction/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="*" element={<NoPages />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="DisplayTransaction" element={<DisplayTransaction />} />
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
