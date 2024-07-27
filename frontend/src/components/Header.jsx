import "../assets/css/header.css"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react"

export default function Header() {
    return (
        <header>
            <nav className="container">
                <div className="nav_links">fwefw</div>
                <div className="sign_in">
                    <SignedOut>
                        <SignUpButton mode="modal" />
                        <SignInButton mode="modal" />
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}
