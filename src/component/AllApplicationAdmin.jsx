//  import React, { useEffect } from 'react'
//  import { BASE_URL_API } from '../utils/constant'
//  import axios from 'axios'
//  import { useDispatch, useSelector } from 'react-redux'
//  import { AddApplications } from '../utils/ApplicationSlice'
//  import { FaEye, FaRegTrashAlt } from 'react-icons/fa'
//  import useGetApplicationEmail from './../hooks/useGetApplicationEmail';
// import useAdminApplicationDelete from './../hooks/useAdminApplicationDelete';

 
 
 

// const AllApplicationAdmin = () => {

//     const dispacth =useDispatch();
//     const adminApplication = useSelector((store)=>store?.adminApplication?.applicationData)

//     const    deletedApplication = useAdminApplicationDelete();
   
   
 
// const getEmail = useGetApplicationEmail(); 
     
//     const applications = async()=>{
// //  if(adminApplication) 
       
//         try{

//             const res =  await  axios.get(BASE_URL_API + "/All/Application/?page=1&limit=20",{withCredentials:true});
//                 console.log(res.data.data)
//                 dispacth(AddApplications(res.data.data))

//         }catch(err){
//             console.log(err)
//         }
//     }




//     // useEffect(()=>{
       
//     //  applications()
     
//     // },[])


//     useEffect(() => {
//   applications();

//   const interval = setInterval(() => {
//     applications(); // 🔥 auto refresh
//   }, 3000); // every 3 seconds

//   return () => clearInterval(interval);
// }, []);

// //   return (
// //     <div>
// //         <div className='bg-[var(--secondary-Color)] text-white p-2 py-6 rounded-lg'>Application Manage</div>
     
// //      <table className='w-full'>
// //         <thead>
// //             <tr className='text-lg'>
// //                 <th>ID</th>
// //                 <th>fullName</th>
// //                  <th>ApplicationType</th>
// //                 <th>email</th>
// //                 <th>phone</th>
// //                 <th>actions</th>
               
// //             </tr>

// //         </thead>

// //         <tbody className=''>

// //             {
// //                 Array.isArray(adminApplication) && adminApplication.map((app)=>(
// //                     <tr key={app._id} className='text-center'>
// //                         <td>{app._id.slice(4,6)}</td>
// //                         <td>{app.fullName}</td>
// //                         <td>{app.ApplicationType}</td>
// //                         <td>{app.email}</td>
// //                         <td>{app.phone}</td>
// //                         <td className='flex gap-2 items-center justify-center'>
// //                             <FaEye  className="text-xl text-gray-500 cursor-pointer 
// //                       hover:text-green-600 hover:scale-110 transition duration-200" />
// //                             <FaRegTrashAlt  className="text-xl text-gray-500 cursor-pointer 
// //                       hover:text-red-600 hover:scale-110 transition duration-200" />
// //                         </td>
// //                     </tr>
// //                 ))
// //             }

// //         </tbody>
// //      </table>

      
// //     </div>
// //   )

// return (
//   <div className="min-h-screen bg-gray-50 p-6">

//     <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">

//       {/* Header */}
//       <div className="flex justify-between items-center px-6 py-4 bg-[var(--secondary-Color)] text-white">
//         <h2 className="text-xl font-semibold">Application Management</h2>
//         <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
//           {adminApplication?.length || 0} Applications
//         </span>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">

//           {/* Head */}
//           <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
//             <tr >
//               <th className="p-4">ID</th>
//               <th className="p-4">Full Name</th>
//               <th className="p-4">Type</th>
//               <th className="p-4">Email</th>
//               <th className="p-4">Phone</th>
//               <th className="p-4">status</th>
//               <th className="p-4 text-center">Actions</th>
//             </tr>
//           </thead>

//           {/* Body */}
//           <tbody>
//             {Array.isArray(adminApplication) &&
//               adminApplication.map((app) => (
//                 <tr
//                   key={app._id}
//                   className="border-b hover:bg-gray-50 transition duration-200 hover:shadow-2xl cursor-pointer"
//                 >
//                   <td className="p-4 text-sm text-gray-500">
//                     {app._id.slice(0, 6)}
//                   </td>

//                   <td className="p-4 font-medium">{app.fullName}</td>

//                   <td className="p-4">
//                     <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
//                       {app.ApplicationType}
//                     </span>
//                   </td>

//                   <td className="p-4 text-gray-600">{app.email}</td>

//                   <td className="p-4 text-gray-600">{app.phone}</td>
//                 <td className="p-4">
//   <span
//     className={`text-sm w-10 p-2 rounded-lg text-white ${
//       app.status === "verfied" ? "bg-green-600" : "bg-gray-500"
//     }`}
//   >
//     {app.status === "verfied" ? "verified" :  app.status}
    
