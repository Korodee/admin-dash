/* eslint-disable @typescript-eslint/no-explicit-any */
import DataTable from "react-data-table-component";

type DictionaryOf<T> = { [key: string]: T };

type TableProps<T> = {
    columns: DictionaryOf<T>[];
    data: T[];
    title?: string;
    perPage?: number;
    isLoading?: boolean;
    customStyles?: DictionaryOf<unknown>;
    onSelectedRowsChange?: () => void;
    totalRows?: number;
    withCustomPagination?: boolean;
    handlePageChange?: (page: number) => void;
    handlePerRowsChange?: (newPerPage: number, page: number) => void;
    isSelectable?: boolean;
    showTableHeader?: boolean;
    onRowClicked?: ((row: any, e: any) => void) | undefined;
};

const AppTable = ({
    columns,
    data,
    title,
    isLoading,
    onSelectedRowsChange,
    handlePerRowsChange,
    handlePageChange,
    customStyles,
    withCustomPagination,
    totalRows,
    isSelectable = true,
    showTableHeader = true,
    onRowClicked,
}: TableProps<any>) => {
    return (
        <DataTable
            paginationComponentOptions={{ noRowsPerPage: true }}
            responsive
            columns={columns}
            data={data}
            title={title}
            pagination={!withCustomPagination ? true : false}
            paginationServer
            paginationTotalRows={totalRows}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerRowsChange}
            onSelectedRowsChange={onSelectedRowsChange}
            progressPending={isLoading}
            selectableRows={isSelectable}
            progressComponent={
                <div className="py-10">
                    <p>Loading</p>
                </div>
            }
            customStyles={customStyles}
            noTableHead={!showTableHeader}
            onRowClicked={onRowClicked}
        />
    );
};

export default AppTable;
