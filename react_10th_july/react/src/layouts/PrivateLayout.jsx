import React from "react";
import { Outlet } from "react-router-dom"
import Navbar from "../components/dashboard/Navbar"

const PrivateLayout = () => {
    return (
        <>
            <Navbar />
            <main className="p-8 bg-gray-50 min-h-screen">
                <Outlet />
            </main>
        </>
    )
}

export default PrivateLayout