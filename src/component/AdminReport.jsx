// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL_API } from "../utils/constant";

// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
// } from "chart.js";

// import { Pie, Bar, Line } from "react-chartjs-2";

// import {
//   FaUsers,
//   FaFileAlt,
//   FaPassport,
//   FaChartLine,
//   FaGlobe,
//   FaCheckCircle,
//   FaClock,
// } from "react-icons/fa";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement
// );

// // 🎨 Modern chart palette (NOT basic flat colors)
// const COLORS = [
//   "#6366f1",
//   "#22c55e",
//   "#f97316",
//   "#ef4444",
//   "#06b6d4",
//   "#a855f7",
//   "#eab308",
// ];

// // safe helper
// const safe = (obj) => obj || {};

// const AdminReport = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const res = await axios.get(
//           BASE_URL_API + "/admin/report/full",
//           { withCredentials: true }
//         );
//         setData(res.data || {});
//       } catch (err) {
//         console.log(err.message);
//       }
//     };

//     fetchReport();
//   }, []);

//   // LOADING
//   if (!data) {
//     return (
//       <div className="p-10 text-center animate-fade-in text-gray-500">
//         Loading Analytics Dashboard...
//       </div>
//     );
//   }

//   const charts = safe(data.charts);
//   const summary = safe(data.summary);

//   // convert helper
//   const toArray = (obj) =>
//     Object.entries(obj || {}).map(([name, value]) => ({
//       name,
//       value,
//     }));

//   const status = toArray(charts.applicationStatus);
//   const visa = toArray(charts.visaType);
//   const country = toArray(charts.countryStats);
//   const docs = toArray(charts.documentType);
//   const docStatus = toArray(charts.documentStatus);
//   const monthly = charts.monthlyTrend || [];

//   // PIE DATA
//   const pieStatus = {
//     labels: status.map((i) => i.name),
//     datasets: [
//       {
//         data: status.map((i) => i.value),
//         backgroundColor: COLORS,
//         borderWidth: 0,
//         hoverOffset: 12,
//       },
//     ],
//   };

//   // VISA BAR
//   const visaData = {
//     labels: visa.map((i) => i.name),
//     datasets: [
//       {
//         label: "Visa Applications",
//         data: visa.map((i) => i.value),
//         backgroundColor: COLORS[0],
//         borderRadius: 12,
//       },
//     ],
//   };

//   // COUNTRY LINE
//   const countryData = {
//     labels: country.map((i) => i.name),
//     datasets: [
//       {
//         label: "Country Applications",
//         data: country.map((i) => i.value),
//         borderColor: COLORS[2],
//         backgroundColor: "rgba(249,115,22,0.15)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   // DOC STATUS BAR
//   const docStatusData = {
//     labels: docStatus.map((i) => i.name),
//     datasets: [
//       {
//         label: "Document Status",
//         data: docStatus.map((i) => i.value),
//         backgroundColor: COLORS[1],
//         borderRadius: 12,
//       },
//     ],
//   };

//   // MONTHLY TREND LINE
//   const monthlyData = {
//     labels: monthly.map((i) => i.label),
//     datasets: [
//       {
//         label: "Monthly Applications",
//         data: monthly.map((i) => i.count),
//         borderColor: COLORS[3],
//         backgroundColor: "rgba(239,68,68,0.15)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 space-y-8 animate-fade-in">

//       {/* ================= HEADER ================= */}
//       <div className="glass p-6 rounded-xl animate-slide-in">
//         <h1 className="text-2xl font-bold highlight flex items-center gap-2">
//           <FaChartLine /> Admin Analytics Dashboard
//         </h1>
//         <p className="text-sm text-gray-600">
//           Real-time system insights & performance tracking
//         </p>
//       </div>

//       {/* ================= KPI CARDS ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         <div className="card hover-scale animate-float flex gap-4 items-center">
//           <FaUsers className="text-3xl text-indigo-500" />
//           <div>
//             <h2 className="text-xl font-bold">{summary.totalUsers}</h2>
//             <p className="text-sm text-gray-600">Users</p>
//           </div>
//         </div>

//         <div className="card hover-scale animate-float flex gap-4 items-center">
//           <FaPassport className="text-3xl text-green-500" />
//           <div>
//             <h2 className="text-xl font-bold">{summary.totalApplications}</h2>
//             <p className="text-sm text-gray-600">Applications</p>
//           </div>
//         </div>

