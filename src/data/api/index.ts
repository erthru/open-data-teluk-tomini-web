export type BasicResponse = {
    error: boolean;
    message: string;
};

export const get = async (url: string): Promise<any> => {
    const _fetch = await fetch(url, {
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },

        method: "GET",
    });

    return await _fetch.json();
};

export const put = async (url: string, body?: any): Promise<any> => {
    const _fetch = await fetch(url, {
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },

        method: "PUT",

        body: JSON.stringify(body),
    });

    return await _fetch.json();
};
