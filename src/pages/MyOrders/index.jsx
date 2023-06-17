import { Link } from "react-router-dom"
import OrdersCard from "../../components/OrdersCards"
import { useApp } from "../../hooks/useProviderApp"

// import React from 'react'

function MyOrders() {
  const {order} = useApp()
  return (
    <div>
      <h1 className='text-center font-bold mb-2 text-xl'>My Orders</h1>
      { order.length > 0 ?
        order.map((ord,index) => (
          <Link key={index} to={`/myOrders/${index}`}>
            <OrdersCard key={index} order={ord} />
          </Link> 
        ))
        : <h3>Start Shopping</h3>
      }
    </div>
  )
}

export default MyOrders