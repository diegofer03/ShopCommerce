import { useApp } from "../../hooks/useProviderApp"
// import React from 'react'
useApp
function MyAccount() {
  const {user} = useApp()
  return (
    <div className=' rounded-md w-52 sm:w-4/6 md:w-96 flex items-center flex-col'>
      <h1 className='font-bold text-lg mb-4'>User Details</h1>
            <p className='flex flex-col w-full my-5'>
              <span>User: {user.user}</span>
              <span>Email: {user.email}</span>
              <span>Password: *********</span>
            </p>
    </div>
  )
}

export default MyAccount