// import React from 'react'
import NavItem from "./Navitem"

function Navbar() {
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
        <nav className="flex items-center justify-between w-full py-5 px-8 text-sm">
            <ul className='flex gap-3 items-center'>
                { menu1.map( (link) => (
                    <NavItem key={link.text} classname={link.className} to={link.to} activeStyle={activeStyle}>{link.text} </NavItem>
                ))}
            </ul>
            <ul className='flex gap-3 items-center'>
                { menu2.map( (link) => (
                    <NavItem key={link.text} classname={link.className} to={link.to} activeStyle={activeStyle}>{link.text}</NavItem>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar