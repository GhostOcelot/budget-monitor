export default (state, action) => {
	switch (action.type) {
		case "REMOVE_TRANSACTION":
			return state.filter(transaction => transaction.id !== action.id)

		case "ADD_TRANSACTION":
			return [
				{
					text: action.data.text,
					amount: action.data.amount,
					id: action.data.id
				},
				...state
			]

		default:
			return state
	}
}
