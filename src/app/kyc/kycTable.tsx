"use client";
import AppTable from "@/components/AppTable";
import tableStyles from "@/components/AppTable/tableStyles";
import { KycProps, KycResponse } from "@/interfaces/kyc";
// import Image from "next/image";
import { TableColumn } from "react-data-table-component";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdMore } from "react-icons/io";
import PaginationWrapper from "@/components/PaginationWrapper";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { authAxios } from "@/utils/axiosConfig";
import Spinner from "@/components/Spinner";
import Popover from "@/components/PopOver";
import { useMemo } from "react";

const KycTable = () => {
    const { data: kycData, isPending } = useQuery({
        queryKey: ["kyc"],
        queryFn: async () => {
            const res = await authAxios.get("/kyc");
            return res.data.data as KycResponse;
        },
    });
    const router = useRouter();
    const columns: TableColumn<KycProps>[] = useMemo(
        () => [
            {
                name: "User",
                sortable: true,
                width: "260px",
                cell: (row: KycProps) => (
                    <div className="flex gap-2 items-center">
                        <div className="w-9 h-9 rounded-full bg-black"></div>
                        <div className="items-center">
                            <p className="text-base capitalize font-semibold truncate overflow-hidden text-ellipsis text-[#333333]">
                                {row.user.firstName} {""} {row.user.lastName}
                            </p>
                            <p className="text-base font-semibold truncate w-[200px] overflow-hidden text-ellipsis text-[12px] text-[#9F9C98]">
                                {row.user.email}
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                name: "Document Type",
                sortable: true,
                cell: (row: KycProps) => (
                    <div className="flex gap-2 items-center">
                        <p
                            className={`text-sm capitalize underline font-semibold text-[#333333] ${
                                row.documentType === "BVN"
                                    ? "text-[#180C02] no-underline"
                                    : "text-[#C0610C]"
                            }`}
                        >
                            <a
                                href={row.documentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                {row.documentType}
                            </a>
                        </p>
                        {row.documentType !== "BVN" && (
                            <FiArrowUpRight color="#F47301" height={"11px"} />
                        )}
                    </div>
                ),
            },
            {
                name: "Status",
                sortable: true,
                cell: (row: KycProps) => (
                    <div
                        className={`flex items-center justify-center py-1 px-2 rounded-[200px] ${
                            row.status === "Verified"
                                ? "bg-[#EAFDEE] text-[#09866F]"
                                : row.status === "Pending"
                                ? "bg-[#FFFBEB] text-[#FBBF24]"
                                : row.status === "Rejected"
                                ? "bg-[#FFEBEB] text-[#DC2626]"
                                : "bg-[#FFEBEB] text-[#DC2626]"
                        }`}
                    >
                        <p className="text-xs capitalize">{row.status}</p>
                    </div>
                ),
            },
            {
                name: "Date Submitted",
                sortable: true,
                cell: (row: KycProps) => (
                    <p className="text-[#333333]">
                        {new Date(row.createdAt).toLocaleDateString()}
                    </p>
                ),
            },

            {
                name: "Reviewed By",
                sortable: true,
                cell: (row: KycProps) => (
                    <p className="text-[#1A1714]">{"--"}</p>
                ),
            },
            {
                name: "Actions",
                sortable: true,
                cell: (row: KycProps) => (
                    <button
                        className="flex items-center gap-[5px] bg-[#FEF7F1] px-4 py-2 rounded-[50px]"
                        onClick={() => router.push(`/kyc/${row._id}`)}
                    >
                        <p className="text-[#F47301] flex font-[700] text-[14px]">
                            View Details
                        </p>
                        <FiArrowUpRight color="#F47301" height={"8px"} />
                    </button>
                ),
            },
            {
                name: " ",
                width: "50px",
                sortable: true,
                cell: (row: KycProps) => (
                    <div className="">
                        <Popover
                            children={<IoMdMore />}
                            content={
                                <div>
                                    <button>Approve Kyc</button>
                                    <button>Reject Kyc</button>
                                </div>
                            }
                        />
                    </div>
                ),
            },
        ],
        []
    );

    const handleSelected = () => {};
    return (
        <div>
            {kycData?.results ? (
                <>
                    <div className="border border-[#F5F5F5] rounded-[14px]">
                        <AppTable
                            onSelectedRowsChange={handleSelected}
                            columns={columns}
                            data={kycData?.results}
                            isLoading={false}
                            customStyles={tableStyles}
                            withCustomPagination
                            isSelectable
                        />
                    </div>
                    <PaginationWrapper />
                </>
            ) : (
                <>{isPending ? <Spinner /> : null}</>
            )}
        </div>
    );
};

export default KycTable;
