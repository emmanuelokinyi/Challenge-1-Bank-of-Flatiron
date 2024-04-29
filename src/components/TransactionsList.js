import React,{useState,useEffect} from "react";
import Transaction from "./Transaction";

function TransactionsList() {

  const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch("http://localhost:8001/transactions")
            .then(response => response.json())
            .then(transactions => setTransactions(transactions))
            .catch(err => console.log(err))
    }, [])

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions.map((transactions,index)=>{
                    return <Transaction
                    index={index}
                    date={transactions.date}
                    category={transactions.category}
                    description={transactions.description}
                    amount={transactions.amount}
                    key={transactions.id}
                    />
                })}
      </tbody>
    </table>
  );
}

export default TransactionsList;
