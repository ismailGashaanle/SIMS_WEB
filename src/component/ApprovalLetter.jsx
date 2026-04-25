// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { BASE_URL_API } from "../utils/constant";
// // import Stamp from "../assets/stamp.jpg"

// // const ApprovalLetter = () => {
// //   const [letter, setLetter] = useState("");

// //   const getLetter = async () => {
// //     const res = await axios.get(BASE_URL_API + "/getMyApplication", {
// //       withCredentials: true
// //     });

// //     setLetter(res.data.data?.[0]?.approvalLetter);
// //   };

// //   useEffect(() => {
// //     getLetter();
// //   }, []);

// //   return (
// //     <div className="p-10">
// //       <h1 className="text-2xl font-bold mb-4">Visa Approval Letter</h1>

// //       <pre className="bg-white p-6 shadow rounded">
// //         {letter}
// //       </pre>

// //       <img className="w-20 rounded-full" src={Stamp}  />
// //     </div>
// //   );
// // };

// // export default ApprovalLetter;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL_API } from "../utils/constant";
// import Stamp from "../assets/stamp.jpg";

// const ApprovalLetter = () => {
//   const [application, setApplication] = useState(null);

//   const getLetter = async () => {
//     try {
//       const res = await axios.get(
//         BASE_URL_API + "/getMyApplication",
//         { withCredentials: true }
//       );

//       setApplication(res.data.data?.[0]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getLetter();
//   }, []);

//   if (!application) {
//     return <div className="text-center mt-20">Loading...</div>;
//   }

//   const currentDate = new Date().toLocaleDateString();

// if (!application) {
//   return <div className="text-center mt-20">Loading...</div>;
// }

// if (application.status !== "verfied") {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow text-center">
//         <h1 className="text-xl font-bold text-red-500 mb-2">
//           Not Approved Yet ❌
//         </h1>
//         <p className="text-gray-600">
//           Your visa application is not approved yet.
//         </p>
//       </div>
//     </div>
//   );
// }

//   return (
//     <div className="min-h-screen scale-90 bg-gray-200 p-6 flex justify-center">
//       <div className="bg-white w-full max-w-4xl shadow-2xl p-10 border border-gray-300">

//         {/* HEADER */}
//         <div className="text-center border-b pb-4 mb-6">
//           <h1 className="font-bold text-lg">
//             REPUBLIC OF SOMALILAND
//           </h1>
//           <h2 className="text-sm">
//             MINISTRY OF FOREIGN AFFAIRS & INTERNATIONAL COOPERATION
//           </h2>
//           <h3 className="text-sm font-semibold">
//             DIRECTORATE OF IMMIGRATION & BORDER CONTROL
//           </h3>
//         </div>

//         {/* TITLE */}
//         <h2 className="text-center text-xl font-bold underline mb-6">
//           VISA APPROVAL LETTER
//         </h2>

//         {/* CASE */}
//         <div className="flex justify-between mb-6 text-sm">
//           <p>Case No: SL-{application._id.slice(-6)}</p>
//           <p>Date: {currentDate}</p>
//         </div>

//         {/* APPLICANT */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-2 border-b">Applicant Details</h3>

//           <p><b>Name:</b> {application.fullName}</p>
//           <p><b>Passport No:</b> {application.passportNumber}</p>
//           <p><b>Nationality:</b> {application.nationality}</p>
//           <p><b>Date of Birth:</b> {new Date(application.dateOfBirth).toLocaleDateString()}</p>
//         </div>

//         {/* VISA INFO */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-2 border-b">Visa Information</h3>

//           <p><b>Type of Visa:</b> {application.ApplicationType}</p>
//           <p><b>Purpose of Visit:</b> {application.purposeOfTravel}</p>
//           <p><b>Entry Type:</b> Single Entry</p>
//           <p><b>Duration:</b> 90 Days</p>
//         </div>

//         {/* APPROVAL TEXT */}
//         <div className="mb-6 leading-relaxed">
//           <h3 className="font-semibold mb-2 border-b">Approval Note</h3>

//           <p>
//             This is to certify that the above-mentioned applicant has been
//             <span className="font-bold text-green-600"> APPROVED </span>
//             for entry into the Republic of Somaliland.
//           </p>

//           <p className="mt-2">
//             The visa becomes valid from the date of issuance and must be
//             presented to immigration authorities upon arrival.
//           </p>
//         </div>

