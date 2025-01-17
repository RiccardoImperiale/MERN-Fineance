import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
export const ExpensesContext = createContext(null)

export const ExpensesProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(false);

    const { user } = useUser()
    const backendUrl = 'https://fineance-backend.onrender.com'

    const fetchExpenses = async () => {
        if (!user) return;

        setLoading(true);

        const res = await fetch(`${backendUrl}/expenses/getAllByUserId/${user.id}`)
        if (res.ok) {
            const allExpenses = await res.json()
            setExpenses(allExpenses)
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchExpenses()
    }, [user])

    const addExpense = async (expense) => {
        const res = await fetch(`${backendUrl}/expenses`, {
            method: "POST",
            body: JSON.stringify(expense),
            headers: {
                "Content-Type": "application/json"
            }
        })
        try {
            if (res.ok) {
                const newExpense = await res.json()
                setExpenses((prev) => [...prev, newExpense])
            }
        } catch (err) {
            console.log(err);
        }
    }

    const updateExpense = async (updatedExpense) => {
        const res = await fetch(`${backendUrl}/expenses/${updatedExpense._id}`, {
            method: "PUT",
            body: JSON.stringify(updatedExpense),
            headers: {
                "Content-Type": "application/json",
            },
        });
        try {
            if (res.ok) {
                const updatedExpenses = expenses.map(exp =>
                    exp._id === updatedExpense._id ? updatedExpense : exp
                );
                setExpenses(updatedExpenses);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteExpense = async (id) => {
        const res = await fetch(`${backendUrl}/expenses/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        try {
            if (res.ok) {
                setExpenses(expenses.filter(exp => exp._id !== id));
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ExpensesContext.Provider value={{ expenses, addExpense, updateExpense, deleteExpense, loading }}>
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