import React,{useState} from "react";

function AddTransactionForm() {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    category: "",
    description: "",
    amount: "",
  });

  const postTransaction = () => {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    })
     .then((response) => response.json())
     .then((data) => {
        console.log("Success:", data);
        setTransactions([...transactions, data]);
        setNewTransaction({
          date: "",
          category: "",
          description: "",
          amount: "",
        });
      })
     .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div className="ui segment" >
      <form className="ui form">
        <div className="inline fields">
        <input
          type="date"  name="date"value={newTransaction.date} onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value })}
        /> 
        <input type="text" name="description" placeholder="Description" value={newTransaction.description} onChange={(e) =>
            setNewTransaction({...newTransaction, description: e.target.value })
          }
        />
         <input
          type="text" name="category" placeholder="Category" value={newTransaction.category} onChange={(e) =>
            setNewTransaction({...newTransaction, category: e.target.value })
          }
        />
        <input name="amount" placeholder="Amount" type="number" value={newTransaction.amount} onChange={(e) =>
            setNewTransaction({...newTransaction, amount: e.target.value })
          }
        />
        </div>
        <button type="button" className="ui button" onClick={postTransaction}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
export default AddTransactionForm;
