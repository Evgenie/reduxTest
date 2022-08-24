import { useState } from "react";
import "./styles.css";
import { data } from "./data";

export default function App() {
	const [count, setCount] = useState(0);
	const [toDo, setToDo] = useState(data);
	const deleteItem = (i: number) =>
		setToDo({
			...toDo,
			action: toDo.action
				.reduce(
					(arr, value) => (value === toDo.action[i] ? arr : arr + "," + value),
					""
				)
				.split(","),
		});
	const addItem = (item: string) =>
		setToDo({ ...toDo, action: toDo.action.push(item) });
	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);
	return (
		<div className="App">
			<div className="count">{count}</div>
			<div className="button_wrap">
				<div className="decrement" onClick={decrement}>
					<p>decrement</p>
				</div>
				<div className="increment" onClick={increment}>
					<p>increment</p>
				</div>
			</div>
			<div className="toDoWrap">
				<input
					type="text"
					name="ToDo"
					className="input_toDo"
					onChange={(e) => addItem(e.type)}
				/>
				{toDo.action.map((doing, i) => (
					<div className="toDo" key={i} onClick={() => deleteItem(i)}>
						{doing}
					</div>
				))}
			</div>
		</div>
	);
}
