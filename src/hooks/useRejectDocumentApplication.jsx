import axios from 'axios'
import React from 'react'
import { BASE_URL_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addStatus } from '../utils/StatusSlice'

const useRejectDocumentApplication = () => {
    const dispatch =useDispatch();


    const RejectedUserDoc = async(id)=>{

        try{

            const res = await axios.patch(BASE_URL_API + "/Admin/rejected/Document/id/" + id ,{},{withCredentials:true})

            console.log(res.data)
            dispatch(addStatus(res.data.data))
            

        }catch(err){
            console.log(err)
        }
    }




    return RejectedUserDoc


  
}

export default useRejectDocumentApplication
