import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null,
}

const AuthStore = createSlice({
    name:"auth",
    initialState,
    reducers:{ 
        login:(state,action)=>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout:(state)=>{
            state.status = false;
            state.userData=null;
        }
    },
})
export const {login,logout}= AuthStore.actions; // function under reducers is called actions

export default AuthStore.reducer; 