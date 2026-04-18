import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Login from './login'
import axios from 'axios'
import { BASE_URL_API } from '../utils/constant'
import { addUser } from '../utils/UserSlice'
import Profile from './profile'
import EditProfile from './EditProfile'

const AdminDashboard = () => {
  const navigate=useNavigate();
     const user = useSelector((store)=>store.user?.data);


   useEffect(()=>{
     if(user===null){
        navigate("/")
        return
    }
        
   },[user])
    
  return !user?<Login/>:(
    <div>
      AdminDashboard
      <div className='w-full'>
        <Profile/>
       
      </div>
    </div>
  )
}

export default AdminDashboard

 