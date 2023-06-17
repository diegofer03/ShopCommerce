import { createHashRouter} from 'react-router-dom'
import Home from '../pages/Home'
import MyAccount from '../pages/MyAccount'
import MyOrder from '../pages/MyOrder'
import MyOrders from '../pages/MyOrders'
import SignIn from '../pages/SignIn'
import NotFound from '../pages/NotFound'
createHashRouter
const AppRoutes = () => {
    let routes = createHashRouter([
        {path: '/', element: <Home/>},
        {path: '/my-account', element: <MyAccount />},
        {path: '/my-order', element: <MyOrder />},
        {path: '/my-orders', element: <MyOrders />},
        {path: '/sign-in', element: <SignIn />},
        {path: '/*', element: <NotFound />},

    ])
  return routes
}

export  {AppRoutes}