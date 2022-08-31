import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { delToDo } from "../../store/toDoReduser";
import { Task } from "../../store/types";

const ToDoList = () => {
	const dispatch = useDispatch();
	const toDo = useTypedSelector((state) => state.toDo.toDo);
	const deleteItem = (toDo: Task) => dispatch(delToDo(toDo));
	return (
		<>
			{toDo.length == 0 ? (
				<h1>Задачи отсутствуют</h1>
			) : (
				toDo.map((toDo) => (
					<div className="toDo" key={toDo.id} onClick={() => deleteItem(toDo)}>
						{toDo.task}
					</div>
				))
			)}
		</>
	);
};

export default ToDoList;
