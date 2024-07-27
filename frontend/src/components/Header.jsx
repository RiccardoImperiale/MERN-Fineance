import "../assets/css/header.css"
import { SignedIn, UserButton } from "@clerk/clerk-react"
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="container">
                <div className="nav_links">
                    <ul>
                        <li><NavLink to="/" >Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="sign_in">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}
