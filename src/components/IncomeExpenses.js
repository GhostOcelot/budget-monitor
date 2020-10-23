import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const IncomeExpenses = () => {
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
			<div>
				<h2>Income</h2>
				<p className="money plus">+{income} PLN</p>
			</div>
			<div>
				<h2>Expense</h2>
				<p className="money minus">-{expense} PLN</p>
			</div>
		</div>
	)
}

export default IncomeExpenses
