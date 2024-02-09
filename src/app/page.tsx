"use client";
import { useEffect, useState } from 'react'
// import endowdLogo from "./assets/logo.svg"
import logoBlack from "@/assets/img/logo-black.svg"
// import book from "./assets/book.svg"
import { useFormik } from 'formik'
// import * as yup from 'yup'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useMutation } from '@tanstack/react-query'
// import { ErrorToast, SuccessToast } from '@/components/Toasts'
// import { useAppDispatch } from '@/hooks/useRedux'
// import { setToken } from '@/helpers/saveToken'
import { useRouter, useSearchParams } from 'next/navigation'
// import { authAxios, publicAxios } from '@/config/axiosConfig'
// import { ILoginResponse } from '@/interfaces/auth'
// import { logout, onLogin, setProfile } from '@/redux/slices/auth'
import Link from 'next/link'
// import { PrimaryButton } from '@/components/Button'
import Image from 'next/image'


const SignIn = () => {
    const router = useRouter();
    // const dispatch = useAppDispatch();
    const searchParams = useSearchParams();

    const [showPassword, setShowPassword] = useState(false);

    // const { isLoading, mutate } = useMutation({
    //     mutationFn: (data: { email: string, password: string }) => publicAxios.post<ILoginResponse>(`/auth/login`, data),
    //     onSuccess: (data) => {
    //         dispatch(
    //             onLogin({
    //                 isAuthenticated: true,
    //                 token: JSON.stringify({
    //                     access_token: data.data.data.jwt,
    //                     refresh_token: data.data.data.refreshToken,
    //                 }),
    //             }),
    //         )
    //         dispatch(setProfile(data.data.data.user));

    //         authAxios.defaults.headers.common.authorization = `Bearer ${data.data.data.jwt}`
            
    //         setToken(data.data.data.jwt);

    //         router.push('/profile');
    //     },
    //     onError: (error: any) => {
    //         ErrorToast(error.response.data.error);
    //     }
    // });

    // const { mutate: muatateVerify } = useMutation({
    //     mutationFn: (data: { code: string | null }) => publicAxios.post(`/auth/verify/email`, data),
    //     onSuccess: () => {
    //         SuccessToast('Your email is verifed, proceed to log in');
    //     },
    //     onError: (error: any) => {
    //         ErrorToast(error.response.data.error);
    //     }
    // });

    // const validation = yup.object().shape({
    //     email: yup.string().email().required('required'),
    //     password: yup.string().nullable().required('required'),
    // });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            // dispatch(logout({}));
            // dispatch(clearPaymentInfo());
            // dispatch(clearArrearsData());
            // mutate(values);
        },
        // validationSchema: validation,
        validateOnChange: false,
        validateOnBlur: false
    });

    return (
        <div className="w-full h-full  md:border-[20px] border-white font-manrope">
                <form onSubmit={handleSubmit} autoComplete='new password' className="w-full lg:w-[50%] m-auto  pt-[54px] md:pt-[174px] px-4 md:pl-[88px] md:pr-[84px]">
                    <div className='mb-[32px] flex items-center justify-center'>
                        <Link href='/'>
                            <Image src={logoBlack} alt="endowdLogo" />
                        </Link>
                    </div>
                    <div className="w-full mt-4">
                        <label className="text-sm text-[#101928] mb-1">Email</label>
                        <input 
                            type='email'
                            name='email'
                            value={values.email} 
                            onChange={handleChange} 
                            className="w-full outline-none text-sm px-4 h-14 border border-[#D0D5DD] rounded-md" 
                            placeholder='example@email.com'
                            // autoComplete="new-password"
                        />
                        {errors.email && (
                            <p className='text-red-600 text-xs md:text-sm'>{errors.email}</p>
                        )}
                    </div>
                    <div className="w-full mt-4">
                        <label className="text-sm text-[#101928] mb-1">Password</label>
                        <div className='flex items-center px-4 h-14 border border-[#D0D5DD] rounded-md'>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={values.password} 
                                onChange={handleChange} 
                                className="w-full h-full border-0 outline-none focus:outline-0 text-sm" 
                                // autoComplete="new-password"
                            />
                            <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                {showPassword ? (
                                    <AiOutlineEye />
                                ) : (
                                    <AiOutlineEyeInvisible />
                                )}
                            </div>
                        </div>
                        {errors.password && (
                            <p className='text-red-600 text-xs md:text-sm'>{errors.password}</p>
                        )}
                    </div>

                    <div className='w-full'>
                      <button className="border mt-12 w-full bg-[#F47301] py-3 rounded-[8px] text-[white]">
                          Sign In
                      </button>
                    </div>

                    <div className='mt-[68px] md:mt-5 text-sm text-[#4B525A] flex items-center justify-center pb-[150px] md:pb-0'>
                        <p>Forgot Password? <Link href='/'><span className='text-[#F47301] font-semibold'>Recover</span></Link></p>
                    </div>
                </form>
            
        </div>
    )
}

export default SignIn
