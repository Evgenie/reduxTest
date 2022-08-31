import Form from "../Form/Form";
import ToDoList from "../ToDoList/ToDoList";

const ToDo = () => {
	return (
		<div className="toDoWrap">
			<Form />
			<ToDoList />
		</div>
	);
};

export default ToDo;
