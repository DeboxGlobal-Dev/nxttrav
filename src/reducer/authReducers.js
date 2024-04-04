import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Auth",
    initialState: {
        value: { user: {}, isAuthenticated: false }
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                value: {
                    user: action.payload.user,
                    isAuthenticated: action.payload.isAuthenticated,
                },
            };
        },
        logout: (state) => {
            localStorage.clear();
            return {
                ...state,
                value: { user: {}, isAuthenticated: false },
            };
        },
    },
});


export const {
    login,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
