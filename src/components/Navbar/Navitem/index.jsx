import { NavLink, useNavigate  } from "react-router-dom"
import { useApp } from "../../../hooks/useProviderApp"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
// import React from 'react'


// eslint-disable-next-line react/prop-types
function NavItem({ classname, to, children, activeStyle}) {
  let navigate = useNavigate();
  const {countItem} = useApp()
  function changeLocation(placeToGo){
    navigate(placeToGo, { replace: true });
    window.location.reload();
}
  return (
    <li className={(classname)}>
        {to == '/myOrder' ? 
            <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => changeLocation(to)}>
              <div className='flex items-center'>
                <ShoppingCartIcon className="h-6 w-6 text-black"/>
                {countItem}
              </div>
            </NavLink>
          : <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => changeLocation(to)}>
              {children}
            </NavLink>
        }
    </li>
  )
}

export default NavItem