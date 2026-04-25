// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BASE_URL_API } from "../../utils/constant";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
// import useTrackStatus from "../../hooks/useTrackStatus";
// const UserDash = () => {
//   const [application, setApplication] = useState(null);
//   const [status, setStatus] = useState("loading");
// const [message, setMessage] = useState("");
  
//   const navigate = useNavigate();

//   const getMyApplication = async () => {
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

//   // useEffect(() => {
//   //   getMyApplication();
//   // }, []);

//   useEffect(() => {
//   const handleFocus = () => {
//     getMyApplication();
//   };

//   window.addEventListener("focus", handleFocus);

//   return () => {
//     window.removeEventListener("focus", handleFocus);
//   };
// }, []);
 



// useEffect(() => {
//   const socket = io(BASE_URL_API);

//   socket.on("application-status-changed", () => {
//     getMyApplication(); // real-time update
//   });

//   return () => {
//     socket.disconnect();
//   };
// }, []);

// useEffect(() => {
//   getMyApplication();
// }, []);



//   const MytrackStatus =useTrackStatus(setStatus, setMessage);




// const socket = io(BASE_URL_API);

// useEffect(() => {
//   socket.on("application-status-changed", (data) => {
//     getMyApplication(); // 🔥 refresh instantly
//   });

//   return () => socket.disconnect();
// }, []);

//   const getStatusColor = () => {
//     if (application?.status === "verfied") return "bg-green-500";
//     if (application?.status === "pending") return "bg-yellow-500";
//     if (application?.status === "rejected") return "bg-red-500";
//     return "bg-gray-400";
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 space-y-6">

//       {/* Welcome */}
//       <div className="bg-white p-6 rounded-2xl shadow">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Welcome 👋
//         </h1>
//         <p className="text-gray-500">
//           Manage your visa application easily
//         </p>
//       </div>

//       {/* Status Card */}
//       <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
//         <div>
//           <h2 className="text-gray-600">Application Status</h2>
//           <p className="text-lg font-semibold">
//             {application?.ApplicationType || "No Application"}
//           </p>
//         </div>

//         <span
//           className={`px-4 py-2 text-white rounded-full ${getStatusColor()}`}
//         >
//           {setStatus}
//         </span>
//       </div>

//       {/* Actions */}
//       <div className="grid md:grid-cols-3 gap-6">

//         <button
//           onClick={() => navigate("/userDashboard/newApplication")}
//           className="bg-blue-500 text-white p-6 rounded-2xl shadow hover:bg-blue-600 transition"
//         >
//           Apply Now
//         </button>

//         <button
//           onClick={() => navigate("/userDashboard/UploadDocument")}
//           className="bg-purple-500 text-white p-6 rounded-2xl shadow hover:bg-purple-600 transition"
//         >
//           Upload Documents
//         </button>

//         <button
//           onClick={() => navigate("/userDashboard/TrackStatus")}
//           className="bg-green-500 text-white p-6 rounded-2xl shadow hover:bg-green-600 transition"
//         >
//           Track Status
//         </button>

//       </div>

//       {/* Application Details */}
//       {application && (
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <h2 className="text-xl font-bold mb-4 text-gray-700">
//             Application Summary
//           </h2>

//           <div className="grid md:grid-cols-2 gap-4 text-gray-600">
//             <p><b>Full Name:</b> {application.fullName}</p>
//             <p><b>Email:</b> {application.email}</p>
//             <p><b>Phone:</b> {application.phone}</p>
//             <p><b>Nationality:</b> {application.nationality}</p>
//             <p><b>Purpose:</b> {application.purposeOfTravel}</p>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default UserDash;





import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL_API } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import useTrackStatus from "../../hooks/useTrackStatus";
import { useSelector } from "react-redux";

const UserDash = () => {
  const [application, setApplication] = useState(null);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

     const user=useSelector((store)=>store?.user?.data)

      if(!user){
         navigate("/")
         return
    }

  const getMyApplication = async () => {
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

  // ✅ track status hook
  const MytrackStatus = useTrackStatus(setStatus, setMessage);

  // ✅ load once
  useEffect(() => {
    getMyApplication();
    MytrackStatus();
  }, []);

  // ✅ refresh when tab focus
  useEffect(() => {
    const handleFocus = () => {
      getMyApplication();
      MytrackStatus();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  // ✅ socket (ONLY ONE)
  useEffect(() => {
    const socket = io(BASE_URL_API);

    socket.on("application-status-changed", () => {
      getMyApplication();
      MytrackStatus();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // ✅ use correct status source
  const getStatusColor = () => {
    if (status === "verfied") return "bg-green-500";
    if (status === "pending") return "bg-yellow-500";
    if (status === "rejected") return "bg-red-500";
    return "bg-gray-400";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">

      {/* Welcome */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome 👋
        </h1>
        <p className="text-gray-500">
          Manage your visa application easily
        </p>
      </div>

      {/* Status Card */}
      <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
        <div>
          <h2 className="text-gray-600">Application Status</h2>
          <p className="text-lg font-semibold">
            {application?.ApplicationType || "No Application"}
          </p>
        </div>

        <span
          className={`px-4 py-2 text-white rounded-full ${getStatusColor()}`}
        >
          {status}
        </span>
      </div>

      {/* Actions */}
      <div className="grid md:grid-cols-3 gap-6">

        <button
          onClick={() => navigate("/userDashboard/newApplication")}
          className="bg-blue-500 text-white p-6 rounded-2xl shadow hover:bg-blue-600 transition"
        >
          Apply Now
        </button>

        <button
          onClick={() => navigate("/userDashboard/UploadDocument")}
          className="bg-purple-500 text-white p-6 rounded-2xl shadow hover:bg-purple-600 transition"
        >
          Upload Documents
        </button>

        <button
          onClick={() => navigate("/userDashboard/TrackStatus")}
          className="bg-green-500 text-white p-6 rounded-2xl shadow hover:bg-green-600 transition"
        >
          Track Status
        </button>

         {/* ✅ ADD THIS */}
 
    <button
      onClick={() => navigate("/userDashboard/approval-letter")}
      className="bg-green-600 text-white p-6 rounded-2xl shadow hover:bg-green-700 transition"
    >
      View Approval Letter
    </button>
  

      </div>

      {/* Application Details */}
      {application && (
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Application Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <p><b>Full Name:</b> {application.fullName}</p>
            <p><b>Email:</b> {application.email}</p>
            <p><b>Phone:</b> {application.phone}</p>
            <p><b>Nationality:</b> {application.nationality}</p>
            <p><b>Purpose:</b> {application.purposeOfTravel}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default UserDash;