//         {/* INSTRUCTIONS */}
//         <div className="mb-6 text-sm">
//           <h3 className="font-semibold mb-2 border-b">Important Instructions</h3>

//           <ul className="list-disc ml-6 space-y-1">
//             <li>This approval letter must be carried during travel</li>
//             <li>Immigration officers may request verification</li>
//             <li>Overstay beyond permitted duration is prohibited</li>
//           </ul>
//         </div>

//         {/* FOOTER */}
//         <div className="flex justify-between items-end mt-12">

//           <div>
//             <p className="font-semibold">Issuing Authority:</p>
//             <p>Director of Immigration</p>
//             <p>Republic of Somaliland</p>
//           </div>

//           {/* STAMP */}
//           <div className="text-center">
//             <img
//               src={Stamp}
//               alt="stamp"
//               className="w-28 opacity-90"
//             />
//             <p className="text-xs mt-1">Official Stamp</p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ApprovalLetter;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL_API } from "../utils/constant";
// import Stamp from "../assets/stamp.jpg";
// import { useNavigate } from "react-router-dom";
// import useTrackStatus from "../hooks/useTrackStatus";




// const ApprovalLetter = () => {
//   const [application, setApplication] = useState(null);
//   const navigate = useNavigate();
 
//   const [status, setStatus] = useState("");
// const [message, setMessage] = useState("");

// const MytrackStatus = useTrackStatus(setStatus, setMessage);

//   const getLetter = async () => {
//     try {
//       const res = await axios.get(
//         BASE_URL_API + "/getMyApplication",
//         { withCredentials: true }
//       );

//       setApplication(res.data.data?.[0]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getLetter();
//     MytrackStatus()
//   }, []);

//   // ✅ loading
//   if (!application) {
//     return <div className="text-center mt-20">Loading...</div>;
//   }

//   // ❌ NOT APPROVED
//   if (application.status !== "verfied") {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-xl shadow text-center">
//           <h1 className="text-xl font-bold text-red-500 mb-2">
//             Not Approved Yet ❌
//           </h1>
//           <p className="text-gray-600">
//             Your visa application is not approved yet.
//           </p>

//           <button
//             onClick={() => navigate(-1)}
//             className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     );
//   }


//   const currentDate = new Date().toLocaleDateString();

//   return (
//     <div className="min-h-screen bg-gray-200 p-6 flex flex-col items-center">

//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 bg-gray-700 text-white px-4 py-2 rounded-lg self-start"
//       >
//         ← Back
//       </button>

//       <div className="bg-white w-full max-w-4xl shadow-2xl p-10 border border-gray-300">

//         {/* HEADER */}
//         <div className="text-center border-b pb-4 mb-6">
//           <h1 className="font-bold text-lg">
//             REPUBLIC OF SOMALILAND
//           </h1>
//           <h2 className="text-sm">
//             MINISTRY OF FOREIGN AFFAIRS & INTERNATIONAL COOPERATION
//           </h2>
//           <h3 className="text-sm font-semibold">
//             DIRECTORATE OF IMMIGRATION & BORDER CONTROL
//           </h3>
//         </div>

//         {/* TITLE */}
//         <h2 className="text-center text-xl font-bold underline mb-6">
//           VISA APPROVAL LETTER
//         </h2>

//         {/* CASE */}
//         <div className="flex justify-between mb-6 text-sm">
//           <p>Case No: SL-{application._id.slice(-6)}</p>
//           <p>Date: {currentDate}</p>
//         </div>

//         {/* APPLICANT */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-2 border-b">Applicant Details</h3>

//           <p><b>Name:</b> {application.fullName}</p>
//           <p><b>Passport No:</b> {application.passportNumber}</p>
//           <p><b>Nationality:</b> {application.nationality}</p>
//           <p><b>Date of Birth:</b> {new Date(application.dateOfBirth).toLocaleDateString()}</p>
//         </div>

//         {/* VISA INFO */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-2 border-b">Visa Information</h3>

//           <p><b>Type of Visa:</b> {application.ApplicationType}</p>
//           <p><b>Purpose of Visit:</b> {application.purposeOfTravel}</p>
//           <p><b>Entry Type:</b> Single Entry</p>
//           <p><b>Duration:</b> 90 Days</p>
//         </div>

//         {/* APPROVAL TEXT */}
//         <div className="mb-6 leading-relaxed">
//           <h3 className="font-semibold mb-2 border-b">Approval Note</h3>

