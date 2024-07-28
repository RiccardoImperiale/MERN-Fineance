import "../assets/css/header.css"
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react"
import { NavLink } from 'react-router-dom';

export default function Header() {
    const { user } = useUser()
    return (
        <header>
            <nav className="container">
                <div className="left">
                    <NavLink to='/'>
                        <img src="/img/logo.png" alt="logo" />
                    </NavLink>
                    {user && (
                        <div className="nav_links">
                            <ul>
                                <li><NavLink to="/new" >Add Expense</NavLink></li>
                            </ul>
                        </div>
                    )}
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
