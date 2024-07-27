import { useUser } from "@clerk/clerk-react"
import FinancialForm from "./FinancialForm"
import FinancialList from "./FinancialList"

export default function Dashboard() {
    const { user } = useUser()
    return (
        <div className="dashboard">
            <h1>welcome {user?.firstName}</h1>
            <FinancialForm />
            <FinancialList />
        </div>
    )
}
