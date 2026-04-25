// import axios from 'axios'
// import React, { useState } from 'react'
// import { BASE_URL_API } from '../../utils/constant'

// const TrackStatus = () => {

//     const [mystatus,setMyStatus]=useState("pending")


//     const MytrackStatus = async()=>{
//         try{

//             const res = await axios.get(BASE_URL_API + "/track/status",{withCredentials:true});
//             console.log(res.data.data)
//             setMyStatus( res.data.message  + " : " +   res.data.data)

//         }catch(err){
//             console.log(err)
//         }
//     }
//     MytrackStatus();
//   return (
//     <div>
//       Track Status 
//       <h1>{mystatus}</h1>
//     </div>
//   )
// }

// export default TrackStatus



 
import React, { useEffect, useState } from "react";
import { BASE_URL_API } from "../../utils/constant";
import useTrackStatus from "../../hooks/useTrackStatus";

const TrackStatus = () => {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

//   const MytrackStatus = async () => {


//     try {
//       const res = await axios.get(BASE_URL_API + "/track/status", {
//         withCredentials: true,
//       });

//       setStatus(res.data.data);
//       setMessage(res.data.message);
//     } catch (err) {
//       console.log(err);
//       setStatus("error");
//     }
//   };

  // ✅ FIX: call API only once
  

  const MytrackStatus =useTrackStatus(setStatus, setMessage);
  
  
  useEffect(() => {
    MytrackStatus();
  }, [status]);

  // 🎨 dynamic color
  const getStatusColor = () => {
    if (status === "verfied") return "bg-green-500";
    if (status === "pending") return "bg-yellow-500";
    if (status === "rejected") return "bg-red-500";
    return "bg-gray-400";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--secondary-Color)]/70 p-6">
      
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Track Application Status
        </h1>

        <p className="text-gray-500 mb-6">{message}</p>

        {/* Status Badge */}
        <div
          className={`inline-block px-6 py-3 rounded-full text-white text-lg font-semibold ${getStatusColor()}`}
        >
          {status}
        </div>

        {/* Loading / Error */}
        {status === "loading" && (
          <p className="mt-4 text-gray-400 animate-pulse">
            Checking status...
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-500">
            Failed to load status
          </p>
        )}

      </div>
    </div>
  );
};

export default TrackStatus;

 



// last once

 