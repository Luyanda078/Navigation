function DisplayTransaction(props){
    {props.transaction.map((data)=>(
        <div>
            <h6>{data.transactionItem}</h6>
            <h6>{data.amount}</h6>
            <h6>{data.transactionType}</h6>
        </div>
    ))}
    return(
        <div>
            <h4>History of your transcaction</h4>

        </div>
    )
}
export default DisplayTransaction