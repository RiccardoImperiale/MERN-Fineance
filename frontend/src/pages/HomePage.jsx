import { useUser } from "@clerk/clerk-react"
import Dashboard from "../components/Dashboard"
import Auth from "../components/Auth"

export default function HomePage() {
    const { user } = useUser()
    return (
        <div className="home">
            <div className="container">
                {user ? <Dashboard /> : <Auth />}
            </div>
        </div>
    )
}
