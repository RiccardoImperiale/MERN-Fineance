import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

import '../assets/css/not_found.css'
export default function NotFound() {
    return (
        <div className="not_found container">
            <FiAlertCircle className="icon" />
            <h3>Sorry, page not found...</h3>
            <Link to="/" className="btn">Go Back Home</Link>
        </div>
    )
}
