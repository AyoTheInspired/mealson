export const initialState = {
	cuisineItem: null,
	category: "",
	cuisineClicked: false,
};

export const actionTypes = {
	OPEN_DYNAMICS: "OPEN_DYNAMICS",
	CLOSE_DYNAMICS: "CLOSE_DYNAMICS",
	SET_CUISINE: "SET_CUISINE",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.OPEN_DYNAMICS:
			return {
				...state,
				cuisineClicked: true,
				cuisineItem: action.payload,
				category: action.category,
			};

		case actionTypes.CLOSE_DYNAMICS:
			return {
				...state,
				cuisineClicked: false,
				cuisineItem: null,
			};

		default:
			return state;
	}
};

export default reducer;
