import React from 'react'
import { useApp } from "../../hooks/useProviderApp"

// eslint-disable-next-line react/prop-types
function Layout({children}) {
  const {getData, darkMode} = useApp()
  React.useEffect(()=>{
    getData()
  },[])

  return (
    <div className={`flex flex-col items-center h-[calc(100vh-69px)] ${darkMode && 'dark bg-black text-white'} `}>
        {children}
    </div>
  )
}

export default Layout