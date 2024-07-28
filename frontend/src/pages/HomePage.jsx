import { useUser } from "@clerk/clerk-react"
import WelcomePage from "./WelcomePage"
import ExpensesPage from "./ExpensesPage"

export default function HomePage() {
    const { user } = useUser()
    return (
        <div className="home">
            <div className="container">
                {user ? <ExpensesPage /> : <WelcomePage />}
            </div>
        </div>
    )
}
