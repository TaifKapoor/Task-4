import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DataTable from '../components/DataTable'

const Users = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Navbar/>
        <main className="p-6 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Users Management
          </h1>
          <DataTable/>
        </main>
      </div>
    </div>
  )
}

export default Users
