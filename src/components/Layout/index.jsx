import React from 'react'
import { useApp } from "../../hooks/useProviderApp"

// eslint-disable-next-line react/prop-types
function Layout({children}) {
  const {getData} = useApp()
  const styles = {
    container: {
      height: '85vh'
    }
  }

  React.useEffect(()=>{
    getData()
  },[])

  return (
    <div className="flex flex-col items-center" style={styles.container}>
        {children}
    </div>
  )
}

export default Layout