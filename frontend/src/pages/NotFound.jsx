import { Link } from "react-router-dom";

import '../assets/css/not_found.css'
export default function NotFound() {
    return (
        <div className="not_found container">
            <h3>Sorry, page not found...</h3>
            <Link to="/" className="btn btn_white">Go Back Home</Link>
        </div>
    )
}
