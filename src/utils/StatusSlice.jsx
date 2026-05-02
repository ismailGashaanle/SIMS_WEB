import { createSlice } from "@reduxjs/toolkit";

 
const StatusSlice = createSlice({

    name:"Status",
    initialState:"pending",

    reducers:{
        addStatus:(state,action)=>{
          return  action.payload
        }
    }
})
  


export default StatusSlice.reducer

export const {addStatus}=StatusSlice.actions