import React from 'react'
import { useApp } from "../../hooks/useProviderApp"
import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon} from '@heroicons/react/24/solid'
import { UserCircleIcon as UserSolid} from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'All', href: '/', current: false },
  { name: 'Clothes', href: '/clothes', current: false },
  { name: 'Electronics', href: '/electronics', current: false },
  { name: 'Furnitures', href: '/furnitures', current: false },
  { name: 'Shoes', href: '/shoes', current: false },
  { name: 'Others', href: '/others', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const {darkMode, setDarkMode, countItem, setCheckoutMenu, checkoutMenu} = useApp()
  const category = window.location.pathname
  React.useEffect(()=>{
    navigation.find(nav => {
        if(nav.href === category) nav.current = true
    })
  },[])
  React
  return (
    <Disclosure as="nav" className={`bg-white  w-full ${darkMode && 'dark bg-black text-white'}`}>
      {({ open }) => (
        <>
          <div className={`px-2 sm:px-6 lg:px-8 ${darkMode && 'dark bg-black text-white'}`}>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center"  onClick={()=>window.location.replace('/')}>
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : ' hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className='flex' onClick={() => setCheckoutMenu(!checkoutMenu)} > <ShoppingCartIcon className="h-6 w-6 "/> {countItem} </button> 
                {/* Profile dropdown */}
                <Menu as="div" className={`relative ml-3 ${darkMode && 'dark bg-black text-white'}`}>
                  <div>
                    <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                      <span className="sr-only">Open user menu</span>
                      {darkMode 
                        ? <UserSolid className="h-6 w-6 "/>
                        : <UserCircleIcon className="h-6 w-6 "/>
                      }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={`absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1
                     ring-black ring-opacity-5 focus:outline-none dark:bg-black dark:border dark:border-white`}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/myOrders"
                            className={classNames(active ? '' : '', 'block px-4 py-2 text-sm')}
                          >
                            Your Orders
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        <div className="px-4 py-2 text-sm">
                            <button onClick={() => setDarkMode(!darkMode)} > {darkMode ? <SunIcon className="h-6 w-6 "/> : <MoonIcon className="h-6 w-6 "/>}</button> 
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? '' : '', 'block px-4 py-2 text-sm ')}
                          >
                            Sign In
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className={`sm:hidden `}>
            <div className={`space-y-1 px-2 pb-3 pt-2 ${darkMode && 'dark bg-black text-white border border-white rounded-sm'}`}>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar