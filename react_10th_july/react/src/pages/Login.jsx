import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "me@example.com",
        password: "1234"
    });

    const handleInput = ({ target: { name, value } }) => {
        setForm((f) => ({ 
            ...f,
            [name]: value,
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const result = {
            user: {
                id: "1n81h2bns7gxasd",
                first_name: "Marco",
                last_name: "Rossi",
                email: "me@example.com"
            },
            token: "kjc9wjh8ehgdq0kso.m987cy29830djc09qys980dhy.cxm982gt938hc0qahghsc"
        }

        dispatch(login(result));
        navigate("/dashboard")
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={form.email} onInput={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={form.password} onInput={handleInput} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login