import { Seller } from "./seller"

export type Sale = {

    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;

}

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type SaleSum = {
<<<<<<< HEAD
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
=======
    sellerName : string;
    sum : number;
}

export type SaleSuccess = {
    sellerName : string;
>>>>>>> d083155cd1fa8488ad8927d16f9e223e60b277e7
    visited: number;
    deals: number;
}