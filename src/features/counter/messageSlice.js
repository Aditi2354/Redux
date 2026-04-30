import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    text : ""
}

export const messageSlice = createSlice({
    name:'message',
    initialState,
    reducers:{
        setText: (state)=>{
            state.text = 'how is going today'
        },
        resetState:(state)=>{
       state.text =''
        },
        changingMessage:(state,action)=>{
            state.text += action.payload
        }
    }
})
export const {setText,changingMessage,resetState} =messageSlice.actions
export default messageSlice.reducer