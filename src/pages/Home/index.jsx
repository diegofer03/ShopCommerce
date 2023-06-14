import React from 'react'
import Card from "../../components/Card"
import { endPoints } from '../../components/services/api'
import { useFetch } from '../../hooks/useFetch'
import ProductDetail from '../../components/ProductDetail'

const PRODUCT_LIMIT = 15
const PRODUCT_OFFSET = 0

const Home = () => {
  const listInnerRef = React.useRef(null)
  const [currPage, setCurrPage] = React.useState(PRODUCT_LIMIT)
  const [items, setItems] = React.useState(null)
  let response = useFetch(endPoints.products.getProducts(currPage, PRODUCT_OFFSET), [currPage])

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (scrollTop + clientHeight >= scrollHeight) {
        setCurrPage(currPage + PRODUCT_LIMIT)
      }
    }
  }


  React.useEffect(() =>{ 
    setItems(response) 
  }, [response])

  return (
    <>
      Home
      <div className='overflow-x-auto max-w-screen-lg ' ref={listInnerRef} onScroll={onScroll}>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg overflow-hidden' >
          {
            items?.map(item=> (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </div>
      <ProductDetail />
    </>
  )
}

export default Home