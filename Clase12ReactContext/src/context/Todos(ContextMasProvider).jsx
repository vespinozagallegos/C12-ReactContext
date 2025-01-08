import { createContext } from "react";

export const TodosContext = createContext({
    //propiedad toDos con un [] 
    todos: [],			//<--- el array se podra extraer con otro Hook
    });

//! Estructura basica de un proveedor
// Recibe como argumento a otros componentes ej--> children
// Para que puedan recibir la información definida en el context

export const TodosProvider = ({children}) => {
	return (
	//las propiedades del context (todos: []) se definen en el value
	<TodosContext.Provider value={""}>
		{children}
	</TodosContext.Provider>
	)	
};