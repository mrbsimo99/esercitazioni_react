import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <div className="flex gap-x-6">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-blue-600 font-semibold transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/dashboard"
                        className="text-gray-700 hover:text-blue-600 font-semibold transition"
                    >
                        Dashboard
                    </Link>
                </div>
            </nav>
        </>

    );
};

export default Navbar;