//         <div className="card hover-scale animate-float flex gap-4 items-center">
//           <FaFileAlt className="text-3xl text-orange-500" />
//           <div>
//             <h2 className="text-xl font-bold">{summary.totalDocuments}</h2>
//             <p className="text-sm text-gray-600">Documents</p>
//           </div>
//         </div>

//       </div>

//       {/* ================= CHART GRID ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* PIE */}
//         <div className="card hover-scale">
//           <h3 className="highlight flex items-center gap-2">
//             <FaCheckCircle /> Application Status
//           </h3>
//           <Pie data={pieStatus} />
//         </div>

//         {/* VISA */}
//         <div className="card hover-scale">
//           <h3 className="highlight flex items-center gap-2">
//             <FaPassport /> Visa Types
//           </h3>
//           <Bar data={visaData} />
//         </div>

//         {/* COUNTRY */}
//         <div className="card md:col-span-2 hover-scale">
//           <h3 className="highlight flex items-center gap-2">
//             <FaGlobe /> Country Trends
//           </h3>
//           <Line data={countryData} />
//         </div>

//         {/* DOC STATUS */}
//         <div className="card hover-scale">
//           <h3 className="highlight flex items-center gap-2">
//             <FaFileAlt /> Document Status
//           </h3>
//           <Bar data={docStatusData} />
//         </div>

//         {/* MONTHLY TREND */}
//         <div className="card hover-scale md:col-span-2">
//           <h3 className="highlight flex items-center gap-2">
//             <FaClock /> Monthly Trend
//           </h3>
//           <Line data={monthlyData} />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminReport;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL_API } from "../utils/constant";

// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
// } from "chart.js";

// import { Pie, Bar, Line } from "react-chartjs-2";

// import {
//   FaUsers,
//   FaFileAlt,
//   FaPassport,
//   FaChartLine,
//   FaGlobe,
//   FaCheckCircle,
//   FaClock,
// } from "react-icons/fa";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement
// );

// // 🎨 Modern palette
// const COLORS = [
//   "#6366f1",
//   "#22c55e",
//   "#f97316",
//   "#ef4444",
//   "#06b6d4",
//   "#a855f7",
//   "#eab308",
// ];

// // safe helper
// const safe = (obj) => obj || {};

// // normalize backend typo
// const normalizeStatus = (name) => {
//   if (name === "verfied") return "verified";
//   return name;
// };

// // status color logic
// const getStatusColor = (label) => {
//   switch ((label || "").toLowerCase()) {
//     case "approved":
//     case "verified":
//       return "#22c55e";
//     case "pending":
//       return "#facc15";
//     case "rejected":
//       return "#ef4444";
//     default:
//       return "#6366f1";
//   }
// };

// const AdminReport = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const res = await axios.get(
//           BASE_URL_API + "/admin/report/full",
//           { withCredentials: true }
//         );
//         setData(res.data || {});
//       } catch (err) {
//         console.log(err.message);
//       }
//     };

//     fetchReport();
//   }, []);

//   if (!data) {
//     return (
//       <div className="p-10 text-center animate-fade-in text-gray-500">
//         Loading Analytics Dashboard...
//       </div>
//     );
//   }

//   const charts = safe(data.charts);
//   const summary = safe(data.summary);

//   const toArray = (obj) =>
//     Object.entries(obj || {}).map(([name, value]) => ({
//       name,
//       value,
//     }));

//   const status = toArray(charts.applicationStatus);
//   const visa = toArray(charts.visaType);
//   const country = toArray(charts.countryStats);
//   const docs = toArray(charts.documentType);
//   const docStatus = toArray(charts.documentStatus);
//   const monthly = charts.monthlyTrend || [];

//   // ================= PIE STATUS (DYNAMIC COLORS) =================
//   const pieStatus = {
//     labels: status.map((i) => normalizeStatus(i.name)),
//     datasets: [
//       {
//         data: status.map((i) => i.value),
//         backgroundColor: status.map((i) =>
//           getStatusColor(normalizeStatus(i.name))
//         ),
//         borderWidth: 0,
//         hoverOffset: 14,
//       },
//     ],
//   };

//   // ================= VISA BAR (multi color) =================
//   const visaData = {
//     labels: visa.map((i) => i.name),
//     datasets: [
//       {
//         label: "Visa Applications",
//         data: visa.map((i) => i.value),
//         backgroundColor: visa.map(
//           (_, idx) => COLORS[idx % COLORS.length]
//         ),
//         borderRadius: 12,
//       },
//     ],
//   };

