import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../store/toDoReduser";

const Form = () => {
	const [inputToDo, setInputToDo] = useState("");
	const dispatch = useDispatch();
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
		setInputToDo(e.target.value);
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const toDo = {
			task: inputToDo,
			id: Date.now(),
		};
		inputToDo.length > 0 ? dispatch(addToDo(toDo)) : undefined;
		setInputToDo("");
	};
	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<input
				type="text"
				className="input_toDo"
				value={inputToDo}
				onChange={handleInput}
			/>
			<input
				className="input_toDo"
				type="submit"
				value="Добавить задачу"
				style={{
					marginLeft: "10px",
					height: "55px",
					textTransform: "uppercase",
					padding: "10px",
					width: "320px",
					cursor: "pointer",
				}}
			/>
		</form>
	);
};

export default Form;
