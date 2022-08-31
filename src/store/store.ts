import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { toDoReducer } from "./toDoReduser";

export const rootReducer = combineReducers({
	toDo: toDoReducer,
	counter: counterReducer,
});

export const store = createStore(rootReducer);