//   // ================= COUNTRY LINE =================
//   const countryData = {
//     labels: country.map((i) => i.name),
//     datasets: [
//       {
//         label: "Country Applications",
//         data: country.map((i) => i.value),
//         borderColor: "#06b6d4",
//         backgroundColor: "rgba(6,182,212,0.15)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   // ================= DOC STATUS =================
//   const docStatusData = {
//     labels: docStatus.map((i) => i.name),
//     datasets: [
//       {
//         label: "Document Status",
//         data: docStatus.map((i) => i.value),
//         backgroundColor: docStatus.map((i) =>
//           getStatusColor(i.name)
//         ),
//         borderRadius: 12,
//       },
//     ],
//   };

//   // ================= MONTHLY TREND =================
//   const monthlyData = {
//     labels: monthly.map((i) => i.label),
//     datasets: [
//       {
//         label: "Monthly Applications",
//         data: monthly.map((i) => i.count),
//         borderColor: "#ef4444",
//         backgroundColor: "rgba(239,68,68,0.15)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 space-y-8 animate-fade-in">

//       {/* HEADER */}
//       <div className="glass p-6 rounded-xl animate-slide-in">
//         <h1 className="text-2xl font-bold flex items-center gap-2">
//           <FaChartLine /> Admin Analytics Dashboard
//         </h1>
//         <p className="text-sm text-gray-600">
//           Real-time system insights & status tracking
//         </p>
//       </div>

 
//       {/* KPI CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         <div className="card hover-scale flex gap-4 items-center">
//           <FaUsers className="text-3xl text-indigo-500" />
//           <div>
//             <h2 className="text-xl font-bold">{summary.totalUsers}</h2>
//             <p className="text-sm text-gray-600">Users</p>
//           </div>
//         </div>

//         <div className="card hover-scale flex gap-4 items-center">
//           <FaPassport className="text-3xl text-green-500" />
//           <div>
//             <h2 className="text-xl font-bold">{summary.totalApplications}</h2>
//             <p className="text-sm text-gray-600">Applications</p>
//           </div>
//         </div>

//         <div className="card hover-scale flex gap-4 items-center">
//           <FaFileAlt className="text-3xl text-orange-500" />
//           <div>
//             <h2 className="text-xl font-bold">{summary.totalDocuments}</h2>
//             <p className="text-sm text-gray-600">Documents</p>
//           </div>
//         </div>

//       </div>

//       {/* CHARTS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         <div className="card">
//           <h3 className="flex items-center gap-2">
//             <FaCheckCircle /> Application Status
//           </h3>
//           <Pie data={pieStatus} />
//         </div>

//         <div className="card">
//           <h3 className="flex items-center gap-2">
//             <FaPassport /> Visa Types
//           </h3>
//           <Bar data={visaData} />
//         </div>

//         <div className="card md:col-span-2">
//           <h3 className="flex items-center gap-2">
//             <FaGlobe /> Country Trends
//           </h3>
//           <Line data={countryData} />
//         </div>

//         <div className="card">
//           <h3 className="flex items-center gap-2">
//             <FaFileAlt /> Document Status
//           </h3>
//           <Bar data={docStatusData} />
//         </div>

//         <div className="card md:col-span-2">
//           <h3 className="flex items-center gap-2">
//             <FaClock /> Monthly Trend
//           </h3>
//           <Line data={monthlyData} />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminReport;

 





// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { BASE_URL_API } from "../utils/constant";

// // const AdminReport = () => {
// //   const [reportType, setReportType] = useState("summary");
// //   const [data, setData] = useState(null);
// //   const [tableData, setTableData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await axios.get(
// //           `${BASE_URL_API}/admin/report/full?type=${reportType}`,
// //           { withCredentials: true }
// //         );

// //         console.log("API RESPONSE:", res.data);

// //         // TABLE DATA TYPES
// //         if (
// //           reportType === "users" ||
// //           reportType === "applications" ||
// //           reportType === "documents"
// //         ) {
// //           setTableData(res.data.data || []);
// //           setData(null);
// //         } else {
// //           setData(res.data);
// //           setTableData([]);
// //         }
// //       } catch (err) {
// //         console.log(err.message);
// //       }
// //     };

// //     fetchData();
// //   }, [reportType]);

// //   return (
// //     <div className="p-6">

