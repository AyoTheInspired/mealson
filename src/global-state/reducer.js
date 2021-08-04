export const initialState = {
	cuisineItem: null,
	category: "",
	cuisineClicked: false,
	location: "Lagos",
};

export const actionTypes = {
	OPEN_DYNAMICS: "OPEN_DYNAMICS",
	CLOSE_DYNAMICS: "CLOSE_DYNAMICS",
	SET_LOCATION: "SET_LOCATION",
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

		case actionTypes.SET_LOCATION:
			return {
				...state,
				location: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
