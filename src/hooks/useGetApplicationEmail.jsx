import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { ShowUser } from '../utils/AdminViewUserSlice'
import ViewUser from '../component/ViewUser'
import { Navigate, useNavigate } from 'react-router-dom'

const useGetApplicationEmail = () => {
const dispatch = useDispatch();
  const navigate=useNavigate();


    const getEmail = async(email)=>{

        try{

            
            const res =  await axios.get(BASE_URL_API + "/search/application/email/" + email ,{withCredentials:true})
                 console.log(res.data.data)
                 dispatch(ShowUser(res?.data?.data)),
                 <ViewUser userView={ShowUser} />
              navigate("view/user")
              

        }catch(err){
            console.log(err)
        }

    }


   

    return getEmail
   
}

export default useGetApplicationEmail
