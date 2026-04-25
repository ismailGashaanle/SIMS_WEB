import React from 'react'
import { NavLink } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import { Logout_Icon } from '../utils/constant';



const AdminSidebar = () => {

    
    const logout=useLogout();
  return (
    <div className='bg-[var(--color-background)] w-[17%] fixed   h-screen text-md shadow-lg  ring-1 ring-gray-300'>
      <div className='flex flex-col gap-2 space-x-2 space-y-2 pt-4  '>


       <NavLink className={({isActive})=>`shadow-sm p-4 rounded-lg  hover:bg-gray-300/80  hover:text-black ring-[var(--secondary-Color)]/40  transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:translate-x-1 w-[96%] ${
            isActive ? "bg-[var(--secondary-Color)] glow text-white" :"bg-[var(--color-background)] shadow-2xl text-black"
        }`} to="">Dashboard</NavLink>


        <NavLink className={({isActive})=>`shadow-sm p-4 rounded-lg  hover:bg-gray-300/80  hover:text-black ring-[var(--secondary-Color)]/40  transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:translate-x-1 w-[96%] ${
            isActive ? "bg-[var(--secondary-Color)] glow text-white" :"bg-[var(--color-background)] shadow-2xl text-black"
        }`} to="profile">Admin profile</NavLink>
        <NavLink className={({isActive})=>`shadow-sm p-4 rounded-lg  hover:bg-gray-300/80  hover:text-black ring-[var(--secondary-Color)]/40  transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:translate-x-1 w-[96%] ${
            isActive ? "bg-[var(--secondary-Color)] glow text-white" :"bg-[var(--color-background)] shadow-2xl text-black"
        }`} to="manage/users">manage users</NavLink>
       <NavLink className={({isActive})=>`shadow-sm p-4 rounded-lg  hover:bg-gray-300/80  hover:text-black ring-[var(--secondary-Color)]/40  transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:translate-x-1 w-[96%] ${
            isActive ? "bg-[var(--secondary-Color)] glow text-white" :"bg-[var(--color-background)] shadow-2xl text-black"
        }`} to="all/application">all applications</NavLink>
        <NavLink className={({isActive})=>`shadow-sm p-4 rounded-lg  hover:bg-gray-300/80  hover:text-black ring-[var(--secondary-Color)]/40  transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:translate-x-1 w-[96%] ${
            isActive ? "bg-[var(--secondary-Color)] glow text-white" :"bg-[var(--color-background)] shadow-2xl text-black"
        }`} to="search/application">search application</NavLink>
        <NavLink className={({isActive})=>`shadow-sm p-4 rounded-lg  hover:bg-gray-300/80 
         hover:text-black ring-[var(--secondary-Color)]/40  transition-all duration-300 
         ease-in-out transform hover:scale-[1.03] hover:translate-x-1 w-[96%] ${
            isActive ? "bg-[var(--secondary-Color)] glow text-white" 
            :"bg-[var(--color-background)] shadow-2xl text-black"
        }`} to="verify/document">verify document</NavLink>
        <NavLink className={({isActive})=>`shadow-sm p-4 rounded-lg  hover:bg-gray-300/80  hover:text-black ring-[var(--secondary-Color)]/40  transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:translate-x-1 w-[96%] ${
            isActive ? "bg-[var(--secondary-Color)] glow text-white" :"bg-[var(--color-background)] shadow-2xl text-black"
        }`} to="report">report</NavLink>
        
       <div onClick={logout} className='  hover:bg-red-500/40 py-4  transition-all duration-300 w-[96%] ease-in-out transform hover:scale-[1.03] hover:translate-x-1 rounded-lg hover:text-black cursor-pointer items-center p-2 flex gap-2'>
         <img  src={Logout_Icon} className='w-[20%]  transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:translate-x-1 cursor-pointer rounded-full' /> logout
      </div>
       </div>

    </div>
  )
}

export default AdminSidebar
 