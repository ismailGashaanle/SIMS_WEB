import { configureStore } from "@reduxjs/toolkit";
import UserRecucer from './UserSlice'
const AppStore =configureStore({

    reducer:{
     user:UserRecucer
    }
})

export default AppStore;