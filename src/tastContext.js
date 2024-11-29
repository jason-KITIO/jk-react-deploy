import { createContext, useReducer } from "react";
import { inicialState, tackReducer } from "./TaskReducer"

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tackReducer, inicialState)

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}