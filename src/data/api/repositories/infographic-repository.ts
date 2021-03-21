import { BasicResponse, get } from "..";
import { API_URL } from "../../../helpers/environments";
import { Merge } from "../../../helpers/utility";
import { Writer } from "./writer-repository";

export type Infographic = {
    _id?: string;
    title?: string;
    banner?: string;
    writerId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    writer: Writer;
};

export const getAll = async (page: number, limit: number): Promise<Merge<BasicResponse, { infographics: Infographic[]; total: number }>> => {
    return await get(`${API_URL}infographics?page=${page}&limit=${limit}`);
};
