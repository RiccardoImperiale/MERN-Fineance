import { useUser } from "@clerk/clerk-react"
import WelcomePage from "./WelcomePage"
import DashboardPage from "./DashboardPage"

export default function HomePage() {
    const { user } = useUser()
    return (
        <div className="home">
            {user ? <DashboardPage /> : <WelcomePage />}
        </div>
    )
}
