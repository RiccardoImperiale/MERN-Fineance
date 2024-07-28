import { useUser } from "@clerk/clerk-react"
import Dashboard from "../components/Dashboard"
import Welcome from "../components/Welcome"

export default function HomePage() {
    const { user } = useUser()
    return (
        <div className="home">
            <div className="container">
                {user ? <Dashboard /> : <Welcome />}
            </div>
        </div>
    )
}
