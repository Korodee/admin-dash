"use client";
import styles from "./side-bar.module.scss";
import logo from "@/assets/img/logoWhite.svg";
import mobileLogo from "@/assets/img/logoElement.svg";
import mobileMenu from "@/assets/icons/mobile-side-bar.svg";
import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
// import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
    Dashboard,
    KycLogs,
    LoansLog,
    Settings,
    TransactionLogs,
    UserLogs,
} from "./icons";
import useComponentVisible from "@/hooks/useComponentVisible";
import useWindowSize from "@/hooks/useWindowSize";

const navList = [
    {
        path: "/dashboard",
        label: "Dashboard",
        icon: <Dashboard />,
    },
    {
        path: "/transactions",
        label: "Transactions Log",
        icon: <TransactionLogs />,
    },
    {
        path: "/users",
        label: "Users Log",
        icon: <UserLogs />,
    },
    {
        path: "/loans",
        label: "Loans Log",
        icon: <LoansLog />,
    },
    {
        path: "/kyc",
        label: "KYC Log",
        icon: <KycLogs />,
    },

    {
        path: "/settings",
        label: "Settings",
        icon: <Settings />,
    },
];

const SideBar = () => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    const pathname = usePathname();
    const router = useRouter();
    const windowSize = useWindowSize();

    const [showSideBar, setShowSideBar] = useState(false);

    useEffect(() => {
        if (windowSize.width > 1300) {
            setShowSideBar(true);
        } else {
            setShowSideBar(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize.width]);

    useEffect(() => {
        if (windowSize.width <= 1300) {
            setShowSideBar(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    useEffect(() => {
        if (windowSize.width <= 1300 && !isComponentVisible) {
            setShowSideBar(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isComponentVisible]);

    const handleShow = () => {
        setShowSideBar(true);
        setIsComponentVisible(true);
    };

    return (
        <>
            <div className={styles["mobile-menu"]} onClick={handleShow} ref={ref}>
                <Image src={mobileMenu} alt="menu" />
            </div>

            {showSideBar && (
                <div className={styles["side-bar-container"]}>
                    <div className={styles["layout"]}>
                        <div
                            className={styles["logo"]}
                            onClick={() => router.push("/dashboard")}
                        >
                            <Image
                                src={logo}
                                alt="logo"
                                className={styles["desktop"]}
                            />
                            <Image
                                src={mobileLogo}
                                alt="mobileLogo"
                                className={styles["mobile"]}
                            />
                        </div>

                        <div className={styles["side-bar-items"]}>
                            {navList.map((item, index) => {
                                return (
                                    <div key={index} className="mb-[10px]">
                                        <span
                                            className={`${
                                                item.path === pathname
                                                    ? styles["nav-active"]
                                                    : styles["nav-non-active"]
                                            } cursor-pointer`}
                                            style={{ textDecoration: "none" }}
                                            onClick={() =>
                                                router.push(item?.path)
                                            }
                                        >
                                            <div
                                                className={
                                                    styles["nav-items-content"]
                                                }
                                            >
                                                <p className={styles["icon"]}>
                                                    {item.icon}
                                                </p>
                                                <p className={styles["label"]}>
                                                    {item.label}
                                                </p>
                                            </div>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SideBar;
