import { createContext, useContext, useState } from "react";



export const ExpensesContext = createContext(null)

const [expenses, setExpenses] = useState([])

const addExpense = async (expense) => {
    await fetch("")
}

export const ExpensesProvider = ({ children }) => {
    return (
        <ExpensesContext.Provider value={{ expenses, addExpense }}>
            {children}
        </ExpensesContext.Provider>
    )
}


// custom hook
export const useExpenses = () => {
    const context = useContext(ExpensesContext)

    if (!context) {
        throw new Error("useExpenses must be used within a ExpensesProvider")
    }

    return context
}