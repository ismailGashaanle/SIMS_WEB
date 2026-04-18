 
import Navbar from './Navbar'
import Hero from './hero'
import Services from './Services'
import About from './About'
import Contact from './contact'
import Footer from './Footer'
import { Outlet, useNavigate} from 'react-router-dom'
 
import UserDashboard from './../component/UserDashboard';
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL_API } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/UserSlice'
import Login from '../component/login'
 

 
const Body = () => {

    const  user = useSelector((store)=>store?.user.data)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if(user){
        if(user.role ==="admin"){
            navigate("/adminDashbaord")
        }
        else if(user.role ==="user"){
            navigate("/userDashboard")
        }
        else{
            navigate("/")
        }
    }

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

 