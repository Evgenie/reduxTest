import { rootReducer } from "./store";

export interface ActionToDo {
	type: string;
	payload: Task;
}

export interface ActionCounter {
	type: string;
	payload: number;
}

export interface Task {
	task: string;
	id: number;
}

export interface ToDo {
	toDo: Task[];
}

export interface Counter {
	count: number;
}

export type TRootState = ReturnType<typeof rootReducer>;
