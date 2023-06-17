import React from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useApp } from '../../../hooks/useProviderApp'

function CheckoutCard({product , edit}) {
  const { cardProducts, setCardProducts, quantityChange } = useApp()
  const changeQuantity = () => {
    const quan = parseInt(document.getElementById(product.id).value)
    const auxCardProducts = [...cardProducts]
    for(let i = 0; i < auxCardProducts.length; i++){
        if(auxCardProducts[i].id === product.id){
            auxCardProducts[i].quantity = quan
            setCardProducts(auxCardProducts)
        }
    }
  }
  React.useEffect(()=>{
    document.getElementById(product.id).value = product.quantity
  }, [cardProducts, quantityChange])
  const handleDelete = (id) => {
    const filteredProducts = cardProducts.filter(product => product.id != id)
    setCardProducts(filteredProducts)
  }
  return (
    <div className='flex justify-between items-center pb-2'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={product?.images[0]} alt="" />
            </figure>
            <div className='flex flex-col'>
                <p className='text-sm font-light'>{product.title}</p>
                <p className='text-sm font-light'>Cantidad:</p>
                <div className='flex items-center w-5'>
                    <input disabled={!edit} className='w-8 mr-2 border-black border-2 rounded-md dark:bg-black dark:border-white' id={product?.id} type='text' max={'20'} defaultValue={product.quantity}/>
                    {
                      edit && <button className='text-sm bg-sky-600 rounded-md px-1' onClick={() => changeQuantity()}>Update</button>
                    }
                </div>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-md font-medium'>{product.price * product.quantity}$</p>
            {
              edit && <TrashIcon className="h-6 w-6 " onClick={() => handleDelete(product.id)}/>
            }
        </div>
    </div>
  )
}

export {CheckoutCard}