// import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Carousel } from 'react-responsive-carousel';
import { useApp } from '../../hooks/useProviderApp'

function ProductDetail() {
  const {detailOpen, setDetailOpen, productShow, setProductShow} = useApp()

  return (
    <aside className={`${detailOpen ? 'flex' : 'hidden'}  flex-col fixed right-0 border bg-white 
    border-black rounded-lg w-[360px] h-[calc(100vh-68px)] px-6 z-20 dark:bg-black dark:border-white`}>
        <div className='flex justify-between items-center py-6'>
            <h2 className='font-medium text-xl'>Product Detail</h2>
            <button onClick={() => {setDetailOpen(false); setProductShow({})}}><XMarkIcon className="h-6 w-6"/></button>
        </div>
        <figure className=''>
            <Carousel showThumbs={false} showStatus={false}>
                {productShow.images?.map((image, index) => (
                    <div key={index} >
                    <img src={image} alt="" className='w-full h-full rounded-lg'/>
                    </div>
                ))}
            </Carousel>
        </figure>
        <p className='flex flex-col '>
            <span className='font-medium text-2xl mb-2'>${productShow.price}</span>
            <span className='font-medium text-md'>{productShow.title}</span>
            <span className='font-light text-sm'>{productShow.description}</span>
        </p>
        <p className='flex justify-between '>
            <span className='font-medium text-md mb-2'>Category:</span>
            <span className='font-medium text-sm'>{productShow.category?.name}</span>
        </p>
    </aside>
  )
}

export default ProductDetail