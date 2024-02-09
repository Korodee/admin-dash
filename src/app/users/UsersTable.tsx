"use client";

import AppTable from "@/components/AppTable";
import tableStyles from "@/components/AppTable/tableStyles";
import Image from "next/image";
import { TableColumn } from "react-data-table-component";
import { IoMdArrowDown, IoMdArrowUp, IoMdMore } from "react-icons/io";
import { useRouter } from "next/navigation";
import { authAxios } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner";
import { UsersProps } from "@/interfaces/users";
import Avatar from 'react-avatar';
import { ApiProps } from "@/interfaces/api";

const UsersTable = () => {
    const { data: userData, isPending } = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const res = await authAxios.get("/user");
            return res.data.data as ApiProps;
        },
    });
    const router = useRouter();
    const columns: TableColumn<UsersProps>[] = [
        {
            name: "User Name",
            sortable: true,
            cell: (row: UsersProps) => (
               
                <div className="flex gap-3 items-center">
                    {
                        // row?.profileImageUrl ?
                        // <Image
                        //     src={row?.profileImageUrl}
                        //     alt='Profile Photo'
                        //     fill
                        //     className='rounded-full object-fill'
                        // />
                        // :
                        // // <Avatar
                        // //     round
                        // //     size={'120'}
                        // //     name={`${row.firstName} ${row.lastName}`}
                        // //     style={{ cursor:'pointer' }}
                        // // />
                        <div className="w-7 h-7 rounded-full bg-black"></div>
                    } 
                    <p className="text-base capitalize font-semibold truncate w-[120px] overflow-hidden text-ellipsis text-[#333333]">
                        {row.firstName} {row.lastName}
                    </p>
                </div>
            ),
        },
        {
            name: "User ID",
            sortable: true,
            cell: (row: UsersProps) => (
                <p className="text-[#333333]">
                   {row.id}
                </p>
            ),
        },
        {
            name: "Date Joined",
            sortable: true,
            cell: (row: UsersProps) => (
                <p className="text-[#333333]">
                    {new Date(row.createdAt)
                        .toLocaleDateString()
                        .replace(/\//g, "-")}
                </p>
            ),
        },
        {
            name: "Actions",
            sortable: true,
            cell: (row: UsersProps) => (
                <div className='flex items-center bg-[#FEF7F1] p-[10px] pl-[20px] pr-[20px] rounded-[50px] '>
                    <p className='text-[#F47301] font-[700]'>View Profile </p>
                    <div className='ml-[5px] '>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.66881 2.77614L1.93109 8.51387L0.988281 7.57107L6.72601 1.83333H1.66883V0.5H9.00214V7.83333H7.66881V2.77614Z" fill="#F47301"/>
                        </svg>
                    </div>
                   
                </div>
            ),
        },
        {
            name: " ",
            width: "50px",
            sortable: true,
            cell: (row: UsersProps) => (
                <IoMdMore color="#000000" height={"18px"} />
            ),
        },
    ];


    const handleSelected = () => {};
    return (
        <div>
            {userData?.results ? (
                <>
                    <div className="border border-[#F5F5F5] rounded-[14px]">
                        <AppTable
                            onSelectedRowsChange={handleSelected}
                            columns={columns}
                            data={userData?.results}
                            isLoading={false}
                            customStyles={tableStyles}
                            withCustomPagination
                            isSelectable={false}
                            // onRowClicked={() =>
                            //     router.push(`/transactions/single`)
                            // }
                        />
                    </div>
                </>
            ) : (
                <>{isPending ? <Spinner /> : null}</>
            )}
        </div>
    );
};

export default UsersTable;
