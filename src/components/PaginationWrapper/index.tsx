import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PaginationWrapper = () => {
    return (
        <div className="pt-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <p className="text-sm text-[#84858E] font-semibold">Show</p>
                    <select className="border border-[#D0CDD3] font-medium px-1 bg-white text-base text-[#9F9C98] rounded-[24px] focus-visible:border-[#9F9C98] focus-visible:outline-none">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <p className="text-sm text-[#84858E] font-semibold">
                        Rows per page
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <div className="bg-white border border-[#D0CDD3] p-1 rounded-full">
                            <MdKeyboardArrowLeft
                                color="#78726D"
                                height={"5.2px"}
                            />
                        </div>
                        <p className="text-[#9F9C98] text-sm font-medium">
                            Prev
                        </p>
                    </div>
                    <div className="flex gap-1 rounded-[25px] items-center bg-white border border-[#D0CDD3] py-1 px-2">
                        <div className="w-5 h-5 flex items-center cursor-pointer justify-center rounded-full bg-[#F47301]">
                            <p className="text-base text-white">1</p>
                        </div>
                        <div className="w-5 h-5 flex items-center cursor-pointer justify-center rounded-full hover:bg-[#F47301]">
                            <p className="text-base text-[#9F9C98] p-1 hover:text-[#fff]">
                                2
                            </p>
                        </div>
                        <div className="w-5 h-5 flex items-center cursor-pointer justify-center rounded-full hover:bg-[#F47301]">
                            <p className="text-base text-[#9F9C98] p-1 hover:text-[#fff]">
                                3
                            </p>
                        </div>
                        <div className="w-5 h-5 flex items-center cursor-pointer justify-center rounded-full hover:bg-[#F47301]">
                            <p className="text-base text-[#9F9C98] p-1 hover:text-[#fff]">
                                4
                            </p>
                        </div>
                        <div className="px-1 rounded-full bg-transparent">
                            <p className="text-base text-[#9F9C98] p-1">...</p>
                        </div>
                        <div className="w-5 h-5 flex items-center cursor-pointer justify-center rounded-full hover:bg-[#F47301]">
                            <p className="text-base text-[#9F9C98] p-1 hover:text-[#fff]">
                                13
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <p className="text-[#9F9C98] text-sm font-medium">
                            Next
                        </p>
                        <div className="bg-white border border-[#D0CDD3] p-1 rounded-full">
                            <MdKeyboardArrowRight
                                color="#78726D"
                                height={"5.2px"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginationWrapper;
