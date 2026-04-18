import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {


  const user = useSelector((store)=>store.user?.data);
  const navigate=useNavigate();

 useEffect(()=>{
if(!user){
  navigate("/")
  return
}
if(user.role !=="user"){
  navigate("/")

  
}
 },[user])

 

  return (
    <div>
      UserDashboard
    </div>
  )
}

export default UserDashboard
