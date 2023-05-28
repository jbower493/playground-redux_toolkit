import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MutationResponse {
    message: string;
}

export const appApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
        credentials: "omit",
        prepareHeaders: (headers) => {
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    tagTypes: ["Posts"],
    endpoints: () => ({}),
});
