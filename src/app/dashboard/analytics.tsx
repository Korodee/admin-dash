import React from "react";
import { RiCoinLine, RiUserSmileLine } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { AnalyticsProps } from "@/interfaces/analytics";
import { useQuery } from "@tanstack/react-query";
import { authAxios } from "@/utils/axiosConfig";
const Analytics = () => {
    const { data: analyticsData, isPending } = useQuery({
        queryKey: ["analytics"],
        queryFn: async () => {
            const res = await authAxios.get("/analytics");
            return res.data.data as AnalyticsProps;
        },
    });
    return (
        <div className="flex gap-3 mb-10">
            <div
                className={`w-full p-4 h-[160px] flex flex-col justify-between rounded-[20px] bg-[#430099] bg-opacity-10`}
            >
                <div className="flex justify-between items-center">
                    <p className={`text-[#430099] text-base font-semibold`}>
                        Total Sign Up
                    </p>
                    <div
                        className={`rounded-full flex items-center justify-center p-2 bg-[#430099] bg-opacity-30`}
                    >
                        <RiUserSmileLine color="#430099" height={"22.5px"} />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <p className={`text-[#430099] text-4xl font-semibold`}>
                        {analyticsData?.totalSignUps.toLocaleString() ?? "--"}
                    </p>
                    <div className={`rounded-[20px] px-2 py-1 p-1 bg-white`}>
                        <div className="flex items-center">
                            <FiArrowDownLeft color="#DC2626" height={"7px"} />
                            <p className="text-[#DC2626] text-xs font-medium">
                                {" "}
                                2.30%
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`w-full p-4 h-[160px] flex flex-col justify-between rounded-[20px] bg-[#00993D] bg-opacity-10`}
            >
                <div className="flex justify-between items-center">
                    <p className={`text-[#00993D] text-base font-semibold`}>
                        Total Transactions
                    </p>
                    <div
                        className={`rounded-full flex items-center justify-center p-2 bg-[#00993D] bg-opacity-30`}
                    >
                        <RiCoinLine color="#00993D" height={"22.5px"} />{" "}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <p className={`text-[#00993D] text-4xl font-semibold`}>
                        {analyticsData?.totalTransactionsNo.toLocaleString() ??
                            "--"}
                    </p>
                    <div className={`rounded-[20px] px-2 py-1 p-1 bg-white`}>
                        <div className="flex items-center">
                            <p className="text-[#10B981] text-xs font-medium">
                                {" "}
                                2.3%
                            </p>
                            <FiArrowUpRight color="#10B981" height={"7px"} />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`w-full p-4 h-[160px] flex flex-col justify-between rounded-[20px] bg-[#F47301] bg-opacity-10`}
            >
                <div className="flex justify-between items-center">
                    <p className={`text-[#F47301] text-base font-semibold`}>
                        Total Transaction Volume ($)
                    </p>
                    <div
                        className={`rounded-full flex items-center justify-center p-2 bg-[#F47301] bg-opacity-30`}
                    >
                        <IoReceiptOutline color="#F47301" height={"22.5px"} />{" "}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <p className={`text-[#F47301] text-4xl font-semibold`}>
                        £{" "}
                        {analyticsData?.totalTransactionsVol.toLocaleString() ??
                            "--"}
                    </p>
                    <div className={`rounded-[20px] px-2 py-1 p-1 bg-white`}>
                        <div className="flex items-center">
                            <p className="text-[#10B981] text-xs font-medium">
                                {" "}
                                5.3%
                            </p>
                            <FiArrowUpRight color="#10B981" height={"7px"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
