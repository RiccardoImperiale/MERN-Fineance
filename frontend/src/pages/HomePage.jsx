import { useUser } from "@clerk/clerk-react"
import WelcomePage from "./WelcomePage"
import ExpensesPage from "./ExpensesPage"

export default function HomePage() {
    const { user } = useUser()
    return (
        <div className="home">
            {user ? <ExpensesPage /> : <WelcomePage />}
        </div>
    )
}
