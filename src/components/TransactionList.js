import React, { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction"

const TransactionList = ({
	setShowIncomes,
	setShowExpenses,
	showIncomes,
	showExpenses
}) => {
	const { transactions } = useContext(GlobalContext)

	const [filteredTransactions, setFilter] = useState(transactions)

	const filterExpenses = () => {
		setFilter(
			transactions.filter(item => {
				return item.amount < 0
			})
		)
		setShowIncomes(false)
		setShowExpenses(true)
	}

	const filterIncomes = () => {
		setFilter(
			transactions.filter(item => {
				return item.amount > 0
			})
		)
		setShowIncomes(true)
		setShowExpenses(false)
	}

	const filterAll = () => {
		setFilter(transactions)
		setShowIncomes(true)
		setShowExpenses(true)
	}

	useEffect(filterAll, [transactions])

	return (
		<>
			<h3 className="details">Details:</h3>
			<div className="details-btn-container">
				<button
					className={`details-btn ${
						showIncomes && showExpenses ? "active" : ""
					}`}
					onClick={filterAll}
				>
					all
				</button>
				<button
					className={`details-btn ${
						showIncomes && !showExpenses ? "active" : ""
					}`}
					onClick={filterIncomes}
				>
					incomes
				</button>
				<button
					className={`details-btn ${
						!showIncomes && showExpenses ? "active" : ""
					}`}
					onClick={filterExpenses}
				>
					expenses
				</button>
			</div>
			<ul className="list">
				{filteredTransactions.map(transaction => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	)
}

export default TransactionList
