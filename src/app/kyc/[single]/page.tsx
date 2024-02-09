"use client";
import PrivateLayout from "@/components/AuthorizedRoute";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ProfileBG from "../../../assets/img/profileBG.png";
import NigeriaFlag from "../../../assets/svg/Country.svg";
import Image from "next/image";
import { RiArticleFill } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import { FiArrowUpRight, FiHash } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdToday } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import React, { useState } from "react";
import { FaExclamation } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { authAxios } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { KycProps } from "@/interfaces/kyc";
import { IoIosClose } from "react-icons/io";
import Spinner from "@/components/Spinner";
import Popover from "@/components/PopOver";
import Modal from "@/components/Modal";

const SingleKycDetails = ({ params }: { params: { single: string } }) => {
    const router = useRouter();
    const { data: kycData, isPending } = useQuery({
        queryKey: ["singleTransaction"],
        queryFn: async () => {
            const res = await authAxios.get(`/kyc/${params.single}`);
            return res.data.data as KycProps;
        },
    });
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
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
                        KYC Details
                    </p>
                </div>

                {kycData ? (
                    <div className="w-[60%] mx-auto border border-[#C6C5C4] rounded-[12px]">
                        <div className="flex items-center justify-center">
                            <Image
                                src={ProfileBG}
                                alt={"ProfileBG"}
                                className=""
                            />
                        </div>
                        <div className="mx-auto mt-6 flex w-[85%] justify-between">
                            <div className="-mt-[3.5rem] w-[90px] h-[90px] rounded-full bg-black"></div>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <h1 className="text-[#180C02] text-[18px] font-[700]">
                                        Eskelebe Tuelebebe
                                    </h1>
                                    <p className="bg-[#EAFDEE] p-1 rounded-[200px] text-[#09866F]">
                                        student
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className=" items-center">
                                        <div>
                                            <div className="p-1 h-6 w-6 bg-[#BCE8C0] rounded-full">
                                                <div className="p-1 h-4 w-4 bg-[#1EB12D] rounded-full">
                                                    <div className="h-2 w-2 bg-[#18902C] rounded-full">
                                                        <FaCheck className="h-[5px] pt-[2px] w-full text-[#fff]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="text-[#78726D]">
                                        whyareyourunning@gmail.com
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-[#9F9C98] text-[14px]">
                                    Nationality
                                </h1>
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src={NigeriaFlag}
                                        alt={"ProfileBG"}
                                        className=""
                                    />
                                    <h1 className="text-[#78726D]">Nigerian</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-[#9F9C98] text-[14px]">
                                    Gender
                                </h1>
                                <h1 className="text-[#78726D]">Female</h1>
                            </div>
                        </div>
                        <div className="w-[85%] my-8 mx-auto border border-[#C6C5C4] rounded-[12px]">
                            <div className="flex items-center p-4 justify-between">
                                <div className="gap-3 items-center flex">
                                    <h1 className="text-[#180C02] font-[700]">
                                        Kyc Details
                                    </h1>
                                    <div className="flex border gap-2 items-center border-[#FCD34D] bg-[#FFFBEB] p-1 rounded-[6px]">
                                        <div>
                                            <div className="p-1 h-6 w-6 bg-[#FEF3C7] rounded-full">
                                                <div className="p-1 h-4 w-4 bg-[#FDE68A] rounded-full">
                                                    <div className="h-2 w-2 bg-[#FBBF24] rounded-full">
                                                        <FaExclamation className="h-[5px] pt-[2px] w-full text-[#fff]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-[14px]">Pending</h3>
                                    </div>
                                </div>
                                <div className="">
                                    <IoIosMore />
                                </div>
                            </div>
                            <hr />
                            <div className=" p-3 bg-[#F5F5F580]">
                                <div className="flex items-center ">
                                    <div className="w-[33%] gap-2 items-center flex">
                                        <div className="border-[#C6C5C4] bg-[#fff] border p-2 rounded-[6px] ">
                                            <RiArticleFill />
                                        </div>
                                        <div>
                                            <h1 className="text-[14px] text-[#BDBDBD]">
                                                Document Type
                                            </h1>
                                            <div className="flex items-center gap-[3px]">
                                                <h1 className="text-[14px] underline text-[#F47301]">
                                                    {kycData.documentType}
                                                </h1>
                                                <FiArrowUpRight
                                                    color="#F47301"
                                                    height={"11px"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[33%] gap-2 items-center flex">
                                        <div className="border-[#C6C5C4] bg-[#fff] border p-2 rounded-[6px] ">
                                            <FiHash />
                                        </div>
                                        <div>
                                            <h1 className="text-[14px] text-[#BDBDBD]">
                                                Document Number
                                            </h1>
                                            <div className="flex items-center gap-[3px]">
                                                <h1 className="text-[14px] text-[#161616]">
                                                    {kycData.documentNumber}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[33%] gap-2 items-center flex">
                                        <div className="border-[#C6C5C4] bg-[#fff] border p-2 rounded-[6px] ">
                                            <FaPhoneAlt />
                                        </div>
                                        <div>
                                            <h1 className="text-[14px] text-[#BDBDBD]">
                                                Phone Number
                                            </h1>
                                            <div className="flex items-center gap-[3px]">
                                                <h1 className="text-[14px] text-[#161616]">
                                                    {"--"}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3 bg-[#F5F5F580]">
                                <div className="flex items-center ">
                                    <div className="w-[33%] gap-2 items-center flex">
                                        <div className="border-[#C6C5C4] bg-[#fff] border p-2 rounded-[6px] ">
                                            <MdToday />
                                        </div>
                                        <div>
                                            <h1 className="text-[14px] text-[#BDBDBD]">
                                                Date of Birth
                                            </h1>
                                            <div className="flex items-center gap-[3px]">
                                                <h1 className="text-[14px] text-[#161616]">
                                                    1990-05-15
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[66%] gap-2 items-center flex">
                                        <div className="border-[#C6C5C4] bg-[#fff] border p-2 rounded-[6px] ">
                                            <HiLocationMarker />
                                        </div>
                                        <div>
                                            <h1 className="text-[14px] text-[#BDBDBD]">
                                                Address
                                            </h1>
                                            <div className="flex items-center gap-[3px]">
                                                <h1 className="text-[14px] text-[#161616]">
                                                    123 Main Street, Cityville,
                                                    State, ZIP
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[85%] my-8 mx-auto">
                            <h1>Passport</h1>
                            <div className="mt-2 border border-dashed border-[#5FC381] rounded-[12px] min-h-[300px]">
                                <img
                                    src={kycData.documentUrl}
                                    alt={"PassportImg"}
                                    className="my-10 mx-auto w-[80%] h-[100%]"
                                />
                            </div>
                            <div className="flex font-[600] mt-6 mx-auto justify-end gap-8">
                                <button
                                    className="text-[#F47301]"
                                    onClick={openModal}
                                >
                                    Reject KYC
                                </button>
                                <button
                                    className="text-[#FFF] p-3 bg-[#F47301] rounded-[8px]"
                                    onClick={openModal}
                                >
                                    Approve KYC
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>{isPending ? <Spinner /> : null}</>
                )}

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="flex justify-between">
                        {" "}
                        <h1 className="text-[20px] font-[700]">
                            Leave a Comment
                        </h1>
                        <button
                            onClick={closeModal}
                            className="text-[24px] font-[700]"
                        >
                            <IoIosClose />
                        </button>
                    </div>
                    <h1 className="mt-3 text-[#4B525A] text-[13px]">
                        Let the User know why you accepted/rejected their KYC
                        Verification
                    </h1>
                    <div className="mt-6">
                        <h1 className="12px">Admin's Message</h1>
                        <textarea
                            className="text-[#98A2B3] border border-[#D0D5DD] w-full h-[150px] p-4 mt-2 rounded-[6px]"
                            placeholder="Your comment here"
                        />
                    </div>
                    <h1 className="pt-[2px] text-[#667185]">0/50</h1>
                    <div className="flex mt-8 mx-auto justify-end gap-8">
                        <button className="text-[#F47301]">Skip Comment</button>
                        <button className="text-[#FFF] py-3 px-12 bg-[#F47301] rounded-[8px]">
                            Submit
                        </button>
                    </div>
                </Modal>
            </div>
        </PrivateLayout>
    );
};

export default SingleKycDetails;
