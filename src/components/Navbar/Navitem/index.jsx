import { NavLink } from "react-router-dom"
import { useApp } from "../../../hooks/useProviderApp"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
// import React from 'react'


// eslint-disable-next-line react/prop-types
function NavItem({ classname, to, children, activeStyle}) {
  const {countItem} = useApp()
  return (
    <li className={(classname)}>
        {to == '/myOrder' ? 
            <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <div className='flex items-center'>
                <ShoppingCartIcon className="h-6 w-6 text-black"/>
                {countItem}
              </div>
            </NavLink>
          : <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {children}
            </NavLink>
        }
    </li>
  )
}

export default NavItem