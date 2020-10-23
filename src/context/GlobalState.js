import React, { createContext, useReducer, useEffect } from "react"
import RootReducer from "./RootReducer"
import { v4 as uuidv4 } from "uuid"

// const initialState = {
// 	transactions: [
// { id: 1, text: "Flowers", amount: -20 },
// { id: 2, text: "Salary", amount: 300 },
// { id: 3, text: "Book", amount: -10 },
// { id: 4, text: "Camera", amount: 150 }
// 	]
// }

export const GlobalContext = createContext()

const GlobalStateProvider = props => {
	const [transactions, dispatch] = useReducer(RootReducer, [], () => {
		const data = localStorage.getItem("transactions")
		return data ? JSON.parse(data) : []
	})

	useEffect(() => {
		localStorage.setItem("transactions", JSON.stringify(transactions))
	}, [transactions])

	const removeTransaction = id => {
		dispatch({
			type: "REMOVE_TRANSACTION",
			id: id
		})
	}

	const addTransaction = (text, amount) => {
		dispatch({
			type: "ADD_TRANSACTION",
			data: { text, amount, id: uuidv4() }
		})
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions,
				removeTransaction,
				addTransaction
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	)
}

export default GlobalStateProvider
