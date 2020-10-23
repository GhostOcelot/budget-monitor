import React, { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {
	const [text, setText] = useState("")
	const [amount, setAmount] = useState("")
	const { addTransaction } = useContext(GlobalContext)

	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim().length && amount) {
			addTransaction(text, parseInt(amount))
			setText("")
			setAmount("")
		}
	}

	return (
		<>
			<h3>New transaction:</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Description:</label>
					<input
						type="text"
						value={text}
						onChange={e => setText(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount: <br />
						<small>negative - expense, positive - income</small>
					</label>
					<input
						type="number"
						value={amount}
						onChange={e => setAmount(e.target.value)}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	)
}

export default AddTransaction
