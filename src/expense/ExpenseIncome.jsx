import React, { useState } from "react";
import "./Expense.css";

const ExpenseIncome = ({onAddTransaction}) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  const handleAddTransaction = () => {
    if (!amount || !desc) {
      alert("Please fill in all fields");
      return;
    }

    const transaction = {
      amount,
      description: desc,
      type,
    };

    onAddTransaction(transaction)

 
    setAmount("");
    setDesc("");
    setType("EXPENSE");
  };

  return (
    <div className="expense-card">
      <div className="expense-input">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="input-expense"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="input-expense"
        />
      </div>
      <div className="expense-radio">
        <label>
          <input
            type="radio"
            name="type"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />
          Expense
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
          />
          Income
        </label>
      </div>
      <div>
        <button className="expense-add" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default ExpenseIncome;
