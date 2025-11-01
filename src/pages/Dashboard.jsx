import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import SummaryCard from '../components/SummaryCard'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4 text-gray-700">
            Dashboard Overview </h1>
          <SummaryCard />
        </main>
      </div>
    </div>
  )
}

export default Dashboard