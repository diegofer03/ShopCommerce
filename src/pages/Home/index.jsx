import React from 'react'
import Card from "../../components/Card"
import { endPoints } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import ProductDetail from '../../components/ProductDetail'
import { useParams } from 'react-router-dom'

const PRODUCT_LIMIT = 15
const PRODUCT_OFFSET = 0

const Home = () => {
  const listInnerRef = React.useRef(null)
  const {category} = useParams()
  const [currPage, setCurrPage] = React.useState(PRODUCT_LIMIT)
  const [items, setItems] = React.useState(null)
  const [filterItems, setFilterItems] = React.useState([])
  const [search, setSeacth] = React.useState('')
  let response
  switch (category) {
    case 'clothes':
      // eslint-disable-next-line react-hooks/rules-of-hooks
      response = useFetch(endPoints.categories.getCategoriesProduct(currPage, PRODUCT_OFFSET, 1), [currPage])
    break;
    case 'electronics':
      // eslint-disable-next-line react-hooks/rules-of-hooks
      response = useFetch(endPoints.categories.getCategoriesProduct(currPage, PRODUCT_OFFSET, 2), [currPage])
    break;
    case 'furnitures':
      // eslint-disable-next-line react-hooks/rules-of-hooks
      response = useFetch(endPoints.categories.getCategoriesProduct(currPage, PRODUCT_OFFSET, 3), [currPage])
    break;
    case 'shoes':
      // eslint-disable-next-line react-hooks/rules-of-hooks
      response = useFetch(endPoints.categories.getCategoriesProduct(currPage, PRODUCT_OFFSET, 4), [currPage])
    break;
    case 'others':
      // eslint-disable-next-line react-hooks/rules-of-hooks
      response = useFetch(endPoints.categories.getCategoriesProduct(currPage, PRODUCT_OFFSET, 5), [currPage])
    break;
    default:
      // eslint-disable-next-line react-hooks/rules-of-hooks
      response = useFetch(endPoints.products.getProducts(currPage, PRODUCT_OFFSET), [currPage])
    break;
  }
  React.useEffect(() =>{ 
    // window.location.reload();
  }, [])
  React.useEffect(() =>{ 
    setItems(response) 
  }, [response, category])
  React.useEffect(() => {
    setFilterItems(items?.filter( item => item.title.toLowerCase().includes(search.toLowerCase())))
  },[search, items])
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (scrollTop + clientHeight >= scrollHeight) {
        setCurrPage(currPage + PRODUCT_LIMIT)
      }
    }
  }
  return (
    <>
      <h1 className='text-center font-bold text-xl mb-2'>Lastest Products</h1>
      <input type="text" className='rounded-lg border border-black w-80 p-3 mb-4 focus:outline-none dark:bg-black dark:border-white' placeholder='Search product' onChange={(e) => setSeacth(e.target.value)}/>
      <div className='h-[81%] overflow-x-auto max-w-screen-lg ' ref={listInnerRef} onScroll={onScroll}>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg overflow-hidden' >
          { filterItems?.length > 0 
            ? filterItems?.map(item=> (
              <Card key={item.id} data={item} />
            ))
            : <h1 className='col-start-2 col-end-4 text-lg' >Products not found</h1>
          }
        </div>
      </div>
      <ProductDetail />
    </>
  )
}

export default Home