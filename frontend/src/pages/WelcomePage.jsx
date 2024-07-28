import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react"
import "../assets/css/welcome.css"

export default function Welcome() {
    return (
        <div className="welcome">
            <div className="left">
                <h1>Welcome <br /> To Fineance.</h1>
                <div className="actions">
                    <SignedOut>
                        <SignUpButton mode="modal" />
                        <SignInButton mode="modal" />
                    </SignedOut>
                </div>
            </div>
            <div className="right">
                <img src="/img/welcome.png" alt="" />
            </div>
        </div>
    )
}