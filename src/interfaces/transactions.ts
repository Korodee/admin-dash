export type TransactionResponse = {
    currentPage: number;
    nextPage: number;
    prevPage: null | number;
    totalRecords: number;
    totalPages: number;
    results: SingleTransactionResponse[];
};

export type SingleTransactionResponse = {
    _id: string;
    user: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        homeAddress: string;
        city: string;
        country: string;
        state: string;
        id: string;
    };
    institution: {
        _id: string;
        name: string;
    };
    originalAmount: number;
    percentageProcessingFee: number;
    processingAmount: number;
    totalAmount: number;
    totalAmountInNaira: number;
    countryPayingFrom: {
        _id: string;
        name: string;
    };
    countryPayingTo: {
        _id: string;
        name: string;
    };
    referenceId: string;
    sourceCurrency: string;
    status:
        | "Confirmed"
        | "Completed"
        | "Pending"
        | "Failed"
        | "Abandoned"
        | "Received";
    failureReason: null | string;
    course: string;
    year: string;
    studentId: string;
    paymentType: "Loan" | "Tuition";
    destinationCurrency: string;
    createdAt: string;
    updatedAt: string;
};
