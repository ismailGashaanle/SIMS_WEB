import axios from 'axios'
import React from 'react'
import { BASE_URL_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addStatus } from '../utils/StatusSlice'

const useVerifyDocumentUser = () => {
const dispatch =useDispatch();
    const verifyUser = async(id)=>{

        try{
             const res = await axios.patch(BASE_URL_API + "/Admin/verifeied/Document/id/" + id, {},{withCredentials:true})
    
        console.log(res.data)
        dispatch(addStatus(res.data.data))
        

        }catch(err){
            console.log(err)
        }
       
    }  
    
    
    return verifyUser
  
}

export default useVerifyDocumentUser
