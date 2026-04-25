import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

import Login from "./component/login"
import Contact from "./pages/contact"
import Services from "./pages/Services"
import About from "./pages/About.jsx"
import Navbar from "./pages/Navbar"
import { useDispatch } from "react-redux"
 
import AdminDashboard from "./component/AdminDashboard"
import UserDashboard from "./component/UserDashboard.jsx"
import { Provider, useSelector } from "react-redux"
import AppStore from "./utils/AppStore"
 
import Body from './pages/Body.jsx';
import PublicRoute from "./component/PublicRoute.jsx"
import { useEffect } from "react"
import { BASE_URL_API } from "./utils/constant.js"
import axios from "axios"
import { addUser } from "./utils/UserSlice.jsx"
import Profile from "./component/Profile.jsx"
import { useLocation } from "react-router-dom";
import ManageUsers from "./component/ManageUsers.jsx"
import AllApplicationAdmin from "./component/AllApplicationAdmin.jsx"
import ViewUser from "./component/ViewUser.jsx"
import UserSidebar from "./component/UserSidebar.jsx"
import NewApplication from "./component/user/NewApplication.jsx"
import MyApplications from "./component/user/MyApplications.jsx"
// import UploadDocument from "./component/UploadDocument.jsx"
import TrackStatus from "./component/user/TrackStatus.jsx"
import Support from "./component/user/Support.jsx"
import UploadDocument from "./component/user/UploadDocument.jsx"
import UserDash from "./component/user/UserDash.jsx"
import ApprovalLetter from "./component/ApprovalLetter.jsx"
import SearchApplication from "./component/SearchApplication.jsx"

import AdminReport from './component/AdminReport.jsx'


 
   function AppWrapper({ children }) {
    const location = useLocation();
  const dispatch = useDispatch();
  const { data: user, loading } = useSelector((store) => store.user);
  const navigate = useNavigate();

  // ✅ Load user from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          BASE_URL_API + "/profile/view",
          { withCredentials: true }
        );

        dispatch(addUser(res.data.data));
      } catch (err) {
        dispatch(addUser(null)); // 🔥 important
      }
    };

    fetchUser();
  }, [dispatch]);

  // ✅ Redirect AFTER loading finished
  // useEffect(() => {
  //   if (!loading && user) {
  //     if (user.role === "admin") {
  //       navigate("/adminDashbaord"); //{ replace: true }
  //     } else if (user.role === "user") {
  //       navigate("/userDashboard"); //{ replace: true }
  //     }
  //   }
  // }, [user, loading, navigate]);
useEffect(() => {
  if (!user) return;

  // ✅ ONLY redirect if user is on home page
  if (location.pathname === "/") {
    if (user.role === "admin") {
      navigate("/adminDashbaord");
    } else if (user.role === "user") {
      navigate("/userDashboard");
    }
  }
}, [user, location.pathname]);

  // 🔥 IMPORTANT: wait until loading finished
  if (loading) return null;

  return children;
}

function App() {
 
  return (
//  <Provider store={AppStore}>
//   <AppWrapper>
//     <div className="bg-[var(--color-background)]">
//    <BrowserRouter>
//        {/* <Navbar /> */}

//    <Routes>
    
//     <Route path="/" element={<Body/>} />
     
//     {/* <Route  path="/login" element={<Login/>} /> */}
 

//     <Route path="/contact" element={<Contact/>} />
//     {/* <Route  path="/signup" element={<Login/>}/> */}
//     <Route path="/services" element={<Services/>} />
//     <Route path="/about" element={<About/>} />
//     <Route path="/UserDashboard" element={<UserDashboard/>} />
//     <Route path="/adminDashbaord" element={<AdminDashboard/>} />
  
//   <Route
//   path="/login"
//   element={
//     <PublicRoute>
//       <Login />
//     </PublicRoute>
//   }
// />

// <Route
//   path="/signup"
//   element={
//     <PublicRoute>
//       <Login />
//     </PublicRoute>
//   }
// />

 
 
    
//    </Routes>
   
//    </BrowserRouter>
//  </div>
//   </AppWrapper>
//  </Provider>

 <Provider store={AppStore}>
      <BrowserRouter>
        <AppWrapper>
          <div className="bg-[var(--color-background)]">
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
          
              <Route path="/adminDashbaord" element={<AdminDashboard />} >
              
                 {/* <Route index element={<Profile />} />   */}
                 
              <Route path="" element={   <AdminReport/>  }/>
              <Route path="profile" element={<Profile/>} />
              <Route path="manage/users" element={ <ManageUsers/>} />
              <Route path="all/application" element={ <AllApplicationAdmin/>} />
              <Route path="/adminDashbaord/all/application/view/user" element={ <ViewUser/>} />
              <Route path="search/application" element={ <SearchApplication/>} />
              <Route path="verify/document" element={ <div>verifeied Document</div>} />
              <Route path="report" element={   <AdminReport/>  }/>
              
              </Route>

{/*  <NavLink to="newApplication">NewApplication</NavLink>
      <NavLink to="MyApplications">MyApplications</NavLink>
      <NavLink to="UploadDocument">UploadDocument</NavLink>
      <NavLink to="TrackStatus">TrackStatus</NavLink>
      <NavLink to="Support">Support</NavLink>*/}

    <Route path="/UserDashboard" element={<UserDashboard />} >
    
  <Route path=""  element={<UserDash/>} />
  <Route path="newApplication"  element={<NewApplication/>} />
  <Route path="profile"  element={<Profile/>} />
  <Route path="MyApplications"  element={<MyApplications/>} />
  <Route path="approval-letter"  element={<ApprovalLetter/>} />
  <Route path="UploadDocument"  element={<UploadDocument/>} />
  <Route path="TrackStatus"  element={<TrackStatus/>} />
  <Route path="Support"  element={<Support/>} />
  {/* <Route path="newApplication"  element={<NewApplication/>} /> */}
    

     <Route
  path="approval-letter"
  element={<ApprovalLetter />}
/>
    </Route>
    {/* <Route
  path="/userDashboard/approval-letter"
  element={<ApprovalLetter />}
/> */}
              

              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />

              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
            </Routes>
          </div>
        </AppWrapper>
      </BrowserRouter>
    </Provider>
  )
}

export default App
