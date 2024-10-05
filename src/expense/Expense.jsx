import React, { useState } from 'react';
import './Expense.css';
import ExpenseIncome from './ExpenseIncome';

const Expense = () => {
  const [isAddMoney, setIsAddMoney] = useState(true);
  const [balance, setBalance] = useState(100000);
  const [transactions, setTransactions] = useState([]);

  const handleTransaction = (transaction) => {
    // Add the new transaction to the array of transactions
    setTransactions([...transactions, transaction]);

    // Update the balance based on the transaction type
    if (transaction.type === 'EXPENSE') {
      setBalance(balance - parseFloat(transaction.amount));
    } else {
      setBalance(balance + parseFloat(transaction.amount));
    }
  };

  return (
    <div className='expense'>
      <div>
        <h1>Expense Tracker</h1>
      </div>

      <div className='expense-balance'>
        <h2>Balance: ${balance.toFixed(2)}</h2>
        <button className='expense-button' onClick={() => setIsAddMoney(!isAddMoney)}>
          {isAddMoney ? 'Cancel' : 'Add'}
        </button>
      </div>

      <div>
        {isAddMoney && <ExpenseIncome onAddTransaction={handleTransaction} />}
      </div>

     <div className='expense-transaction'>
      {transactions.map((transaction,index)=>(
        <div key={index} className='expense-row'>
          <p>{transaction.type}</p>
          <p>{transaction.amount}</p>
          <p>{transaction.description}</p>
          
        </div>
      ))}
     </div>
    </div>
  );
};

export default Expense;
