// import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useApp } from "../../hooks/useProviderApp";

// eslint-disable-next-line react/prop-types
function Card({data}) {
  const {countItem, setCountItem, detailOpen, setDetailOpen, setProductShow} = useApp()
  const showProduct = (data) => {
    setDetailOpen(!detailOpen)
    setProductShow(data)
  }
  return (
    <div className='bg-white w-50 rounded-lg mr-7'>
        <figure className='relative w-full'>
            <div className='relative'>
              <Carousel showThumbs={false} showStatus={false}>
                {data.images.map((image, index) => (
                  <div key={index} >
                    <img src={image} alt="" className='w-full h-36 object-cover rounded-lg'/>
                  </div>
                ))}
              </Carousel>
            </div>
            <button onClick={() => setCountItem(countItem + 1)} className='absolute bg-white top-0 right-0 flex justify-center items-center m-2 p-1 rounded-full w-6 h-6 z-10'><PlusIcon className='text-black'/></button>
            <span className='absolute bg-white/50 bottom-0 left-0 rounded-lg p-0.5 m-2'>{data.category.name}</span>
        </figure>
        <p className='flex justify-between cursor-pointer' onClick={() => showProduct(data)}> 
            <span className='text-sm font-light'>{data.title}</span>
            <span className='text-lg font-medium'>${data.price}</span>
        </p>
    </div>
  )
}

export default Card