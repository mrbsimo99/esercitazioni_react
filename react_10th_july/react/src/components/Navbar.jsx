import { Link } from "react-router-dom"
import React from "react";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>
    )
}

export default Navbar;