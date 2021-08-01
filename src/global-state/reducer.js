export const initialState = {
	cuisineItem: null,
	cuisineClicked: false,
};

export const actionTypes = {
	CUISINE_CLICKED: "CUISINE_CLICKED",
	CUSINE_CLOSED: "CUSINE_CLOSED",
	SET_CUISINE: "SET_CUISINE",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.CUISINE_CLICKED:
			return {
				...state,
				cuisineClicked: true,
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