//   </span>
// </td>

//                   {/* Actions */}
//                   <td className="p-4">
//                     <div className="flex justify-center gap-4">

//                       <FaEye
//                         className="text-xl hover:text-2xl text-gray-500 cursor-pointer 
//                         hover:text-green-600 hover:scale-110 transition duration-200"

//                         onClick={()=>getEmail(app.email)}
//                       />

//                       <FaRegTrashAlt
//                         className="text-xl hover:text-2xl text-gray-500 cursor-pointer 
//                         hover:text-red-600 hover:scale-110 transition duration-200"
//                         // onClick={()=>deletedApplication(app._id)}
//                         onClick={async () => {
//                         await deletedApplication(app._id);
//                         applications(); // 🔥 refresh data without page reload
//                         }}
//                       />

//                     </div>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>

//         </table>
//       </div>

//       {/* Empty State */}
//       {!adminApplication?.length && (
//         <div className="text-center py-10 text-gray-500">
//           No applications found
//         </div>
//       )}

//     </div>
//   </div>
// )
// }

// export default AllApplicationAdmin


import React, { useEffect, useState } from 'react'
import { BASE_URL_API } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { AddApplications } from '../utils/ApplicationSlice'
import { FaEye, FaRegTrashAlt } from 'react-icons/fa'
import useGetApplicationEmail from './../hooks/useGetApplicationEmail';
import useAdminApplicationDelete from './../hooks/useAdminApplicationDelete';
import { io } from "socket.io-client";
import useTrackStatus from './../hooks/useTrackStatus';

const AllApplicationAdmin = () => {

  const dispacth = useDispatch();
  const adminApplication = useSelector((store) => store?.adminApplication?.applicationData);
   const [status, setStatus] = useState("loading");
    const [message, setMessage] = useState("");
  

  const MytrackStatus = useTrackStatus(setStatus,setMessage)

  const deletedApplication = useAdminApplicationDelete();
  const getEmail = useGetApplicationEmail();

  const applications = async () => {
    try {
      const res = await axios.get(
        BASE_URL_API + "/All/Application/?page=1&limit=20",
        { withCredentials: true }
      );

      console.log(res.data.data);
      dispacth(AddApplications(res.data.data));

    } catch (err) {
      console.log(err);
    }
  };

  // ✅ FIX: remove interval, use socket for real-time
  useEffect(() => {
    applications(); // first load
     MytrackStatus();

    const socket = io(BASE_URL_API);

    socket.on("application-status-changed", () => {
      applications(); // 🔥 auto refresh when status updated
       MytrackStatus();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-[var(--secondary-Color)] text-white">
          <h2 className="text-xl font-semibold">Application Management</h2>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
            {adminApplication?.length || 0} Applications
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">

            <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Full Name</th>
                <th className="p-4">Type</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {Array.isArray(adminApplication) &&
                adminApplication.map((app) => (
                  <tr
                    key={app._id}
                    className="border-b hover:bg-gray-50 transition duration-200 hover:shadow-2xl cursor-pointer"
                  >
                    <td className="p-4 text-sm text-gray-500">
                      {app._id.slice(0, 6)}
                    </td>

                    <td className="p-4 font-medium">{app.fullName}</td>

                    <td className="p-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                        {app.ApplicationType}
                      </span>
                    </td>

                    <td className="p-4 text-gray-600">{app.email}</td>

                    <td className="p-4 text-gray-600">{app.phone}</td>

                    <td className="p-4">
                      <span
                        className={`text-sm w-10 p-2 rounded-lg text-white ${
                          status === "verfied"
                            ? "bg-green-600"
                            : status === "pending"
                            ? "bg-yellow-500"
                            :status === "rejected"
                            ? "bg-red-500"
                            : "bg-gray-500"
                        }`}
                      >
                        {status === "verfied" ? "verified" : status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex justify-center gap-4">

                        <FaEye
                          className="text-xl hover:text-2xl text-gray-500 cursor-pointer 
                          hover:text-green-600 hover:scale-110 transition duration-200"
                          onClick={() => getEmail(app.email)}
                        />

                        <FaRegTrashAlt
                          className="text-xl hover:text-2xl text-gray-500 cursor-pointer 
                          hover:text-red-600 hover:scale-110 transition duration-200"
                          onClick={async () => {
                            await deletedApplication(app._id);
                            applications(); // refresh after delete
                          }}
                        />

                      </div>
                    </td>

                  </tr>
                ))}
            </tbody>

          </table>
        </div>

        {/* Empty */}
        {!adminApplication?.length && (
          <div className="text-center py-10 text-gray-500">
            No applications found
          </div>
        )}

      </div>
    </div>
  );
};

export default AllApplicationAdmin;

 