import '../assets/css/dashboard.css'
import ExpensesList from '../components/ExpensesList'
import Statistics from '../components/Statistics'

export default function DashboardPage() {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="dashboard_left">
                    <h2>Your Expenses.</h2>
                    <ExpensesList />
                </div>
                <div className="dashboard_right">
                    <h2>Stats.</h2>
                    <Statistics />
                </div>
            </div>
            <div className="filter_bg"></div>
        </div>
    )
}

