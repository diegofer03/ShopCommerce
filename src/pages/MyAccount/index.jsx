import { useApp } from "../../hooks/useProviderApp"
import React from 'react'
useApp
function MyAccount() {
  const [edit, setEdit] = React.useState(false)
  const {user, editUser} = useApp()
  const [field, setField] = React.useState(false)
  const handleSaveUSer = () => {
    if (document.getElementById('user').value != '' && document.getElementById('email').value != '' && document.getElementById('password').value != ''){
      const userData = {
        user: document.getElementById('user').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
      editUser(userData)
      window.location.reload();
    }
    else setField (true)
  }
  return (
    <div className=' rounded-md w-52 sm:w-4/6 md:w-96 flex items-center flex-col'>
      <h1 className='font-bold text-lg mb-4'>User Details</h1>
      <p className='flex flex-col w-4/5'>
        <span className=" p-2"> <span className="font-bold text-lg mr-2">User:</span>
          {edit
            ? <input type="text" id='user' className='rounded-lg border border-black sm:w-full w-7/12 p-3 
              focus:outline-none dark:bg-black dark:border-white' placeholder='User' defaultValue={user.user} />
            : <span>{user.user}</span>  
          }
        </span>
        <span className=" p-2"><span className="font-bold text-lg mr-2">Email:</span>
        {edit
            ? <input type="text" id='email' className='rounded-lg border border-black sm:w-full w-7/12 p-3 
              focus:outline-none dark:bg-black dark:border-white' placeholder='Email' defaultValue={user.email} />
            : <span>{user.email}</span>  
          }
        </span>
        <span className=" p-2"><span className="font-bold text-lg mr-2">Password:</span> 
        {edit
            ? <input type="password" id='password' className='rounded-lg border border-black sm:w-full w-7/12 p-3 
              focus:outline-none dark:bg-black dark:border-white' placeholder='Password' defaultValue={user.password} />
            : <span>*********</span>  
          }
        </span>
      </p>
      {edit 
        ? <button className={` bg-black dark:bg-white dark:text-black } 
          text-white rounded-md my-3 py-2 w-4/6 `} onClick={() => {handleSaveUSer()}}> Save User</button>
        : <button className={` bg-black dark:bg-white dark:text-black } 
           text-white rounded-md my-3 py-2 w-4/6 `} onClick={() => {setEdit(true)}}> Edit User</button> 
      }
      {field && <span className="text-red-600 font-semibold">Todos los campos son requeridos</span>}
    </div>
  )
}

export default MyAccount