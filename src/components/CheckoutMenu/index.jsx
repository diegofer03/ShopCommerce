import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useApp } from '../../hooks/useProviderApp'
import { CheckoutCard } from './CheckoutCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';


function CheckoutMenu() {
  const { cardProducts, setCardProducts, checkoutMenu, countItem, setCheckoutMenu, quantityChange, order, setOrder, saveCards, saveOrders, deleteCards, verifyState, login} = useApp()
  const [total, setTotal] = React.useState(totalPrice(cardProducts))
  React.useEffect(() => {
    setTotal(totalPrice(cardProducts))
    if(verifyState){
      saveCards()
    }
  }, [cardProducts, quantityChange])
  const handleCheckout = () => {
    if(login){
      let date = new Date().toJSON()
      const orderToAdd = {
        date: date,
        products: cardProducts,
        totalProducts: countItem,
        fullPrice: totalPrice(cardProducts)
      }
      setOrder([...order, orderToAdd])
      setCardProducts([])
      setCheckoutMenu(false)
      refreshState()
    }else {
      window.location.replace('/signIn')
    }
  }
  const refreshState = ()=>{
    saveOrders()
    deleteCards()
  }
  React.useEffect(()=>{
    if(verifyState){
      saveOrders()
    }
  },[order])
  return (
    <aside className={`${checkoutMenu ? 'flex' : 'hidden'} flex-col justify-between fixed right-0 border
     bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] p-6 z-20
     dark:bg-black dark:border-white`}>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>Checkout Card</h2>
            <button onClick={() => {setCheckoutMenu(false)}}><XMarkIcon className="h-6 w-6"/></button>
        </div>
        <div className='overflow-x-auto my-2 flex-auto'>
            {cardProducts.map((product,index)=>(
                <CheckoutCard key={index} product={product} edit={true}/>
            ))
            }
        </div>
        <div>
            <p className='flex justify-between items-center border-black border-2 px-3 rounded-md dark:border-white'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-lg'>{total}$</span>
            </p>
        </div>
        <Link to={'/myOrder/last'}>
          <button disabled={cardProducts.length < 1} className={`${cardProducts.length < 1 ? 'bg-stone-500' : 'bg-black dark:bg-white dark:text-black' } 
          text-white rounded-md my-3 py-2 w-full `} onClick={() => handleCheckout()}> Checkout </button>
        </Link>
    </aside>
  )
}

export default CheckoutMenu