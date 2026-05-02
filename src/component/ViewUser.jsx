// import React, { useEffect } from 'react'
// import { ShowUser } from '../utils/AdminViewUserSlice'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const ViewUser = () => {
//    const navigate=useNavigate();
    
//     let  ShowUser = useSelector((store)=>store?.ShowUser)
 
//    useEffect(()=>{
//        if(!ShowUser){
//      navigate("/adminDashbaord/all/application")
//    }
//    })
 

//   return (
//     <div>
//       <h1>{ShowUser?.fullName}</h1>
//     </div>
//   )
// }

// export default ViewUser


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useVerifyDocumentUser from "../hooks/useVerifyDocumentUser";
import useRejectDocumentApplication from "../hooks/useRejectDocumentApplication";
import { BASE_URL_API } from "../utils/constant";
import axios from "axios";

const ViewUser = () => {
  const navigate = useNavigate();
  const Status= useSelector((store)=>store?.Status)

  const verifyUser = useVerifyDocumentUser();
  const RejectedUserDoc = useRejectDocumentApplication();
  const dispatcH =useDispatch()

  const ShowUser = useSelector((store) => store.ShowUser);

  const reloadUser = async () => {
  try {
    const res = await axios.get(
      BASE_URL_API + "/search/application/email/" + ShowUser.email,
      { withCredentials: true }
    );

    // 🔥 update redux again
    dispatcH(setShowUser(res.data.data));
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    if (!ShowUser) {
      navigate("/adminDashbaord/all/application");
    }
  }, [ShowUser, navigate]);

  if (!ShowUser) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[var(--secondary-Color)] text-white p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Application Details</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
          >
            Back
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid md:grid-cols-2 gap-6">

          {/* Personal Info */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg text-gray-700 border-b pb-2">
              Personal Info
            </h2>

            <p><span className="font-semibold">Full Name:</span> {ShowUser.fullName}</p>
            <p><span className="font-semibold">Email:</span> {ShowUser.email}</p>
            <p><span className="font-semibold">Phone:</span> {ShowUser.phone}</p>
            <p><span className="font-semibold">Nationality:</span> {ShowUser.nationality}</p>
            <p><span className="font-semibold">DOB:</span> {new Date(ShowUser.dateOfBirth).toLocaleDateString()}</p>
          </div>

          {/* Application Info */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg text-gray-700 border-b pb-2">
              Application Info
            </h2>

            <p>
              <span className="font-semibold">Type:</span>
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                {ShowUser.ApplicationType}
              </span>
            </p>

            <p><span className="font-semibold">Purpose:</span> {ShowUser.purposeOfTravel}</p>
            <p><span className="font-semibold">Departure:</span> {new Date(ShowUser.intendedDepartureDate).toLocaleDateString()}</p>
            <p><span className="font-semibold">Destination:</span> {ShowUser.addressInDestination}</p>
          </div>

          {/* Passport Info */}
          <div className="space-y-3 md:col-span-2">
            <h2 className="font-semibold text-lg text-gray-700 border-b pb-2">
              Passport Info
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <p><span className="font-semibold">Number:</span> {ShowUser.passportNumber}</p>
              <p><span className="font-semibold">Issued:</span> {new Date(ShowUser.passportDateIssue).toLocaleDateString()}</p>
              <p><span className="font-semibold">Expiry:</span> {new Date(ShowUser.passportExpireDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Documents */}
          <div className="md:col-span-2">
            <h2 className="font-semibold text-lg text-gray-700 border-b pb-2 mb-3">
              Documents
            </h2>

            <div className="space-y-3">
              {ShowUser.documents?.map((doc) => (
                <div
                  key={doc._id}
                  className="flex justify-between items-center p-3 border rounded-lg hover:shadow-md transition"
                >
                  <div>
                    <p className="font-medium">{doc.DocumentType}</p>
                    <p className="text-sm text-gray-500">{doc.orginalName}</p>
                  </div>
                   <img
                        src={`http://localhost:7000${doc.filePath}`}
                        alt={doc.DocumentType}
                        className="w-54 h-54 object-cover rounded border"
                        />

                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      doc.status === "verified"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {/* {doc.status} */}
                   {doc.status === "verified" ? "verified" : doc.status}
                  </span>

                <div className="flex gap-2  md:w-4/12 w-full">
                    <button className="py-3 rounded-md w-full bg-[var(--secondary-Color)] text-white px-12 cursor-pointer"
                    
 
                 onClick={async () => {
                await verifyUser(doc._id);
                await reloadUser(); // ✅ refresh UI
                }}

                    >approved</button>
                    <button className="py-3 rounded-md w-full bg-red-500 text-white px-12 cursor-pointer"
                    
                  onClick={async () => {
                await RejectedUserDoc(doc._id);
                await reloadUser(); // ✅ refresh UI
                }}
                    
                    >rejected</button>
                  </div>
                 
                </div>
              ))}
               
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewUser;