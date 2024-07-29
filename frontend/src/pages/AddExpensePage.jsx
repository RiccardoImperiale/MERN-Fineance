import ExpensesForm from '../components/ExpensesForm'
import '../assets/css/add_expense.css'

export default function AddExpensePage() {
    return (
        <div className="add_expense">
            <div className="container">
                <div className="left">
                    <h2>Add Expense.</h2>
                    <ExpensesForm />
                </div>
                <div className="right">
                    <img src="/img/form.png" alt="illustration" />
                </div>
            </div>
        </div>
    )
}
