import { useState } from 'react'
import './App.css'
import AddTransaction from './components/add'
import DisplayTransaction from './components/DisplayTransaction';
import Login from './components/login';
import Home from './components/home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function App() {

  const [transactions, setTransctions] = useState([]);
  const add = (transactionItem,amount,transactionType)=>{
    setTransctions((transactions)=>[...transactions,{transactionItem:transactionItem, amount:amount,transactionType:transactionType}]);
    console.log(transactions)
  }

  return (
    <>
      <Router>
      <div className="container"> 
        <Switch>
          <Route exact path="/.">
            
          </Route>
          <Route path='/home'>
           <Home add={add} transactions={transactions}/>
          </Route>
        </Switch>
       
    </div>
      </Router>
    </>
  )
}

export default App
