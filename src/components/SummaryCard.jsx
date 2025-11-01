import React, { useEffect, useState } from 'react'

const SummaryCard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setData(users))
  }, [])

  const totalUsers = data.length
  const activeUser = Math.floor(totalUsers * 0.8)
  const totalRevenue = (totalUsers * 120).toLocaleString()
  const totalOrders = totalUsers * 5

  const cards = [
    { title: "Total Users", value: totalUsers, color: "bg-blue-100", accent: "text-blue-600" },
    { title: "Active Users", value: activeUser, color: "bg-green-100", accent: "text-green-600" },
    { title: "Total Orders", value: totalOrders, color: "bg-yellow-100", accent: "text-yellow-600" },
    { title: "Revenue", value: `$${totalRevenue}`, color: "bg-purple-100", accent: "text-purple-600" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 p-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 ${card.color}`}
        >
          <h3 className="text-gray-500 font-medium text-sm sm:text-base">
            {card.title}
          </h3>
          <p className={`text-2xl sm:text-3xl font-bold mt-2 ${card.accent}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SummaryCard