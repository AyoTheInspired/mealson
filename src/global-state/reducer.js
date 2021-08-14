export const initialState = {
	cuisineItem: null,
	category: "",
	cuisineClicked: false,
	location: "Lagos",
};

export const actionTypes = {
	OPEN_DYNAMICS: "OPEN_DYNAMICS",
	SET_LOCATION: "SET_LOCATION",
	RETRIEVE_CATEGORY: "RETRIEVE_CATEGORY",
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

		case actionTypes.RETRIEVE_CATEGORY:
			return {
				...state,
				category: action.payload,
				cuisineItem: action.name,
			};

		case actionTypes.RETRIEVE_LOCATION:
			return {
				...state,
				location: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
