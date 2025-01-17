import "../assets/css/header.css"
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react"
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
    const { user } = useUser()

    const linkClass = ({ isActive }) => {
        if (location.pathname === '/' && user) {
            return isActive ? 'stats_current_page' : 'stats_inactive'
        } else {
            return isActive ? 'current_page' : 'inactive'
        }
    }

    const location = useLocation();

    const logoSrc = location.pathname === '/' && user ? "/img/logo-dark.png" : "/img/logo.png";

    return (
        <header>
            <nav className="container">
                <div className="left">
                    <NavLink to='/'>
                        <img src={logoSrc} alt="logo" />
                    </NavLink>
                    {user && (
                        <div className="nav_links">
                            <ul>
                                <li><NavLink to="/" className={linkClass} >Dashboard</NavLink></li>
                                <li><NavLink to="/new" className={linkClass} >Add Expense</NavLink></li>
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
