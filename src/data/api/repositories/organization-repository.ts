import { BasicResponse, get } from "..";
import { API_URL } from "../../../helpers/environments";
import { Merge } from "../../../helpers/utility";

export type Organization = {
    _id?: string;
    name?: string;
    description?: string;
    photo?: string;
    slug?: string;
    authId?: string;
    createdAt?: string;
    updatedAt?: string;
    datasetsTotal?: number;
};

export const getAllIncludeDatasetsTotal = async (): Promise<Merge<BasicResponse, { organizations: Organization[]; total: number }>> => {
    return await get(`${API_URL}organizations/include-datasets-total`);
};

export const getBySlug = async (slug: string): Promise<Merge<BasicResponse, { organization: Organization }>> => {
    return await get(`${API_URL}organization/slug/${slug}`);
};
