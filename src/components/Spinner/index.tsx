import React from "react";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center mt-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-[#EA760F] border-solid"></div>
        </div>
    );
};

export default Spinner;
