import React from "react";
import "./App.css";
import { useState } from "react";
import TransactionForm from "./components/Form";
import TableTransaction from "./components/Table";
import SearchBar from "./components/Search";
import Header from "./components/Header";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addTransaction(newTransaction) {
    const id = Date.now();
    const transaction = { id, ...newTransaction };
    setTransactions([...transactions, transaction]);
  }
  //helps on search area when searching
  const filteredTransactions = transactions
    ? transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  function deleteTransaction(id) {
    // deleting a transaction
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <div className="App">
      <Header />
      <TableTransaction
        transactions={filteredTransactions}
        onDelete={deleteTransaction}
      />
      <SearchBar onSearch={setSearchTerm} />
      <TransactionForm onSubmit={addTransaction} />
    </div>
  );
}

export default App;

