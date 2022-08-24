import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import { data } from "./data";

const addToDo = { type: "ADD_TODO", payload: "" };

const reducer = (state = data, action = addToDo) => {
	switch (action.type) {
		case "ADD_TODO":
			return { ...state, action };
		case "DEL_TODO":
			return { ...state, state };
		default:
			return state;
	}
};

const store = createStore(reducer);
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