// //       {/* SELECT */}
// //       <select
// //         value={reportType}
// //         onChange={(e) => setReportType(e.target.value)}
// //         className="p-2 border rounded"
// //       >
// //         <option value="summary">Summary</option>
// //         <option value="users">Users</option>
// //         <option value="applications">Applications</option>
// //         <option value="documents">Documents</option>
// //       </select>

// //       {/* ================= USERS TABLE ================= */}
// //       {reportType === "users" && (
// //         <table className="w-full border mt-4">
// //           <thead>
// //             <tr>
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Role</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {tableData.map((u) => (
// //               <tr key={u._id}>
// //                 <td>{u.name}</td>
// //                 <td>{u.email}</td>
// //                 <td>{u.role}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}

// //       {/* ================= APPLICATIONS ================= */}
// //       {reportType === "applications" && (
// //         <table className="w-full border mt-4">
// //           <thead>
// //             <tr>
// //               <th>User</th>
// //               <th>Status</th>
// //               <th>Type</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {tableData.map((a) => (
// //               <tr key={a._id}>
// //                 <td>{a.userId}</td>
// //                 <td>{a.status}</td>
// //                 <td>{a.ApplicationType}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}

// //       {/* ================= DOCUMENTS ================= */}
// //       {reportType === "documents" && (
// //         <table className="w-full border mt-4">
// //           <thead>
// //             <tr>
// //               <th>Type</th>
// //               <th>Status</th>
// //               <th>Reason</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {tableData.map((d) => (
// //               <tr key={d._id}>
// //                 <td>{d.DocumentType}</td>
// //                 <td>{d.status}</td>
// //                 <td>{d.rejectionReason}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}

// //     </div>
// //   );
// // };

// // export default AdminReport;




import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BASE_URL_API } from "../utils/constant";
import { saveAs } from "file-saver";

import {
  FaUsers,
  FaFileAlt,
  FaPassport,
  FaChartLine,
  FaDownload,
  FaPrint,
} from "react-icons/fa";

// ================= HELPERS =================

const formatDate = (date) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString();
};

const getStatusColor = (status) => {
  switch ((status || "").toLowerCase()) {
    case "verified":
    case "approved":
      return "bg-green-100 text-green-600";
    case "pending":
      return "bg-yellow-100 text-yellow-600";
    case "rejected":
      return "bg-red-100 text-red-600";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

// 🔥 EXPIRY CHECK (YEAR 2026 LOGIC)
const isExpiringThisYear = (date) => {
  if (!date) return false;
  const year = new Date(date).getFullYear();
  return year === 2026;
};

// ================= COMPONENT =================
import { Pie, Bar, Line } from "react-chartjs-2";

const AdminReport = () => {
  const [reportType, setReportType] = useState("summary");
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState(null);
  const summary = data?.summary || {};
const charts = data?.charts || {};

  const printRef = useRef();

  // ================= FETCH =================
  useEffect(() => {
    const fetchReport = async () => {
      try {
        const url =
          reportType === "summary"
            ? `${BASE_URL_API}/admin/report/full`
            : `${BASE_URL_API}/admin/report/full?type=${reportType}`;

        const res = await axios.get(url, { withCredentials: true });

                if (reportType === "summary") {
                  setData(res.data || {});
                  setTableData([]);
                } else {
                  setTableData(res.data.data || []);
                }

        setTableData(res.data.data || []);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchReport();
  }, [reportType]);

  

  // ================= EXPORT CSV =================
  const exportCSV = () => {
    if (!tableData.length) return;

    let headers = [];
    let rows = [];


    if (reportType === "summary") {
  return (
    <div className="space-y-6">

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        {/* USERS */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg">
          <FaUsers className="absolute right-4 top-4 opacity-20 text-5xl" />
          <p className="text-sm opacity-80">Users</p>
          <h2 className="text-2xl font-bold">{summary.totalUsers || 0}</h2>
        </div>

        {/* APPLICATIONS */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg">
          <FaPassport className="absolute right-4 top-4 opacity-20 text-5xl" />
          <p className="text-sm opacity-80">Applications</p>
          <h2 className="text-2xl font-bold">{summary.totalApplications || 0}</h2>
        </div>

        {/* DOCUMENTS */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
          <FaFileAlt className="absolute right-4 top-4 opacity-20 text-5xl" />
          <p className="text-sm opacity-80">Documents</p>
          <h2 className="text-2xl font-bold">{summary.totalDocuments || 0}</h2>
        </div>

        {/* APPROVED */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
          <p className="text-sm opacity-80">Approved</p>
          <h2 className="text-2xl font-bold">
            {charts.applicationStatus?.approved || 0}
          </h2>
        </div>

        {/* REJECTED */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
          <p className="text-sm opacity-80">Rejected</p>
          <h2 className="text-2xl font-bold">
            {charts.applicationStatus?.rejected || 0}
          </h2>
        </div>

      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* STATUS PIE */}
        <div className="bg-white p-6 rounded-2xl shadow border hover:shadow-lg transition">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">
            Application Status
          </h3>
          <div className="h-[250px]">
            <Pie data={pieStatus} />
          </div>
        </div>

        {/* VISA TYPES */}
        <div className="bg-white p-6 rounded-2xl shadow border hover:shadow-lg transition">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">
            Visa Types
          </h3>
          <div className="h-[250px]">
            <Bar data={visaData} />
          </div>
        </div>

        {/* COUNTRY */}
        <div className="bg-white p-6 rounded-2xl shadow border md:col-span-2 hover:shadow-lg transition">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">
            Country Analytics
          </h3>
          <div className="h-[300px]">
            <Line data={countryData} />
          </div>
        </div>

        {/* DOCUMENT STATUS */}
        <div className="bg-white p-6 rounded-2xl shadow border hover:shadow-lg transition">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">
            Document Status
          </h3>
          <div className="h-[250px]">
            <Bar data={docStatusData} />
          </div>
        </div>

        {/* MONTHLY */}
        <div className="bg-white p-6 rounded-2xl shadow border hover:shadow-lg transition">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">
            Monthly Trend
          </h3>
          <div className="h-[250px]">
            <Line data={monthlyData} />
          </div>
        </div>

      </div>

    </div>
  );
}

    if (reportType === "users") {
      headers = ["Name", "Email", "Role", "Joined"];
      rows = tableData.map((u) => [
        `${u.firstName} ${u.lastName}`,
        u.email,
        u.role,
        formatDate(u.createdAt),
      ]);
    }

    if (reportType === "applications") {
      headers = [
        "Full Name",
        "Type",
        "Status",
        "Nationality",
        "Email",
        "Phone",
        "Passport",
        "DOB",
        "Expire Date",
      ];

      rows = tableData.map((a) => [
        a.fullName,
        a.ApplicationType,
        a.status,
        a.nationality,
        a.email,
        a.phone,
        a.passportNumber,
        formatDate(a.dateOfBirth),
        formatDate(a.passportExpireDate),
      ]);
    }

    if (reportType === "documents") {
      headers = [
        "Application ID",
        "Type",
        "File",
        "Owner",
        "Status",
        "Verified At",
      ];

      rows = tableData.map((d) => [
        d.ApplicationId,
        d.DocumentType,
        d.orginalName,
        d.fullName,
        d.status,
        formatDate(d.verifiedAt),
      ]);
    }

    const csvContent =
      [headers, ...rows]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${reportType}-report.csv`);
  };

  // ================= PRINT =================
  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const win = window.open("", "", "width=900,height=700");
    win.document.write(`
      <html>
        <head>
          <title>Report</title>
          <style>
            body { font-family: Arial; padding:20px }
            table { width:100%; border-collapse: collapse }
            th, td { border:1px solid #ddd; padding:8px }
            th { background:#f3f4f6 }
          </style>
        </head>
        <body>${printContent}</body>
      </html>
    `);
    win.document.close();
    win.print();
  };

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">

      {/* HEADER */}
      <div className="bg-white p-6 rounded-xl shadow border">
        <h1 className="text-xl font-bold flex gap-2">
          <FaChartLine /> Reports
        </h1>
      </div>

      {/* CONTROLS */}
      <div className="flex gap-3 flex-wrap">
        <select
          className="p-2 border rounded bg-white"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="summary">Dashboard</option>
          <option value="users">Users</option>
          <option value="applications">Applications</option>
          <option value="documents">Documents</option>
        </select>

        <button
          onClick={exportCSV}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          <FaDownload /> Export
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded"
        >
          <FaPrint /> Print
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div
        ref={printRef}
        className="bg-white rounded-xl shadow border overflow-hidden"
      >
        <table className="w-full text-sm">

          <thead className="bg-slate-100 text-xs uppercase">
            <tr>
              <th className="p-3">#</th>

              {reportType === "users" && (
                <>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Joined</th>
                </>
              )}

              {reportType === "applications" && (
                <>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Nationality</th>
                  <th>Passport</th>
                  <th>Expire</th>
                </>
              )}

              {reportType === "documents" && (
                <>
                  <th>Application</th>
                  <th>Type</th>
                  <th>File</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Verified</th>
                </>
              )}
            </tr>
          </thead>

          <tbody>
            {tableData.map((item, idx) => (
              <tr key={idx} className="border-t hover:bg-slate-50">

                <td className="p-3">{idx + 1}</td>

                {/* USERS */}
                {reportType === "users" && (
                  <>
                    <td className="p-3 font-medium">
                      {item.firstName} {item.lastName}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{formatDate(item.createdAt)}</td>
                  </>
                )}

                {/* APPLICATIONS */}
                {reportType === "applications" && (
                  <>
                    <td>{item.fullName}</td>
                    <td>{item.ApplicationType}</td>

                    <td>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>

                    <td>{item.nationality}</td>
                    <td>{item.passportNumber}</td>

                    <td>
                      <span className={
                        isExpiringThisYear(item.passportExpireDate)
                          ? "text-red-600 font-semibold"
                          : ""
                      }>
                        {formatDate(item.passportExpireDate)}
                      </span>
                    </td>
                  </>
                )}

                {/* DOCUMENTS */}
                {reportType === "documents" && (
                  <>
                    <td>{item.ApplicationId}</td>
                    <td>{item.DocumentType}</td>
                    <td>{item.orginalName}</td>
                    <td>{item.fullName}</td>

                    <td>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>

                    <td>{formatDate(item.verifiedAt)}</td>
                  </>
                )}

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default AdminReport;









// good
 
//  import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { BASE_URL_API } from "../utils/constant";

// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
// } from "chart.js";

// import { Pie, Bar, Line } from "react-chartjs-2";

// import {
//   FaUsers,
//   FaFileAlt,
//   FaPassport,
//   FaChartLine,
// } from "react-icons/fa";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement
// );

// // ================= CLEAN MODERN PALETTE =================
// const COLORS = [
//   "#4f46e5",
//   "#0ea5e9",
//   "#f97316",
//   "#ef4444",
//   "#8b5cf6",
//   "#64748b",
// ];

// const safe = (obj) => obj || {};

// const normalizeStatus = (name) => {
//   if (!name) return "unknown";
//   if (name === "verfied") return "verified";
//   return name;
// };

// const getStatusColor = (label) => {
//   switch ((label || "").toLowerCase()) {
//     case "approved":
//     case "verified":
//       return "#22c55e";
//     case "pending":
//       return "#f59e0b";
//     case "rejected":
//       return "#ef4444";
//     default:
//       return "#4f46e5";
//   }
// };

// const AdminReport = () => {
//   const [data, setData] = useState(null);
//   const [reportType, setReportType] = useState("summary");
//   const [tableData, setTableData] = useState([]);

//   const printRef = useRef();

//   // ================= FETCH (UNCHANGED) =================
//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const url =
//           reportType === "summary"
//             ? `${BASE_URL_API}/admin/report/full`
//             : `${BASE_URL_API}/admin/report/full?type=${reportType}`;

//         const res = await axios.get(url, { withCredentials: true });
//         const response = res.data || {};

//         if (reportType !== "summary") {
//           setTableData(response.data || []);
//           setData(null);
//         } else {
//           setData(response);
//           setTableData([]);
//         }
//       } catch (err) {
//         console.log(err.message);
//       }
//     };

//     fetchReport();
//   }, [reportType]);

//   const charts = safe(data?.charts);
//   const summary = safe(data?.summary);

//   const toArray = (obj) =>
//     Object.entries(obj || {}).map(([name, value]) => ({ name, value }));

//   const status = toArray(charts.applicationStatus);
//   const visa = toArray(charts.visaType);
//   const country = toArray(charts.countryStats);
//   const docStatus = toArray(charts.documentStatus);
//   const monthly = charts.monthlyTrend || [];

//   // ================= CHARTS (UNCHANGED) =================
//   const pieStatus = {
//     labels: status.map((i) => normalizeStatus(i.name)),
//     datasets: [
//       {
//         data: status.map((i) => i.value),
//         backgroundColor: status.map((i) => getStatusColor(i.name)),
//       },
//     ],
//   };

//   const visaData = {
//     labels: visa.map((i) => i.name),
//     datasets: [
//       {
//         label: "Visa",
//         data: visa.map((i) => i.value),
//         backgroundColor: visa.map((_, i) => COLORS[i % COLORS.length]),
//       },
//     ],
//   };

//   const countryData = {
//     labels: country.map((i) => i.name),
//     datasets: [
//       {
//         label: "Country",
//         data: country.map((i) => i.value),
//         borderColor: "#0ea5e9",
//         fill: true,
//       },
//     ],
//   };

//   const docStatusData = {
//     labels: docStatus.map((i) => i.name),
//     datasets: [
//       {
//         label: "Docs",
//         data: docStatus.map((i) => i.value),
//         backgroundColor: docStatus.map((i) => getStatusColor(i.name)),
//       },
//     ],
//   };

//   const monthlyData = {
//     labels: monthly.map((i) => i.label),
//     datasets: [
//       {
//         label: "Monthly",
//         data: monthly.map((i) => i.count),
//         borderColor: "#4f46e5",
//         fill: true,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 space-y-8 bg-slate-50 min-h-screen">

//       {/* HEADER (UNCHANGED STYLE) */}
//       <div className="bg-white p-6 rounded-xl shadow border animate-fade-in">
//         <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
//           <FaChartLine /> Admin Dashboard
//         </h1>
//       </div>

//       {/* SELECT */}
//       <div className="flex gap-3">
//         <select
//           className="p-2 border rounded-lg bg-white shadow-sm"
//           value={reportType}
//           onChange={(e) => setReportType(e.target.value)}
//         >
//           <option value="summary">Dashboard</option>
//           <option value="users">Users</option>
//           <option value="applications">Applications</option>
//           <option value="documents">Documents</option>
//         </select>
//       </div>

//       {/* ================= MODERN TABLE UI ================= */}

//       {/* ================= PREMIUM DASHBOARD ================= */}
// {reportType === "summary" && (
//   <div className="space-y-6">

//     {/* ================= KPI CARDS (BANK STYLE) ================= */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//       {/* USERS */}
//       <div className="relative p-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg overflow-hidden">
//         <div className="absolute top-0 right-0 opacity-20 text-7xl">
//           <FaUsers />
//         </div>

//         <p className="text-sm opacity-80">Total Users</p>
//         <h2 className="text-3xl font-bold mt-2">
//           {summary.totalUsers || 0}
//         </h2>

//         <p className="text-xs mt-2 opacity-70">
//           Active system users
//         </p>
//       </div>

//       {/* APPLICATIONS */}
//       <div className="relative p-6 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg overflow-hidden">
//         <div className="absolute top-0 right-0 opacity-20 text-7xl">
//           <FaPassport />
//         </div>

//         <p className="text-sm opacity-80">Applications</p>
//         <h2 className="text-3xl font-bold mt-2">
//           {summary.totalApplications || 0}
//         </h2>

//         <p className="text-xs mt-2 opacity-70">
//           Total submissions
//         </p>
//       </div>

//       {/* DOCUMENTS */}
//       <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg overflow-hidden">
//         <div className="absolute top-0 right-0 opacity-20 text-7xl">
//           <FaFileAlt />
//         </div>

//         <p className="text-sm opacity-80">Documents</p>
//         <h2 className="text-3xl font-bold mt-2">
//           {summary.totalDocuments || 0}
//         </h2>

//         <p className="text-xs mt-2 opacity-70">
//           Uploaded files
//         </p>
//       </div>

//     </div>

//     {/* ================= ANALYTICS GRID ================= */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//       {/* STATUS PIE */}
//       <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition">
//         <h3 className="text-sm font-semibold text-slate-600 mb-4">
//           Application Status Distribution
//         </h3>

//         <div className="h-[250px]">
//           <Pie data={pieStatus} />
//         </div>
//       </div>

//       {/* VISA BAR */}
//       <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition">
//         <h3 className="text-sm font-semibold text-slate-600 mb-4">
//           Visa Type Analysis
//         </h3>

//         <div className="h-[250px]">
//           <Bar data={visaData} />
//         </div>
//       </div>

//       {/* COUNTRY TREND */}
//       <div className="bg-white p-6 rounded-2xl shadow-md border md:col-span-2 hover:shadow-lg transition">
//         <h3 className="text-sm font-semibold text-slate-600 mb-4">
//           Country Trends
//         </h3>

//         <div className="h-[300px]">
//           <Line data={countryData} />
//         </div>
//       </div>

//       {/* DOCUMENT STATUS */}
//       <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition">
//         <h3 className="text-sm font-semibold text-slate-600 mb-4">
//           Document Status
//         </h3>

//         <div className="h-[250px]">
//           <Bar data={docStatusData} />
//         </div>
//       </div>

//       {/* MONTHLY TREND */}
//       <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition">
//         <h3 className="text-sm font-semibold text-slate-600 mb-4">
//           Monthly Activity
//         </h3>

//         <div className="h-[250px]">
//           <Line data={monthlyData} />
//         </div>
//       </div>

//     </div>

//   </div>
// )}
//       {reportType !== "summary" && (
//         <div
//           ref={printRef}
//           className="bg-white rounded-2xl shadow-md border overflow-hidden animate-fade-in"
//         >
//           <div className="overflow-x-auto">

//             <table className="w-full text-sm">

//               {/* HEADER */}
//               <thead className="bg-slate-100 text-slate-600 uppercase text-xs tracking-wider">
//                 <tr>
//                   <th className="p-4 w-16">#</th>

//                   {reportType === "users" && (
//                     <>
//                       <th className="p-4">User</th>
//                       <th className="p-4">Email</th>
//                       <th className="p-4">Role</th>
//                     </>
//                   )}

//                   {reportType === "applications" && (
//                     <>
//                       <th className="p-4">User</th>
//                       <th className="p-4">Type</th>
//                       <th className="p-4">Status</th>
//                     </>
//                   )}

//                   {reportType === "documents" && (
//                     <>
//                       <th className="p-4">Document</th>
//                       <th className="p-4">Reason</th>
//                       <th className="p-4">Status</th>
//                     </>
//                   )}
//                 </tr>
//               </thead>

//               {/* BODY */}
//               <tbody className="divide-y divide-slate-100">

//                 {tableData.map((item, idx) => (
//                   <tr
//                     key={idx}
//                     className="hover:bg-slate-50 transition-all duration-200"
//                   >

//                     {/* INDEX */}
//                     <td className="p-4 font-semibold text-slate-400">
//                       {idx + 1}
//                     </td>

//                     {/* USERS */}
//                     {reportType === "users" && (
//                       <>
//                         <td className="p-4 font-medium text-slate-800">
//                           {item.name}
//                         </td>
//                         <td className="p-4 text-slate-500">
//                           {item.email}
//                         </td>
//                         <td className="p-4">
//                           <span className="px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-600 font-medium">
//                             {item.role}
//                           </span>
//                         </td>
//                       </>
//                     )}

//                     {/* APPLICATIONS */}
//                     {reportType === "applications" && (
//                       <>
//                         <td className="p-4 font-medium text-slate-800">
//                           {item.userId}
//                         </td>
//                         <td className="p-4 text-slate-500">
//                           {item.ApplicationType}
//                         </td>
//                         <td className="p-4">
//                           <span
//                             className="px-3 py-1 text-xs rounded-full text-white font-medium shadow-sm"
//                             style={{
//                               background: getStatusColor(item.status),
//                             }}
//                           >
//                             {item.status}
//                           </span>
//                         </td>
//                       </>
//                     )}

//                     {/* DOCUMENTS */}
//                     {reportType === "documents" && (
//                       <>
//                         <td className="p-4 font-medium text-slate-800">
//                           {item.DocumentType}
//                         </td>
//                         <td className="p-4 text-slate-500">
//                           {item.rejectionReason || "—"}
//                         </td>
//                         <td className="p-4">
//                           <span
//                             className="px-3 py-1 text-xs rounded-full text-white font-medium"
//                             style={{
//                               background: getStatusColor(item.status),
//                             }}
//                           >
//                             {item.status}
//                           </span>
//                         </td>
//                       </>
//                     )}

//                   </tr>
//                 ))}

//               </tbody>
//             </table>

//           </div>
//         </div>
//       )}

//       {/* ================= DASHBOARD (UNCHANGED) ================= */}
//       {reportType === "summary" && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//           <div className="bg-white p-5 rounded-xl shadow border">
//             <FaUsers /> {summary.totalUsers}
//           </div>

//           <div className="bg-white p-5 rounded-xl shadow border">
//             <FaPassport /> {summary.totalApplications}
//           </div>

//           <div className="bg-white p-5 rounded-xl shadow border">
//             <FaFileAlt /> {summary.totalDocuments}
//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default AdminReport;