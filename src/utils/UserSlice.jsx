import { createSlice } from "@reduxjs/toolkit";


// const UserSlice=createSlice({

//     name:"user",
//     initialState:undefined,

//     reducers:{
//         addUser:(state,action)=>{
//             return action.payload;
//         }

//     }
// })
const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: true
  },

  reducers: {
    addUser: (state, action) => {
      state.data = action.payload
      state.loading = false
    }
  }
});


export default UserSlice.reducer;

export const {addUser}= UserSlice.actions
