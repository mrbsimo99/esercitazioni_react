import React from "react";
import { useSelector } from "react-redux"

const Home = () => {
    const { token, user } = useSelector((state) => state.auth);

    return (
        <>
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 mt-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Benvenuto, {user.first_name}</h1>
                <p className="text-gray-700 mb-6 block break-words bg-gray-100 p-4 rounded text-sm text-gray-600">
                    Questo è il tuo token di autenticazione:{token};
                </p>

            </div>
        </>
    )
}

export default Home