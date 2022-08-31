import { toDo } from "./data";
import { ActionToDo, Task } from "./types";

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

export const toDoReducer = (state = toDo, action: ActionToDo) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, toDo: [...state.toDo, action.payload] };
		case DEL_TODO:
			return {
				...state,
				toDo: state.toDo.filter((toDo) => toDo.id !== action.payload.id),
			};
		default:
			return state;
	}
};

export const addToDo = (payload: Task) => ({
	type: ADD_TODO,
	payload,
});

export const delToDo = (payload: Task) => ({
	type: DEL_TODO,
	payload,
});
