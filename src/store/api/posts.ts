import { appApi } from "./index";

type Post = {
    id: number;
    title: string;
    body: string;
};

const somethingApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        posts: builder.query<{ posts: Post[] }, void>({
            query: () => "/posts",
            providesTags: ["Posts"],
        }),
        createPost: builder.mutation<{ success: boolean }, Post>({
            query: (newPost) => ({
                url: "/post",
                method: "POST",
                body: newPost,
            }),
        }),
    }),
});

export const { usePostsQuery, useCreatePostMutation } = somethingApi;
