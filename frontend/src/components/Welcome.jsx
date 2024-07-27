import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react"
import "../assets/css/welcome.css"

export default function Welcome() {
    return (
        <div className="welcome">
            <h1>Welcome to <span>Fineance</span></h1>
            <div className="actions">
                <SignedOut>
                    <SignUpButton mode="modal" />
                    <SignInButton mode="modal" />
                </SignedOut>
            </div>
        </div>
    )
}