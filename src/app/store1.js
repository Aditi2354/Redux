import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../features/counter/messageSlice'
export const store1 = configureStore({
    reducer:{
      message:messageReducer 
    }
})