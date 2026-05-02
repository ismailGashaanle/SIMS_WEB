import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL_API, PendingICon, RejectedIcon, verifeidIcon } from '../../utils/constant'
import { useSelector } from 'react-redux'
import useTrackStatus from '../../hooks/useTrackStatus'

const TrackStatus = () => {

    const [mystatus,setMyStatus]=useState("pending")
     const [status, setStatus] = useState("loading");
      const [message, setMessage] = useState("");
    const myNewStatus = useSelector((store)=>store?.Status)

    const MytrackStatus = useTrackStatus(setStatus, setMessage);


    // const MytrackStatus = async()=>{
    //     try{

    //         const res = await axios.get(BASE_URL_API + "/track/status",{withCredentials:true});
    //         console.log(res.data.data)
    //         setMyStatus( res.data.message  + " : " +   res.data.data)

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    const getBg = () => {
  if (myNewStatus === "pending") return "bg-orange-400/70 text-white";
  if (myNewStatus === "verified") return "bg-green-600/70 text-white";
  if (myNewStatus === "rejected") return "bg-red-600/70 text-white";
  return "bg-gray-400 text-white";
};

   useEffect(()=>{
 MytrackStatus();
   },[status])
  return (
    <div className={` ${getBg()}  rounded-md  px-4 w-full h-screen flex justify-center  items-center`}>
      
   
      <div className="">
         <h1>your status {myNewStatus}</h1>
     
      {
        myNewStatus ==="pending" && (
          <div>
             <h1 className=' text-center p-3 ring-1 ring-gray-50 rounded-md text-white font-bold text-2xl'>{myNewStatus}</h1>
           <img  src={PendingICon} className='w-50 rounded-full m-4 animate-spin transition-all duration-1000' />
          </div>
        )

        
      }
      {
        myNewStatus ==="verified" && (
         <div>
           <h1 className=' text-center p-3 ring-1 ring-gray-50 rounded-md bg-green-600 text-white font-bold text-2xl'>{myNewStatus}</h1>
          <img  src={verifeidIcon} className='w-50 rounded-full m-4 animate-spin transition-all duration-1000' />
        
         </div>
         )
 
        
      }
      {
        myNewStatus ==="rejected" && (
          
          <div >
             <h1 className=' text-center p-3 ring-1 ring-gray-50 rounded-md bg-red-600 text-white font-bold text-2xl'>{myNewStatus}</h1>
            
        
          <img  src={RejectedIcon} className='w-50 rounded-full m-4 animate-spin transition-all duration-1000' />
        
       
          </div>
        )

        
      }
      </div>


    </div>
  )
}

export default TrackStatus



 
// import React, { useEffect, useState } from "react";
// import { BASE_URL_API } from "../../utils/constant";
// import useTrackStatus from "../../hooks/useTrackStatus";
// import { useSelector } from "react-redux";

// const TrackStatus = () => {
//   const [status, setStatus] = useState("loading");
//   const [message, setMessage] = useState("");
//   const mystatusNow=useSelector((store)=>store?.Status)

 

//   // 🎨 dynamic color
//   const getStatusColor = () => {
//     if (status === "verified") return "bg-green-500";
//     if (status === "pending") return "bg-yellow-500";
//     if (status === "rejected") return "bg-red-500";
//     return "bg-gray-400";
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--secondary-Color)]/70 p-6">
      
//       <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
        
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">
//           Track Application Status
//         </h1>

//         <p className="text-gray-500 mb-6">{message}</p>

//         {/* Status Badge */}
//         <div
//           className={`inline-block px-6 py-3 rounded-full text-white text-lg font-semibold ${getStatusColor()}`}
//         >
//           {/* {status} */}
//           {mystatusNow}
//         </div>

//         {/* Loading / Error */}
//         {status === "loading" && (
//           <p className="mt-4 text-gray-400 animate-pulse">
//             Checking status...
//           </p>
//         )}

//         {status === "error" && (
//           <p className="mt-4 text-red-500">
//             Failed to load status
//           </p>
//         )}

//       </div>
//     </div>
//   );
// };

// export default TrackStatus;

 



// // last once

 