export type KyProps = {
    id: string;
    User: string;
    UserMail: string;
    DocumentType: "Passport" | "BVN" | "NationId" | "DriversLicense";
    Status: "Pending" | "Verified" | "Rejected";
    DateSubmitted: Date | string;
    ReviewedBy: string;
    Actions: string;
};

export type KycResponse = {
    currentPage: number;
    nextPage: number;
    prevPage: null | number;
    totalRecords: number;
    totalPages: number;
    results: KycProps[];
};

export type KycProps = {
    _id: string;
    documentType: string;
    user: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        id: string;
    };
    documentNumber: string;
    documentUrl: string;
    status: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    verifiedDate: Date | string;
    comments: string;
};
