import "../assets/css/financial_form.css"
import { useState } from "react"
import { useUser } from "@clerk/clerk-react"
import { useExpenses } from "../contexts/expensesContext"

export default function FinancialForm() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [payment, setPayment] = useState("")
    const { addExpense } = useExpenses()

    const { user } = useUser()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newRecord = {
            userId: user?.id,
            title,
            amount: Number(amount),
            category,
            payment
        }

        addExpense(newRecord)

        setTitle("")
        setAmount("")
        setCategory("")
        setPayment("")
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* TITLE */}
            <div className="input_group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            {/* AMOUNT */}
            <div className="input_group">
                <label htmlFor="amount">amount</label>
                <input type="number" id="amount" name="amount" required onChange={(e) => setAmount(e.target.value)} value={amount} />
            </div>
            {/* CATEGORY */}
            <div className="input_group">
                <label htmlFor="category">category</label>
                <select className="input" id="category" name="category" required onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">Select a Category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Salary">Salary</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            {/* PAYMENT */}
            <div className="input_group">
                <label htmlFor="payment">Payment Method:</label>
                <select className="input" id="payment" name="payment" required onChange={(e) => setPayment(e.target.value)} value={payment}>
                    <option value="">Select a Payment Method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>
            </div>
            <button type="submit" className="button">
                Add Record
            </button>
        </form>
    )
}
