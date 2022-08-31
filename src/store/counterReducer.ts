import { count } from "./data";
import { ActionCounter } from "./types";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const counterReducer = (state = count, action: ActionCounter) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + action.payload };
		case DECREMENT:
			return {
				...state,
				count: state.count - action.payload,
			};
		default:
			return state;
	}
};

export const increment = (payload: number) => ({
	type: INCREMENT,
	payload,
});

export const decrement = (payload: number) => ({
	type: DECREMENT,
	payload,
});
