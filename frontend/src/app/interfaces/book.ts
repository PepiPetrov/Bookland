import { IComment } from "./comment";

export interface IBook {
    title: string,
    author: string,
    year: number,
    rating: string,
    description: string,
    linkToBuy: string,
    img: string,
    comments: IComment[]
    creator: string,
    _id: string
}