import { useUser } from "@clerk/clerk-react"
import Dashboard from "../components/Dashboard"
import Welcome from "../components/Welcome"

export default function WelcomePage() {
    const { user } = useUser()
    return (
        <div className="homepage">
            <div className="container">
                <Welcome />
            </div>
        </div>
    )
}
