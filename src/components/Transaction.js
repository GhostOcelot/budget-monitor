import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({ transaction }) => {
	const sign = transaction.amount > 0 ? "+" : "-"
	const { removeTransaction } = useContext(GlobalContext)

	return (
		<li className={transaction.amount > 0 ? "plus" : "minus"}>
			{transaction.text}
			<span>
				{sign}
				{Math.abs(transaction.amount)} PLN
			</span>
			<button
				onClick={() => removeTransaction(transaction.id)}
				className="delete-btn"
			>
				x
			</button>
		</li>
	)
}

export default Transaction
