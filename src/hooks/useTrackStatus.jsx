import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL_API } from '../utils/constant';

const useTrackStatus = (setStatus, setMessage) => {
    

  const MytrackStatus = async () => {
    try {
      const res = await axios.get(BASE_URL_API + "/track/status", {
        withCredentials: true,
      });

      setStatus(res.data.data);
      setMessage(res.data.message);
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };


  return MytrackStatus
}

export default useTrackStatus

 