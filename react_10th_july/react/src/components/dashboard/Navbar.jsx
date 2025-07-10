import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../store/slices/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <div className="flex gap-x-6">
                <Link className="text-gray-700 font-semibold hover:text-blue-600 transition" to="/">Home</Link>
                <Link className="text-gray-700 font-semibold hover:text-blue-600 transition" to="/dashboard">Dashboard</Link>
            </div>
            <div className="flex items-center gap-x-4">
                <div className="text-gray-700 font-semibold">
                    {user.first_name} {user.last_name}
                </div>
                <span className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</span>
            </div>
        </nav>
    )
}

export default Navbar