import { Link } from "react-router-dom";

export function AppHeader() {
    return <header className="app-header flex" >
        <h1>Contact App</h1>
        <nav className="nav-links-wrapper flex ">
            <Link to="/">Home</Link>
            <div>|</div>
            <Link to="/contact">Contacts</Link>
        </nav>
    </header >
}