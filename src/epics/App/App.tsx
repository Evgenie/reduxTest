import "./styles.css";
import Counter from "../../features/Counter/Counter";
import ToDo from "../../features/ToDo/ToDo";

export default function App() {
	return (
		<div className="App">
			<Counter />
			<ToDo />
		</div>
	);
}
