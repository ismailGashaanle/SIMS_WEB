// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Outlet, useNavigate } from 'react-router'
// import Login from './login'
// import axios from 'axios'
// import { BASE_URL_API } from '../utils/constant'
// import { addUser } from '../utils/UserSlice'
// import Profile from './profile'
// import EditProfile from './EditProfile'
// import Header from './Header'
// import AdminSidebar from './AdminSidebar'

import { Outlet, useNavigate } from "react-router";
import AdminSidebar from "./AdminSidebar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { addnav } from "../utils/NavbarSlice";
import Profile from "./Profile";

 

// const AdminDashboard = () => {
//   const navigate=useNavigate();
//      const user = useSelector((store)=>store.user?.data);


//    useEffect(()=>{
//      if(user===null){
//         navigate("/")
//         return
//     }
        
//    },[user])
    
//   return !user?<Login/>:(
//     <div>
//      <Header/>
//       <div className='w-full'>
//         <AdminSidebar/>
//        <div className='flex-1'>
//     <Outlet/>
//   </div>
//         {/* <Profile/> */}
       
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard

 const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user?.data);
  const loading = useSelector((store) => store.user?.loading);
  

  // useEffect(() => {
  //   if (!loading && !user) {
  //     navigate("/");
  //   }
  // }, [user, loading]);

  // useEffect(()=>{
  //   if(user.role !=="admin"){
  //     navigate("/");
  //   }
  // })
  // if (loading) return null;


    useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  if (loading) return null;
  if (!user) return null;

  //  const nav =useSelector((store)=>store?.nav?.nav);
  // const dispatch =useDispatch();
  // console.log(nav)
  // useEffect(()=>{
  //   dispatch(addnav())
  // })
  return  (
    <div className="w-full flex flex-col ">
      <Header className="w-full" />
     
      <div className="flex w-full">
        <div className="w-[17%] bg-red-400"><AdminSidebar  /></div>
        <div className="w-full   px-6  p-4">
        
          <Outlet   />
        </div>
      </div>
    </div>
  );
};


export default AdminDashboard