import { createContext } from "react";
import { useState } from "react";

export const TodosContext = createContext({
    //propiedad toDos con un [] 
    todos: [],			//<--- el array se podra extraer con otro Hook
    setTodos:() => {}
    });

//! Estructura basica de un proveedor
// Recibe como argumento a otros componentes ej--> children
// Para que puedan recibir la información definida en el context

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
