import { createContext } from "react";

export const TodosContext = createContext({
	//propiedad toDos con un [] 
	todos: [],			//<--- el array se podra extraer con otro Hook
	});

    