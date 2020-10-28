import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const IncomeExpenses = ({ showIncomes, showExpenses }) => {
	const { transactions } = useContext(GlobalContext)
	const amounts = transactions.map(transaction => transaction.amount)

	const expense = (
		amounts.filter(amount => amount < 0).reduce((a, b) => a + b, 0) * -1
	).toFixed(2)
	const income = amounts
		.filter(amount => amount > 0)
		.reduce((a, b) => a + b, 0)
		.toFixed(2)

	return (
		<div className="inc-exp-container">
			<div style={{ display: showIncomes ? "" : "none" }}>
				<h2>Incomes</h2>
				<p className="money plus">+{income} PLN</p>
			</div>
			<div
				className="inc-exp-divider"
				style={{ display: !showIncomes || !showExpenses ? "none" : "" }}
			></div>
			<div style={{ display: showExpenses ? "" : "none" }}>
				<h2>Expenses</h2>
				<p className="money minus">-{expense} PLN</p>
			</div>
		</div>
	)
}

export default IncomeExpenses
