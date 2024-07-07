import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const AuthStore = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload; // Assuming action.payload contains the user data
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    },
});

export const { login, logout } = AuthStore.actions;

export default AuthStore.reducer;
