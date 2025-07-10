import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import React from "react"

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default PublicLayout