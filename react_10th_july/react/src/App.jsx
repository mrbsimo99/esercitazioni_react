import { Navigate, Route, Routes } from "react-router-dom"
import React from "react";
// Layouts
import PublicLayout from "./layouts/PublicLayout"
// Public
import Login from "./pages/Login"

// Dashboard
import Home from "./pages/dashboard/Home"
import { useSelector } from "react-redux"
import PrivateLayout from "./layouts/PrivateLayout"

const ProtectedRoute = ({ children }) => {
    const { token } = useSelector((state) => state.auth);

    if (token == null) {
        return <Navigate to="/" />
    }

    return children;
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route path="" element={<Login />} />
            </Route>
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <PrivateLayout />
                </ProtectedRoute>
            }>
                <Route path="" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App