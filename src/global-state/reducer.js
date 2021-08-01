export const initialState = {
	cuisineItem: null,
	cuisineClicked: false,
};

export const actionTypes = {
	OPEN_DYNAMICS: "OPEN_DYNAMICS",
	CLOSE_DYNAMICS: "CLOSE_DYNAMICS",
	// CUSINE_CLOSED: "CUSINE_CLOSED",
	SET_CUISINE: "SET_CUISINE",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.OPEN_DYNAMICS:
			return {
				...state,
				cuisineClicked: true,
				cuisineItem: action.payload,
			};

		case actionTypes.CLOSE_DYNAMICS:
			return {
				...state,
				cuisineClicked: false,
			};

		case actionTypes.SET_CUISINE:
			return {
				...state,
				cuisineItem: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
