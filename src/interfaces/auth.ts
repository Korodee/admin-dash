

export interface AuthStateProps {
    logoutState: boolean;
    isAuthenticated: boolean;
    // userDetails: IUserProfile | null;
    token: string;
    loadingAuth: boolean;
    customerId?: number;
}


export interface SignInProps{
    email: string,
    password: string
}

export interface AuthTokenProps{
    token: string;
    expiresAt: number;         
}



// interface LoginRespProps {
//     jwt: IAuthToken,
//     refreshToken: string,
//     user: IUserProfile
// }

// export type ILoginResponse = APIResponse<ILoginResp>; 