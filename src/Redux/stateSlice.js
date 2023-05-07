import { createSlice } from "@reduxjs/toolkit";

const stateSlice =createSlice({
    name:"task",
    initialState:{
        productDetails:[]
    },
    reducers:{
        details:(state,action)=>{
            state.productDetails=action.payload;
        },
    },
});
export const{details}=stateSlice.actions;
export default stateSlice.reducer