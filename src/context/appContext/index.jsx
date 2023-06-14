import React from 'react'
import { useProviderApp } from '../../hooks/useProviderApp'

const AppContext = React.createContext(null)

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({children}) => {
    const app = useProviderApp()
    
    return (
        <AppContext.Provider value={app}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}