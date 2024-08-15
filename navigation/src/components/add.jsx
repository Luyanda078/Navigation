import { useState } from "react";
function AddTransaction() {
    const [transactionItem,setTransactionsItem]=useState('')
    const[amount, setAmount] = useState('')
    const[TransactionType,setTransactionType]=useState('')
    return( 
    <div>
        <h1>
            <h3>Add a new transaction</h3>
            </h1>
        <input type="text" placeholder="Enter item"/>
        <br></br>
        <input type="text" placeholder="Enter amount"/>
        <br></br>
        <select></select>
        <br></br>
        <button>Add transaction</button>


    </div>
    );
    }
    export default AddTransaction