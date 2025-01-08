import { createContext } from "react";
import { useState } from "react";

export const TodosContext = createContext({
    //propiedad toDos con un [] 
    todos: [],			//<--- el array se podra extraer con otro Hook
    setTodos:() => {}
    });

export const TodosProvider = ({children}) => {

	//estado global
	const [todos, setTodos] = useState([]);
	
	//se contruye el value
	const value = {
	todos,
	setTodos
	};

	return (
	//las propiedades del context (todos: []) se definen en el value
	//se agrega el value construido
	<TodosContext.Provider value={value}>
		{children}
	</TodosContext.Provider>
	);	
};
