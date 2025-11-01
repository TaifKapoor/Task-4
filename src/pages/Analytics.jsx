import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

const Analytics = () => {
  const [data, setData] = useState([])
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => {
        setData(products)

        const grouped = {}
        products.forEach((p) => {
          grouped[p.category] = (grouped[p.category] || 0) + 1
        })

        const formatted = Object.keys(grouped).map((key) => ({
          name: key,
          value: grouped[key],
        }))

        setCategoryData(formatted)
      })
  }, [])

  const monthlyRevenu = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 },
  ]

  const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
  
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-4 sm:p-6">
          <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center md:text-left">
            Analytics Dashboard
          </h1>

       
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-8 w-full overflow-x-auto">
            <h2 className="text-lg font-medium text-gray-700 mb-4 text-center sm:text-left">
              Monthly Revenue
            </h2>
            <div className="w-full" style={{ minWidth: '280px', height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenu}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow w-full text-gray-700">
            <h2 className="text-lg font-medium text-gray-700 mb-4 text-center sm:text-left">
              Products by Category
            </h2>
            <div className="w-full flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Analytics