import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { decrement, increment } from "../../store/counterReducer";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useTypedSelector((state) => state.counter.count);
	const handleIncrement = () => {
		const num = Number(prompt("Введите число"));
		if (!num) return alert("Нужно вводить число");
		dispatch(increment(num));
	};
	const handleDecrement = () => {
		const num = Number(prompt("Введите число"));
		if (!num) return alert("Нужно вводить число");
		dispatch(decrement(num));
	};
	return (
		<div>
			<div className="count">{count}</div>
			<div className="button_wrap">
				<div className="decrement" onClick={handleDecrement}>
					<p>decrement</p>
				</div>
				<div className="increment" onClick={handleIncrement}>
					<p>increment</p>
				</div>
			</div>
		</div>
	);
};

export default Counter;
