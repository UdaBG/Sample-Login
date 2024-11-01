import { createSlice } from '@reduxjs/toolkit';




export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        loginDetails: {
            username: '',
            password: '',
        },
    },
    reducers: {
        UpdateUserName: (state, action) => {
            console.log("Entered to Update User Name");
            state.loginDetails.username = action.payload;
            console.log("Username:", action.payload);
        },
        UpdatePassword: (state, action) => {
            console.log("Entered to Update Password");
            state.loginDetails.password = action.payload;
            console.log("Password:", action.payload);
        },
        ResetLoginSate: (state) => {
            state.loginDetails = {
                username: '',
                password: '',
            };
        },
    },
});

export const { UpdateUserName, UpdatePassword, ResetLoginSate } = LoginSlice.actions;
export default LoginSlice.reducer;
