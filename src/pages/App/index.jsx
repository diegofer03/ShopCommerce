import { useRoutes, BrowserRouter, createHashRouter, RouterProvider, HashRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import { AppContextProvider } from '../../context/appContext'
import CheckoutMenu from '../../components/CheckoutMenu'
import Loader from '../../components/Loader'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/myAccount', element: <MyAccount /> },
    { path: '/myOrder', element: <MyOrder /> },
    { path: '/myOrder/last', element: <MyOrder /> },
    { path: '/myOrders/:id', element: <MyOrder /> },
    { path: '/myOrders', element: <MyOrders /> },
    { path: '/signIn', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <AppContextProvider>
      <HashRouter>
        <Loader />
        <Navbar />
        <Layout>
          <AppRoutes/>
          <CheckoutMenu />
        </Layout>
      </HashRouter>
    </AppContextProvider>
  )
}

export default App
