 
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Contact from './contact'
import Footer from './Footer'
import { Outlet, useNavigate} from 'react-router-dom'
 
import UserDashboard from '../component/UserDashboard';
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL_API } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/UserSlice'
import Login from '../component/login'
import { addVideo } from '../utils/VideoSlice'
 

 
const Body = () => {

    const  user = useSelector((store)=>store?.user.data)
    const navigate = useNavigate();
    const dispatch = useDispatch();
      const  videoslice = useSelector((store)=>store.videoslice);
      console.log("videoslice",videoslice)

//      useEffect(() => {
//   if (!videoslice) {
//     dispatch(addVideo("https://www.youtube.com/embed/OJyFrU526Zo?autoplay=1&mute=1&loop=1&playlist=OJyFrU526Zo"));
//   }
// }, [videoslice, dispatch]);

useEffect(() => {
  const storedVideo = localStorage.getItem("video");

  if (storedVideo) {
    // Already saved → use it
    dispatch(addVideo(storedVideo));
  } else {
    // First time only
    const url = "https://www.youtube.com/embed/OJyFrU526Zo?autoplay=1&mute=1&loop=1&playlist=OJyFrU526Zo";
    
    dispatch(addVideo(url));
    localStorage.setItem("video", url);
  }
}, [dispatch]);
    // if(user){
    //     if(user.role ==="admin"){
    //         navigate("/adminDashbaord")
    //     }
    //     else if(user.role ==="user"){
    //         navigate("/userDashboard")
    //     }
    //     else{
    //         navigate("/")
    //     }
    // }
    useEffect(() => {
  if (user?.role === "admin") {
    navigate("/adminDashbaord");
  } else if (user?.role === "user") {
    navigate("/userDashboard");
  }
}, [user]);

    const fetchUserProfile = async()=>{
        if(user) return
        try{
            const res = await axios.get(BASE_URL_API + "/profile/view",{withCredentials:true});

             dispatch(addUser(res.data.data))
             console.log("user",res.data.data)

        }catch(err){

        }
    }
    
    useEffect(()=>{
   fetchUserProfile();
    },[])



  return (
   
     <div>
         
        <Navbar/> 
         <Hero/>
        <Services/>
        <About/>
        <Contact/>
        <Outlet/>
        {/* <Login/> */}
        <Footer/>
      
    </div>
   
  )
}

export default Body

 