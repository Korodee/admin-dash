// import { callConfig } from "@/components/Layout/AppLayout";
// import { logout } from "@/redux/slices/auth";
// import { checkAuthToken } from "@/services/authService";
import axios from "axios";
import { Dispatch } from 'react';

export const authAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    responseType: 'json',
});

export const publicAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    responseType: 'json',
});

// Add a response interceptor
authAxios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
  
// Add a response interceptor
authAxios.interceptors.request.use(function (config:any) {
    let authToken = JSON.parse(localStorage.getItem( 'auth_token') as string).token
    config.headers['Authorization'] = 'Bearer ' + authToken;
    return config;
}, function (error) {
    return Promise.reject(error);
});
  
// authAxios.interceptors.request.use(async (req: any) => {
//     const state = callConfig.call?.state;
//     const token = state?.Auth.token;
//     const dispatch= callConfig.call.dispatch

//     if(!token){
//         return dispatch?.(logout({}))
//     }

//     try {
//         const {
//             newToken,
//             oldToken,
//             logout: shouldLogout,
//         } = await checkAuthToken(dispatch as Dispatch<any>, token);

//         if (newToken) {
//             req.headers.authorization = `Bearer ${newToken}`;
//             return req;
//         }

//         if (oldToken) {
//             return req;
//         }

//         if (shouldLogout) {
//             const controller = new AbortController();
//             const conf = {
//                 ...req,
//                 signal: controller.signal,
//             };

//             controller.abort();
//             dispatch?.(logout({}));

//             return conf;
//         }
//     } catch (error) {
//         return dispatch?.(logout({}));
//     }

//     return req;
// });