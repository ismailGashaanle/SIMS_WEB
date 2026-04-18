import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL_API } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/UserSlice'
  import EditProfile from './EditProfile'

const Profile = () => {

  const user=useSelector((store)=>store?.user?.data)
  const dispatch=useDispatch();

if (!user) return <p>Loading...</p>;
  const fetchProfileUser = async()=>{

    try{
      // if(user) return
      const res = await axios.get(BASE_URL_API + "/profile/view",{withCredentials:true});
      console.log(res.data.data)

   dispatch(addUser(res.data?.data))


    }catch(err){
  
    }

  }



    useEffect(()=>{
    fetchProfileUser();
  },[])



  return (
   <div className='flex gap-3 items-center w-[80%] mx-auto px-6'>
    <div className='flex gap-2 justify-between w-full'>
        <div className='w-full'>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.photoImage}</p>
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <p>{user.dateOfBirth}</p>
      <p>{user.gender}</p>
      <p>{user.role}</p>
 
     </div>

     <div className='w-full'>
      <EditProfile user={user}/>
     </div>
    </div>
   </div>
  
  )
}

export default Profile
