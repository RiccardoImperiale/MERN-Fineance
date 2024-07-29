import '../assets/css/dashboard.css'
import ExpensesList from '../components/ExpensesList'
import Statistics from '../components/Statistics'

export default function DashboardPage() {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="left">
                    <h2>Your Expenses.</h2>
                    <ExpensesList />
                </div>
                <div className="right">
                    <h2>Stats.</h2>
                    <Statistics />
                    <img className='illustration' src="/img/stats.png" alt="statistics illustration" />
                </div>
            </div>
        </div>
    )
}

