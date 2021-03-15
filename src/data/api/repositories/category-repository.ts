import { BasicResponse, get } from "..";
import { API_URL } from "../../../helpers/environments";
import { Merge } from "../../../helpers/utility";

export type Category = {
    _id?: string;
    name?: string;
    icon?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export const getAll = async (): Promise<Merge<BasicResponse, { categories: Category[]; total: number }>> => {
    return await get(`${API_URL}categories`);
};
