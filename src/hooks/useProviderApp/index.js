import React from 'react'
import { AppContext } from '../../context/appContext'

export const useApp = () => {
    return React.useContext(AppContext)
}

function useProviderApp() {
  const [countItem, setCountItem] = React.useState(0)
  const [detailOpen, setDetailOpen] = React.useState(false)
  const [productShow, setProductShow] = React.useState({})

  return {
    countItem,
    setCountItem,
    detailOpen,
    setDetailOpen,
    productShow,
    setProductShow
  }
}

export {useProviderApp}