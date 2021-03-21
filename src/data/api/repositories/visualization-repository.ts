import { BasicResponse, get } from "..";
import { API_URL } from "../../../helpers/environments";
import { Merge } from "../../../helpers/utility";
import { Organization } from "./organization-repository";
import { Writer } from "./writer-repository";

export type Visualization = {
    _id?: string;
    title?: string;
    body?: string;
    slug?: string;
    thumbnail?: string;
    organizationId?: string;
    writerId?: string;
    createdAt?: string;
    updatedAt?: string;
    organization?: Organization;
    writer?: Writer;
};

export const getAll = async (page: number, limit: number): Promise<Merge<BasicResponse, { visualizations: Visualization[]; total: number }>> => {
    return await get(`${API_URL}visualizations?page=${page}&limit=${limit}`);
};

export const getBySlug = async (slug: string): Promise<Merge<BasicResponse, { visualization: Visualization }>> => {
    return await get(`${API_URL}visualization/slug/${slug}`);
};
