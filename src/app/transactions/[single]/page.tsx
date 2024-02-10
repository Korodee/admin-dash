"use client";
import PrivateLayout from "@/components/AuthorizedRoute";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import PaymentIcon from "../../../assets/svg/security.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SingleTransactionResponse } from "@/interfaces/transactions";
import Spinner from "@/components/Spinner";
import {authAxios} from "@/utils/axiosConfig";
const SingleTransactionDetails = ({
    params,
}: {
    params: { single: string };
}) => {
    const router = useRouter();
    const [transactionData, setTransactionData] =
        useState<SingleTransactionResponse | null>(null);
    const [isPending, setPending] = useState(false);
    const fetchData = async () => {
        setPending(true);
        const res = await authAxios.get(`/transaction/${params.single}`);
        setTransactionData(res.data.data);
        setPending(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <PrivateLayout>
            <div className="bg-white rounded-[14px] p-6">
                <div className="flex items-center gap-2 mb-6">
                    <button
                        className="bg-white border border-[#D0CDD3] p-1 rounded-full"
                        onClick={() => router.back()}
                    >
                        <MdOutlineKeyboardArrowLeft
                            color="#78726D"
                            height={"5.2px"}
                        />
                    </button>
                    <p className="text-xl font-medium text-[#78726D]">
                        Transaction Details
                    </p>
                </div>
                {transactionData ? (
                    <div className="border border-[#C6C5C4] px-8 py-14 rounded-[12px]">
                        <div className="w-[55%] mx-auto">
                            <div className="mb-16">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={PaymentIcon}
                                        alt={"PaymentIcon"}
                                        className=""
                                    />
                                </div>
                                <h1 className="text-[#180C02] text-[28px] font-[600] flex items-center justify-center">
                                    Payment Received
                                </h1>
                                <div className="flex items-center justify-center gap-2">
                                    <p className="text-[#888292]">
                                        {new Date(
                                            transactionData?.createdAt
                                        ).toLocaleDateString()}
                                    </p>
                                    <span className="bg-[#888292] rounded-full w-1 h-1"></span>
                                    <p className="text-[#888292]">
                                        {" "}
                                        {new Date(
                                            transactionData?.createdAt
                                        ).toLocaleTimeString()}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-3 text-[#101928]">
                                    Payment Information
                                </h1>
                                <div className="border border-[#C6C5C4] px-8 py-5 rounded-[12px]">
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Amount paid
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            £{" "}
                                            {transactionData?.originalAmount.toLocaleString()}
                                            .00
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Transaction Type
                                        </p>
                                        <p className="text-[#180C02] font-medium capitalize">
                                            {transactionData.paymentType} Fees
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Institution
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            {transactionData.institution.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8">
                                <h1 className="mb-3 text-[#101928]">
                                    Student Information
                                </h1>
                                <div className="border border-[#C6C5C4] px-8 py-5 rounded-[12px]">
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Student Name
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            {transactionData.user.firstName}{" "}
                                            {transactionData.user.lastName}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Student ID No
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            {transactionData.user.id}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Student Email
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            {transactionData.user.email}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Student Phone No
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            {transactionData.user.phoneNumber ??
                                                "--"}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Student Address
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            {transactionData.user.homeAddress ??
                                                "--"}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            KYC Status
                                        </p>
                                        <p className="text-[#180C02] font-medium capitalize">
                                            Verification Pending
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8">
                                <h1 className="mb-3 text-[#101928]">
                                    Student Information
                                </h1>
                                <div className="border border-[#C6C5C4] px-8 py-5 rounded-[12px]">
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Transaction Fees
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            £{" "}
                                            {transactionData?.processingAmount.toLocaleString()}
                                            .00
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Exchange Rate
                                        </p>
                                        <p className="text-[#180C02] font-medium">
                                            1 USD : 888.453 NGN
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Transaction Reference
                                        </p>
                                        <p className="text-[#180C02] font-medium uppercase">
                                            {transactionData.referenceId}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between items-center px-4 py-6">
                                        <p className="text-[#C6C5C4] text-[14px]">
                                            Status
                                        </p>
                                        <p className="border border-[#0D4901] bg-[#E9FBE8] px-4 py-2 rounded-[27px] text-[#0D4901] font-medium">
                                            {transactionData?.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="border mt-12 w-full bg-[#F47301]  py-3 rounded-[8px]">
                                <p className="text-[#fff] font-medium">
                                    View User Profile
                                </p>
                            </button>
                        </div>
                    </div>
                ) : (
                    <>{isPending ? <Spinner /> : null}</>
                )}
            </div>
        </PrivateLayout>
    );
};

export default SingleTransactionDetails;
