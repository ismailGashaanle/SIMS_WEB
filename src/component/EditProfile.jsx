import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { BASE_URL_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/UserSlice'

const EditProfile = () => {

    const dispatch =useDispatch();

    
        const firstName=useRef(null);
        const lastName=useRef(null);
        const password=useRef(null);
        const email=useRef(null);
        const role=useRef(null);
        const confirmpassword=useRef(null);
        const photoImage=useRef(null);
        const phone=useRef(null);
        const gender=useRef(null);
        const dateOfBirth=useRef(null);

    // const UpdateProfile= async(e)=>{
    //     e.preventDefault();
    //    try{

    //     const payload={
    //         firstName:firstName?.current?.value || undefined,
    //         lastName:lastName?.current?.value || undefined,
    //        photoImage:photoImage?.current?.value || undefined, 
    //        phone:phone?.current?.value || undefined,
    //        gender:gender?.current?.value || undefined,
    //        dateOfBirth:dateOfBirth?.current?.value || undefined
    //     }
    //      const res = await axios.patch(BASE_URL_API + "/profile/edit",
            
    //       {payload}

    //     ,{withCredentials:true})
    //      dispatch(addUser(res.data.data))
    //    }catch(err){
    //     console.log(err)
    //    }
    // }


    // useEffect(()=>{
    //     UpdateProfile();
    // })
//    const UpdateProfile = async (e) => {
//   e.preventDefault()

//   try {
//     const payload = {
//       firstName: firstName?.current?.value || undefined,
//       lastName: lastName?.current?.value || undefined,
//      photoImage: photoImage?.current || undefined,
//       phone: phone?.current?.value || undefined,
//       gender: gender?.current?.value || undefined,
//       dateOfBirth: dateOfBirth?.current?.value || undefined
//     }

// //     if (photoImage.current) {
// //   payload("photoImage", photoImage.current)
// // }
//     const res = await axios.patch(
//       BASE_URL_API + "/profile/edit",
//       payload, // ✅ FIXED HERE
//       { withCredentials: true,
//        }
//     )

//     dispatch(addUser(res.data.data))
//   } catch (err) {
//     console.log(err.response?.data || err.message)
//   }
// }


const UpdateProfile = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    if (firstName?.current?.value)
      formData.append("firstName", firstName.current.value);

    if (lastName?.current?.value)
      formData.append("lastName", lastName.current.value);

    if (gender?.current?.value)
      formData.append("gender", gender.current.value);

    if (phone?.current?.value)
      formData.append("phone", phone.current.value);

    if (dateOfBirth?.current?.value)
      formData.append("dateOfBirth", dateOfBirth.current.value);

    // ✅ ONLY FIX HERE (photo upload)
    if (photoImage.current) {
      formData.append("photoImage", photoImage.current);
    }

    const res = await axios.patch(
      BASE_URL_API + "/profile/edit",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch(addUser(res.data.data));
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};
  return (
    <div>

        <form className='grid grid-cols-1 gap-2'>
            <label>firstName</label>
            <input   className='ring-1 ring-gray-300 py-3 rounded-md outline-[var(--secondary-Color)] transition px-3'  ref={firstName} placeholder={firstName?.current?.value} />
            <label>lastName</label>
            <input   className='ring-1 ring-gray-300 py-3 rounded-md outline-[var(--secondary-Color)] transition px-3'  ref={lastName} placeholder={lastName?.current?.value} />
            <label>gender</label>
            <input   className='ring-1 ring-gray-300 py-3 rounded-md outline-[var(--secondary-Color)] transition px-3'  ref={gender} placeholder={gender?.current?.value} />
            <label>photoImage</label>
           <input
  type="file"
  onChange={(e) => {
    photoImage.current = e.target.files[0]
  }}
/>
            <label>dateOfBirth</label>
            <input   className='ring-1 ring-gray-300 py-3 rounded-md outline-[var(--secondary-Color)] transition px-3'  ref={dateOfBirth} placeholder={dateOfBirth?.current?.value} />
            <label>phone</label>
            <input   className='ring-1 ring-gray-300 py-3 rounded-md outline-[var(--secondary-Color)] transition px-3'  ref={phone} placeholder={phone?.current?.value} />
            <button className=' text-red-400 ring-2' type='button'  onClick={UpdateProfile}>update</button>
        </form>
      
    </div>
  )
}

export default EditProfile

 