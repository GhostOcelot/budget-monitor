import React, { useState } from "react"
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import GlobalStateProvider from "./context/GlobalState"

function App() {
	const [showIncomes, setShowIncomes] = useState(true)
	const [showExpenses, setShowExpenses] = useState(true)

	return (
		<GlobalStateProvider>
			<div className="container">
				<Header />
				<Balance />
				<IncomeExpenses showIncomes={showIncomes} showExpenses={showExpenses} />
				<TransactionList
					setShowIncomes={setShowIncomes}
					setShowExpenses={setShowExpenses}
					showIncomes={showIncomes}
					showExpenses={showExpenses}
				/>
				<AddTransaction />
			</div>
		</GlobalStateProvider>
	)
}

export default App
