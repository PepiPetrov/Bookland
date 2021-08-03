import { IComment } from "./comment";

export interface IBook {
    title: string,
    author: string,
    year: number,
    rating: number,
    description: string,
    linkToBuy: string,
    img: string,
    comments: IComment[]
    creator: any,
    _id: string,
    liked: string[]
}