//           <p>
//             This is to certify that the above-mentioned applicant has been
//             <span className="font-bold text-green-600"> APPROVED </span>
//             for entry into the Republic of Somaliland.
//           </p>

//           <p className="mt-2">
//             The visa becomes valid from the date of issuance and must be
//             presented to immigration authorities upon arrival.
//           </p>
//         </div>

//         {/* FOOTER */}
//         <div className="flex justify-between items-end mt-12">

//           <div>
//             <p className="font-semibold">Issuing Authority:</p>
//             <p>Director of Immigration</p>
//             <p>Republic of Somaliland</p>
//           </div>

//           {/* STAMP */}
//           <div className="text-center">
//             <img
//               src={Stamp}
//               alt="stamp"
//               className="w-28 opacity-90"
//             />
//             <p className="text-xs mt-1">Official Stamp</p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ApprovalLetter;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL_API } from "../utils/constant";
import Stamp from "../assets/stamp.jpg";
import { useNavigate } from "react-router-dom";
import useTrackStatus from "../hooks/useTrackStatus";
import { useSelector } from "react-redux";

const ApprovalLetter = () => {
  const [application, setApplication] = useState(null);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
   const user=useSelector((store)=>store?.user?.data)
  const navigate = useNavigate();
  const MytrackStatus = useTrackStatus(setStatus, setMessage);
 
    if(!user){
      return   navigate("/")
    }


  const getLetter = async () => {
    try {
      const res = await axios.get(
        BASE_URL_API + "/getMyApplication",
        { withCredentials: true }
      );

      setApplication(res.data.data?.[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLetter();
    MytrackStatus();
  }, []);

  // loading
  if (!application || !status) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  // ❌ BLOCK IF NOT VERIFIED
  if (status !== "verfied") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h1 className="text-xl font-bold text-red-500 mb-2">
            Not Approved Yet ❌
          </h1>
          <p className="text-gray-600 mb-4">
            Your visa application is not approved yet.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString();

  // PRINT
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex flex-col items-center">

      {/* BACK BUTTON */}
      <div className="w-full max-w-4xl flex justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          ← Back
        </button>

        <div className="space-x-2">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Print
          </button>

          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* LETTER */}
      <div className="bg-white w-full max-w-4xl shadow-2xl p-10 border border-gray-300">

        {/* HEADER */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="font-bold text-lg">
            REPUBLIC OF SOMALILAND
          </h1>
          <h2 className="text-sm">
            MINISTRY OF FOREIGN AFFAIRS & INTERNATIONAL COOPERATION
          </h2>
          <h3 className="text-sm font-semibold">
            DIRECTORATE OF IMMIGRATION & BORDER CONTROL
          </h3>
        </div>

        {/* TITLE */}
        <h2 className="text-center text-xl font-bold underline mb-6">
          VISA APPROVAL LETTER
        </h2>

        {/* CASE */}
        <div className="flex justify-between mb-6 text-sm">
          <p>Case No: SL-{application._id.slice(-6)}</p>
          <p>Date: {currentDate}</p>
        </div>

        {/* APPLICANT */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2 border-b">Applicant Details</h3>
          <p><b>Name:</b> {application.fullName}</p>
          <p><b>Passport No:</b> {application.passportNumber}</p>
          <p><b>Nationality:</b> {application.nationality}</p>
          <p><b>Date of Birth:</b> {new Date(application.dateOfBirth).toLocaleDateString()}</p>
        </div>

        {/* VISA INFO */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2 border-b">Visa Information</h3>
          <p><b>Type of Visa:</b> {application.ApplicationType}</p>
          <p><b>Purpose:</b> {application.purposeOfTravel}</p>
          <p><b>Entry Type:</b> Single Entry</p>
          <p><b>Duration:</b> 90 Days</p>
        </div>

        {/* APPROVAL */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2 border-b">Approval Note</h3>
          <p>
            This applicant has been{" "}
            <span className="font-bold text-green-600">APPROVED</span>{" "}
            for entry into the Republic of Somaliland.
          </p>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-end mt-12">

          <div>
            <p className="font-semibold">Issuing Authority:</p>
            <p>Director of Immigration <span className="text-black-600 font-bold"> mohamoud ahmed hassan</span></p>
            <p>Republic of Somaliland</p>
          </div>

          <div className="text-center">
            <img src={Stamp} alt="stamp" className="w-28 opacity-90" />
            <p className="text-xs mt-1">Official Stamp</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ApprovalLetter;