import React from "react";
import { useSelector } from "react-redux"

const Home = () => {
    const { token, user } = useSelector((state) => state.auth);
    
    return (
        <>
            <h1>Benvenuto, {user.first_name}</h1>
            <p>Questo è il tuo token di autenticazione: {token}</p>
        </>
    )
}

export default Home