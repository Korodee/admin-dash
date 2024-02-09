export interface ApiProps{
    currentPage: number;
    nextPage: number;
    prevPage: null | number;
    totalRecords: number;
    totalPages: number;
    results: []
}