const tableStyles = {
    rows: {
        style: {
            fontSize: "14px",
            cursor: "pointer",
        },
    },
    headCells: {
        style: {
            paddingLeft: "10px", // override the cell padding for head cells
            paddingRight: "10px",
            fontSize: "14px",
            color: "#888292",
            fontWeight: "600",
            fontStyle: "normal",
            borderBottom: "none",
            background: "#F7F7F7",
        },
    },
    cells: {
        style: {
            paddingLeft: "10px", // override the cell padding for data cells
            paddingRight: "10px",
            paddingTop: "14px",
            paddingBottom: "14px",
            fontSize: "14px",
            fontWeight: "400",
        },
    },
};

export default tableStyles;
