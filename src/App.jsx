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
 
   function AppWrapper({ children }) {
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
  useEffect(() => {
    if (!loading && user) {
      if (user.role === "admin") {
        navigate("/adminDashbaord", { replace: true });
      } else if (user.role === "user") {
        navigate("/userDashboard", { replace: true });
      }
    }
  }, [user, loading, navigate]);

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
              <Route path="/UserDashboard" element={<UserDashboard />} />
              <Route path="/adminDashbaord" element={<AdminDashboard />} />

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
