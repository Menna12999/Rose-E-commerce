declare type DataBaseField ={
_id:string;
createdAt:string;
}

declare type DatabaseProperties ={
    _id:string;
    createdAt:string;
    updatedAt:string;
}


declare type SuccessfulResponse <T>={
message:'success',
}&T


declare type ErrorResponse={
    error:string,
    }

declare type PaginatedResponse<T> = {
    metadata: {
        "currentPage": number,
        "totalPages": number,
        "limit": number,
        "totalItems": number
    },
}&T


declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
