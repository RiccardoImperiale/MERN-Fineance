import '../assets/css/dashboard.css'
import ExpensesList from '../components/ExpensesList'

export default function ExpensePage() {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="left">
                    <h2>Your Expenses.</h2>
                    <ExpensesList />
                </div>
                <div className="right">
                    <h2>Stats.</h2>
                </div>
            </div>
        </div>
    )
}

