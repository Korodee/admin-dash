"use client";
import AppTable from "@/components/AppTable";
import tableStyles from "@/components/AppTable/tableStyles";
import { SingleTransactionResponse } from "@/interfaces/transactions";
// import Image from "next/image";
import { TableColumn } from "react-data-table-component";
import { IoMdArrowDown, IoMdArrowUp, IoMdMore } from "react-icons/io";
import PaginationWrapper from "@/components/PaginationWrapper";
import { useRouter } from "next/navigation";
import { authAxios } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner";
import { ApiProps } from "@/interfaces/api";
import { useMemo } from "react";

const TransactionTable = () => {
    const { data: transactionData, isPending } = useQuery({
        queryKey: ["transaction"],
        queryFn: async () => {
            const res = await authAxios.get("/transaction");
            return res.data.data as ApiProps;
        },
    });
    const router = useRouter();
    const columns: TableColumn<SingleTransactionResponse>[] = useMemo(
        () => [
            {
                name: "Customer Name",
                sortable: true,
                width: "180px",
                cell: (row: SingleTransactionResponse) => (
                    <div
                        data-tag="allowRowEvents"
                        className="flex gap-3 items-center"
                    >
                        <div
                            className="w-7 h-7 rounded-full bg-black"
                            data-tag="allowRowEvents"
                        ></div>
                        {/* <Image
                        src={Avatar}
                        width={28}
                        height={28}
                        alt="User Image"
                    /> */}
                        <p
                            data-tag="allowRowEvents"
                            className="text-base capitalize font-semibold truncate w-[120px] overflow-hidden text-ellipsis text-[#333333]"
                        >
                            {row.user.firstName} {row.user.lastName}
                        </p>
                    </div>
                ),
            },
            {
                name: "Amount",
                width: "130px",
                sortable: true,
                cell: (row: SingleTransactionResponse) => (
                    <p className="text-[#333333]" data-tag="allowRowEvents">
                        £ {row.originalAmount.toLocaleString()}.00
                    </p>
                ),
            },
            {
                name: "Recipient School",
                sortable: true,
                cell: (row: SingleTransactionResponse) => (
                    <p
                        className="text-[#161616] capitalize font-medium"
                        data-tag="allowRowEvents"
                    >
                        {row.institution.name}
                    </p>
                ),
            },
            {
                name: "Status",
                sortable: true,
                cell: (row: SingleTransactionResponse) => (
                    <div
                        data-tag="allowRowEvents"
                        className={`flex items-center justify-center py-1 px-2 rounded-[200px] ${
                            row.status === "Completed"
                                ? "bg-[#EAFDEE] text-[#09866F]"
                                : row.status === "Received"
                                ? "bg-[#EAFDEE] text-[#09866F]"
                                : row.status === "Confirmed"
                                ? "bg-[#FEF7F1] text-[#F47301]"
                                : row.status === "Pending"
                                ? "bg-[#FFFBEB] text-[#FBBF24]"
                                : row.status === "Abandoned"
                                ? "bg-[#FFEBEB] text-[#DC2626]"
                                : "bg-[#FFEBEB] text-[#DC2626]"
                        }`}
                    >
                        <p className="text-xs capitalize">{row.status}</p>
                    </div>
                ),
            },
            {
                name: "Date",
                sortable: true,
                cell: (row: SingleTransactionResponse) => (
                    <p className="text-[#333333]" data-tag="allowRowEvents">
                        {new Date(row.createdAt)
                            .toLocaleDateString()
                            .replace(/\//g, "-")}
                    </p>
                ),
            },
            {
                name: "Type",
                sortable: true,
                width: "130px",
                cell: (row: SingleTransactionResponse) => (
                    <div
                        className="flex gap-2 items-center"
                        data-tag="allowRowEvents"
                    >
                        {row.paymentType === "Loan" ? (
                            <IoMdArrowDown color="#B3B0AE" height={"11px"} />
                        ) : (
                            <IoMdArrowUp color="#F5AC6A" height={"11px"} />
                        )}
                        <p
                            className={`text-sm capitalize  font-semibold text-[#333333] ${
                                row.paymentType === "Loan"
                                    ? "text-[#180C02]"
                                    : "text-[#C0610C]"
                            }`}
                        >
                            {row.paymentType}
                        </p>
                    </div>
                ),
            },
            {
                name: "Transaction Reference",
                sortable: true,
                cell: (row: SingleTransactionResponse) => (
                    <p className="text-[#1A1714]" data-tag="allowRowEvents">
                        {row.referenceId}
                    </p>
                ),
            },
            {
                name: " ",
                width: "50px",
                sortable: true,
                cell: (row: SingleTransactionResponse) => (
                    <IoMdMore color="#000000" height={"18px"} />
                ),
            },
        ],
        []
    );

    const handleSelected = () => {};
    return (
        <div>
            {transactionData?.results ? (
                <>
                    <div className="border border-[#F5F5F5] rounded-[14px]">
                        <AppTable
                            onSelectedRowsChange={handleSelected}
                            columns={columns}
                            data={transactionData?.results}
                            isLoading={false}
                            customStyles={tableStyles}
                            withCustomPagination
                            isSelectable={false}
                            onRowClicked={(row: SingleTransactionResponse) =>
                                router.push(`/transactions/${row._id}`)
                            }
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

export default TransactionTable;
