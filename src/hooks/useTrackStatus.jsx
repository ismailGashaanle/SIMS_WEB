import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL_API } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addStatus } from '../utils/StatusSlice';

const useTrackStatus = (setStatus, setMessage) => {
    const dispatch =useDispatch()

  const MytrackStatus = async () => {
    try {
      const res = await axios.get(BASE_URL_API + "/track/status", {
        withCredentials: true,
      });

      setStatus(res.data.data);
      setMessage(res.data.message);
      dispatch(addStatus(res?.data.data))
       
      
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };


  return MytrackStatus
}

export default useTrackStatus

 