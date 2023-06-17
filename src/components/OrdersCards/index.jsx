import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function OrdersCard({order}) {
  const convertDate = (date) => {
    let auxDate = new Date(date)
    return `${auxDate.getDate()}/${auxDate.getMonth()}/${auxDate.getFullYear()}`
  }
  return (
    <div className='flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4'>
        <div className='flex justify-between w-full'>
            <p className='flex flex-col'>
                <span className='font-light flex'> <CalendarDaysIcon className="h-5 w-5 mr-1"/> {convertDate(order.date)}</span>
                <span className='font-light flex'> <ShoppingBagIcon className="h-5 w-5 mr-1"/> {order.totalProducts} Articulos</span>
            </p>
            <p className='flex items-center justify-center'>
                <span className='font-medium text-lg mr-1'>{order.fullPrice}$</span>
                <Link to={'/myOrders'}> 
                    <ChevronRightIcon className="h-6 w-6 text-black"/>
                </Link>
            </p>
        </div>
    </div>
  )
}

export default OrdersCard