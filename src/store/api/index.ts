import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MutationResponse {
    message: string;
}

export const appApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://google.com",
        credentials: "include",
        prepareHeaders: (headers) => {
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    tagTypes: ["Something"],
    endpoints: () => ({}),
});
