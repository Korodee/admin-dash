import axios, { AxiosError } from "axios";

const authAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});

authAxios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        /**
         * Do something in case the response returns an error code [3**, 4**, 5**] etc
         * For example, on token expiration retrieve a new access token, retry a failed request etc
         */
        const { response } = error;

        if (!response) {
            console.log("Internet connection is slow");
        }

        // if (response && response.status === 403) {
        //   return (window.location.href = '/forbidden');
        // }

        if (response && response.status === 401) {
            return (window.location.href = "/auth/login");
        }
        return Promise.reject(error);
    }
);

export default authAxios;
