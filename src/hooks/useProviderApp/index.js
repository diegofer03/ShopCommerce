import React from 'react'
import { AppContext } from '../../context/appContext'

export const useApp = () => {
    return React.useContext(AppContext)
}

function useProviderApp() {
  const [countItem, setCountItem] = React.useState(0)
  const [detailOpen, setDetailOpen] = React.useState(false)
  const [productShow, setProductShow] = React.useState({})
  const [cardProducts, setCardProducts] = React.useState([])
  const [checkoutMenu, setCheckoutMenu] = React.useState(false)
  const [quantityChange, setQuantityChange] = React.useState(false)
  const [order, setOrder] = React.useState([])
  const [verifyState, setVerifyState] = React.useState(false)

  React.useEffect(() => {
    let quantity = 0
    for(let i = 0; i < cardProducts.length; i++){
      quantity += cardProducts[i].quantity
    }
    setCountItem(quantity)
  }, [quantityChange, cardProducts])

  const saveCards = () =>{
    localStorage.setItem('card', JSON.stringify(cardProducts))
  }

  const saveOrders = () => {
    localStorage.setItem('orders', JSON.stringify(order))
  }

  const deleteCards = () => {
    localStorage.removeItem('card')
  }

  const getData = () => {
    const auxCard = JSON.parse(localStorage.getItem('card'))
    const auxOrder = JSON.parse(localStorage.getItem('orders'))

    if(auxCard === null || auxCard ===undefined) setCardProducts([])
    else setCardProducts(auxCard)

    if(auxOrder === null || auxOrder ===undefined) setOrder([])
    else setOrder(auxOrder)
    setVerifyState(true)
  }
  return {
    countItem,
    setCountItem,
    detailOpen,
    setDetailOpen,
    productShow,
    setProductShow,
    cardProducts, 
    setCardProducts,
    checkoutMenu, 
    setCheckoutMenu,
    quantityChange, 
    setQuantityChange,
    order, 
    setOrder,
    saveCards,
    saveOrders,
    getData,
    deleteCards,
    verifyState
  }
}

export {useProviderApp}