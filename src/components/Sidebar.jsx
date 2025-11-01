import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { User, BarChart3, LogOut, LayoutDashboard, Menu, X } from 'lucide-react'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  const links = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
    { name: 'Users', icon: <User size={18} />, path: '/users' },
    { name: 'Analytics', icon: <BarChart3 size={18} />, path: '/analytics' },
  ]

  return (
    <>
      
      <div className="md:hidden bg-blue-700 p-3 text-white flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        <Menu onClick={() => setOpen(true)} className="cursor-pointer" />
      </div>

      
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col justify-between p-5 z-50 transform transition-transform duration-300 shadow-lg md:translate-x-0 md:static ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
       
        <div>
         
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h2 className="text-xl font-semibold">Admin Panel</h2>
            <X onClick={() => setOpen(false)} className="cursor-pointer" />
          </div>

      
          <h2 className="hidden md:block text-2xl font-semibold mb-8 text-center">
            Admin Dashboard
          </h2>

  
          <nav className="flex flex-col gap-3">
            {links.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)} 
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                    isActive
                      ? 'bg-blue-500 shadow-md'
                      : 'hover:bg-blue-700 hover:shadow-sm'
                  }`
                }
              >
                {link.icon}
                <span className="text-sm font-medium">{link.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        
        <div className="pt-6 border-t border-blue-400">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition justify-center text-sm font-medium shadow-md"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar