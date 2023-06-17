// import React from 'react'
import { useApp } from "../../hooks/useProviderApp"
import NavItem from "./Navitem"
import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/outline'

function Navbar() {
    const {darkMode, setDarkMode} = useApp()
    let menu1 = [
        {
            to: '/',
            text: 'Shopi',
            className: 'font-semibold text-lg'
        },
        {
            to: '/',
            text: 'All',
            className: ''
        },
        {
            to: '/clothes',
            text: 'clothes',
            className: ''
        },
        {
            to: '/electronics',
            text: 'electronics',
            className: ''
        },
        {
            to: '/furnitures',
            text: 'furnitures',
            className: ''
        },
        {
            to: '/shoes',
            text: 'shoes',
            className: ''
        },
        {
            to: '/others',
            text: 'others',
            className: ''
        },
    ]
    
    let menu2 = [
        {
            to: '/myOrders',
            text: 'My orders',
            className: ''
        },
        {
            to: '/myAccount',
            text: 'My account',
            className: ''
        },
        {
            to: '/signIn',
            text: 'Sign in',
            className: ''
        },
        {
            to: '/myOrder',
            text: '🛒',
            className: ''
        },
    ]

    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className={`flex items-center justify-between w-full py-5 px-8 text-sm ${darkMode && 'dark bg-black text-white'}`}>
            <ul className='flex gap-3 items-center'>
                { menu1.map( (link) => (
                    <NavItem key={link.text} classname={link.className} to={link.to} activeStyle={activeStyle}>{link.text} </NavItem>
                ))}
            </ul>
            <ul className='flex gap-3 items-center'>
                <li>
                    <button onClick={() => setDarkMode(!darkMode)} > {darkMode ? <SunIcon className="h-6 w-6 "/> : <MoonIcon className="h-6 w-6 "/>}</button> 
                </li>
                { menu2.map( (link) => (
                    <NavItem key={link.text} classname={link.className} to={link.to} activeStyle={activeStyle}>{link.text}</NavItem>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar