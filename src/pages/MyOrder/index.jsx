import { Link, useParams } from "react-router-dom"
import { CheckoutCard } from "../../components/CheckoutMenu/CheckoutCard"
import { useApp } from "../../hooks/useProviderApp"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
// import React from 'react'

function MyOrder() {
  const {order} = useApp()
  const {id} = useParams()
  let index = id
  if(!index) index = order?.length - 1
  return (
    <>
    <div className='flex items-center justify-center w-80 relative mb-4'>
      <Link to={'/myOrders'} className='absolute left-0'> 
        <ChevronLeftIcon className="h-6 w-6 text-black"/>
      </Link>
      <h1 className='text-center font-bold mb-2 text-xl'>My Order</h1>
    </div>
    <div className='flex flex-col w-80'>

      { order?.length > 0 ?
        order[index].products?.map((product,index) => (
          <CheckoutCard key={index} product={product} />
        ))
        : <h3>Add items to your cart</h3>
      }
    </div>
    </>
  )
}

export default MyOrder