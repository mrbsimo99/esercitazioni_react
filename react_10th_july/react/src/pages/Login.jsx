import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { memory } from "../utils/memory";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "me@example.com",
        password: "1234"
    });

    const [rememberMe, setRememberMe] = useState(false);

    const handleInput = ({ target: { name, value } }) => {
        setForm((f) => ({
            ...f,
            [name]: value,
        }))
    }

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const result = {
            user: {
                id: "1n81h2bns7gxasd",
                first_name: "Marco",
                last_name: "B",
                email: "me@example.com"
            },
            token: "kjc9wjh8ehgdq0kso.m987cy29830djc09qys980dhy.cxm982gt938hc0qahghsc",
            rememberMe
        }

        dispatch(login(result));
        navigate("/dashboard")
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                        Sign in to your account
                    </h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleInput}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={form.password}
                                onChange={handleInput}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-6 flex items-center">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleRememberMe}
                                className="mr-2"
                            />
                            <label htmlFor="rememberMe" className="text-gray-700 select-none cursor-pointer">
                                Ricordami
                            </label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 cursor-pointer"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login