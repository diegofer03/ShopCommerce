import { NavLink, useNavigate  } from "react-router-dom"
import { useApp } from "../../../hooks/useProviderApp"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
// import React from 'react'


// eslint-disable-next-line react/prop-types
function NavItem({ classname, to, children, activeStyle}) {
  let navigate = useNavigate();
  const {countItem, setCheckoutMenu, checkoutMenu} = useApp()
  function changeLocation(placeToGo){
    navigate(placeToGo, { replace: true });
    window.location.reload();
}
  return (
    <li className={(classname)}>
        {to == '/myOrder' ? 
            <div className='flex items-center' onClick={() => setCheckoutMenu(!checkoutMenu)}>
              <ShoppingCartIcon className="h-6 w-6 "/>
              {countItem}
            </div>
          : <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => changeLocation(to)}>
              {children}
            </NavLink>
        }
    </li>
  )
}

export default NavItem