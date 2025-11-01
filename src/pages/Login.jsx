import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation()

    const msg = location.state?.msg || "";

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")

        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const user = users.find(
            (u) => u.email === email && u.password === password
        )

        if (user) {
            localStorage.setItem("isLoggedIn", 'true');
            localStorage.setItem("currentUser", JSON.stringify(user));
            setError("");
            navigate("/dashboard")
        }
        else {
            setError("Invalid email or password")
        }
    }

    return (
        <div className='max-w-md w-full p-6 bg-white rounded-lg shadow-lg mx-4 md:mx-auto'>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            {error && <p className='text-red-500 text-center'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        name='email'
                        value={email}
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        name='password'
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type='submit'
                    className="w-full bg-blue-500 text-white p-2 hover:bg-blue-600">Login</button>
            </form>

            <p className="mt-4 text-center">Don't have an account?</p>
            <Link to='/signup' className='text-blue-500 hover:underline'>Sign up here</Link>
        </div>
    )
}

export default Login
