import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authAxios } from "@/utils/axiosConfig";
import { AuthStateProps } from "@/interfaces/auth";

const INITIAL_STATE: AuthStateProps = {
    logoutState: false,
    isAuthenticated: false,
    // userDetails: null,
    token: "",
    loadingAuth: true,
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: INITIAL_STATE,
    reducers: {
        onLogin(state, action: PayloadAction<{ isAuthenticated: boolean, token: string }>) {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.logoutState = false;
            // state.userDetails = action.payload.userDetails
            //   ? action.payload.userDetails
            //   : state.userDetails;
            state.token = action.payload.token;
            state.logoutState = false;
        },
        // setProfile(state, action: PayloadAction<IUserProfile>) {
        //     state.userDetails = action.payload;
        // },
        logout(state, action) {
            state.loadingAuth = false;
            state.logoutState = true;
            state.token = "";
            state.isAuthenticated = false;
            // state.userDetails = null;
            // delete authAxios.defaults.headers.common.authorization;
        },
    },
});

export const {
    onLogin,
    // setProfile,
    logout,
} = authSlice.actions;

export default authSlice.reducer;  