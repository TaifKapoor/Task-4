import { UserCircle } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  return (
    <div className='bg-white shadow-md px-4 sm:px-6 py-3 flex justify-between items-center'>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700">Welcome, Admin</h2>
      <div className="flex items-center gap-2">
        <UserCircle size={28} className='text-blue-600' />
        <span className="font-semibold text-sm sm:text-base">{storedUser?.fullName || 'Guest'}</span>
      </div>
    </div>
  )
}

export default Navbar