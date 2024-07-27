import ExpensesForm from "./ExpensesForm"
import "../assets/css/dashboard.css"

export default function Dashboard() {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <ExpensesForm />
        </div>
    )
}
