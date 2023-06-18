import React from 'react'
import { useApp } from '../../hooks/useProviderApp'

function SignIn() {
  const [userDate, setUser] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const {user, saveUser, differentUSer, logIn} = useApp()
  const handleSignUp = () =>{
    const userData = {
      user: userDate,
      email: email,
      password: pass
    }
    saveUser(userData)
    window.location.replace('/');
  }
  const handleDifferentUser = () => {
    differentUSer()
    window.location.reload();
  }
  const handleLogIn = () => {
    logIn()
    window.location.replace('/');
  } 
  return (
    <div className=' rounded-md w-52 sm:w-4/6 md:w-96 flex items-center flex-col'>
      {Object.keys(user).length > 0
        ? <>
            <h1 className='font-bold text-lg mb-4'>Welcome Back</h1>
            <p className='flex flex-col w-full my-5'>
              <span>User: {user.user}</span>
              <span>Email: {user.email}</span>
              <span>Password: *********</span>
            </p>
            <button className={` bg-black dark:bg-white dark:text-black } 
                text-white rounded-md my-3 py-2 w-4/5 `} onClick={() => {handleLogIn()}}> Log in </button>
            <button className={` dark:text-white hover:underline } 
            text-white rounded-md my-3 py-2 w-4/5 `} onClick={() => {handleDifferentUser()}} > Different User </button>
          </>
        : <>
            <h1 className='font-bold text-lg mb-4'>Welcome</h1>
            <input type="text" id='user' className='rounded-lg border border-black sm:w-80 w-7/12 p-3 mb-4 
            focus:outline-none dark:bg-black dark:border-white' placeholder='User' onChange={(e) => setUser(e.target.value)}/>
            <input type="text" id='email' className='rounded-lg border border-black sm:w-80 w-7/12 p-3 mb-4 
            focus:outline-none dark:bg-black dark:border-white' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" id='password' className='rounded-lg border border-black sm:w-80 w-7/12 p-3 mb-4 
            focus:outline-none dark:bg-black dark:border-white' placeholder='Password' onChange={(e) => setPass(e.target.value)}/>
      
            <button className={` bg-black dark:bg-white dark:text-black } 
              text-white rounded-md my-3 py-2 w-4/5 `} onClick={()=>{handleSignUp()}}> Sing up </button>
          </>
      }
      
    </div>
  )
}

export default SignIn