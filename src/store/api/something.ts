import { appApi } from "./index";

const somethingApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        something: builder.query({
            query: () => "/user",
            providesTags: ["Something"],
        }),
    }),
});

export const { useSomethingQuery } = somethingApi;
