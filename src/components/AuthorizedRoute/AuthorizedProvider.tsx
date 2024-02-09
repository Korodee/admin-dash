"use client";
// import { useAppSelector } from "@/hooks/useRedux";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AuthorizedProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    if(!isAuthenticated) {
        router.push("/sign-in") ;
    }

    return <>{children}</>
}

export default AuthorizedProvider