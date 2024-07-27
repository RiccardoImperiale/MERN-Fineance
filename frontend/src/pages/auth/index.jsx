import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react"

export default function Auth() {
    return (
        <div className="sign_in">
            <SignedOut>
                <SignUpButton mode="modal" />
                <SignInButton mode="modal" />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}
