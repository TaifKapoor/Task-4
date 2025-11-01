import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate();


  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")


    if (!fullName || !email || !password) {
      setError("All Fields are required")
      return
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    users.push({ fullName, email, password });
    localStorage.setItem('users', JSON.stringify(users))
    setSuccess("Account Created successfully")
    setTimeout(() => {
      navigate("/login")
    }, 1000);

  }

  return (
    <div className='max-w-md w-full p-6 bg-white rounded-lg shadow-lg md:mx-auto my-8 mx-4'>
      <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

      {error && <p className='text-red-500 text-center'>{error}</p>}
      {success && <p className='text-green-500 text-center'>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            name='fullName'
            value={fullName}
            type="text"
            onChange={e => setFullName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
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
          className="w-full bg-blue-500 text-white p-2 hover:bg-blue-600">Signup</button>
      </form>

      <p className="mt-4 text-center">Don't have an account?</p>
      <Link to='/login' className='text-blue-500 hover:underline'>Login here</Link>
    </div>
  )
}

export default Signup

