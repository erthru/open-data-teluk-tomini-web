import { BasicResponse, get } from "..";
import { API_URL } from "../../../helpers/environments";
import { Merge } from "../../../helpers/utility";
import { Category } from "./category-repository";
import { Organization } from "./organization-repository";
import { Tag } from "./tag-repository";

export type Dataset = {
    _id?: string;
    title?: string;
    description?: string;
    source?: string;
    year?: string;
    contact?: string;
    reference?: string;
    attachment?: string;
    slug?: string;
    downloaded?: number;
    tagIds?: string;
    categoryId?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    tags?: Tag[];
    category?: Category;
    organization?: Organization;
};

export const getAll = async (page: number, limit: number): Promise<Merge<BasicResponse, { datasets: Dataset[]; total: number }>> => {
    return await get(`${API_URL}datasets?page=${page}&limit=${limit}`);
};

export const getAllByCategoryId = async (
    categoryId: string,
    page: number,
    limit: number
): Promise<Merge<BasicResponse, { datasets: Dataset[]; total: number }>> => {
    return await get(`${API_URL}datasets/category-id/${categoryId}?page=${page}&limit=${limit}`);
};

export const getAllByOrganizationId = async (
    organizationId: string,
    page: number,
    limit: number
): Promise<Merge<BasicResponse, { datasets: Dataset[]; total: number }>> => {
    return await get(`${API_URL}datasets/organization-id/${organizationId}?page=${page}&limit=${limit}`);
};

export const getBySlug = async (slug: string): Promise<Merge<BasicResponse, { dataset: Dataset }>> => {
    return await get(`${API_URL}dataset/slug/${slug}`);
};
