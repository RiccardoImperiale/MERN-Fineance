import '../assets/css/expenses_form.css'
import { useState } from "react"
import { useUser } from "@clerk/clerk-react"
import { useExpenses } from "../contexts/expensesContext"
import { useNavigate } from 'react-router-dom'

export default function FinancialForm() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [payment, setPayment] = useState("")
    const { addExpense } = useExpenses()

    const { user } = useUser()

    const navigate = useNavigate()

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

        return navigate('/')
    }

    return (
        <form className='expenses_form' onSubmit={handleSubmit}>
            {/* TITLE */}
            <div className="input_group">
                <label htmlFor="title">Description</label>
                <input type="text" id="title" placeholder='Enter a Short Description' name="title" required onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            {/* AMOUNT */}
            <div className="input_group">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" placeholder='Add Amount' name="amount" required onChange={(e) => setAmount(e.target.value)} value={amount} />
            </div>
            {/* CATEGORY */}
            <div className="input_group">
                <label htmlFor="category">Category</label>
                <select className={category === '' ? 'opt-not-selected' : 'opt-selected'} id="category" name="category" required onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option disabled className="first-option" value=""> Select a Category</option>
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
                <label htmlFor="payment">Payment Method</label>
                <select className={payment === '' ? 'opt-not-selected' : 'opt-selected'} id="payment" name="payment" required onChange={(e) => setPayment(e.target.value)} value={payment}>
                    <option disabled value="">Select a Payment Method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>
            </div>
            <div className="action">
                <button type="submit" className="button btn">
                    <img width={20} src="/img/plus.png" alt="plus icon" />
                    <span>Add Expense</span>
                </button>
            </div>
        </form>
    )
}
