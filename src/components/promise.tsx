import { usePostsQuery, useCreatePostMutation } from "../store/api/posts";

function PromiseComponent() {
    const { data: postsData } = usePostsQuery();
    const [createPost] = useCreatePostMutation();

    function handleClick() {
        const newPost = {
            id: 3,
            title: "The third post",
            body: "The body of the third post",
        };

        createPost(newPost)
            .unwrap()
            .then((res) => {
                console.log(res);
            });
        // .catch((e) => {
        //     console.log(e);
        // });
    }

    async function handleClickAsyncAwait() {
        const newPost = {
            id: 3,
            title: "The third post",
            body: "The body of the third post",
        };

        const result = await createPost(newPost)
            .unwrap()
            .catch((e) => console.log(e));
        console.log(result);
        console.log("This will still run");
    }

    async function handleClickTryCatch() {
        const newPost = {
            id: 3,
            title: "The third post",
            body: "The body of the third post",
        };

        try {
            const result = await createPost(newPost).unwrap();
            console.log(result);
            console.log("inside try");
        } catch (e) {
            console.log(e);
            console.log("inside catch");
        }

        console.log("outside try");
    }

    return (
        <div>
            <h1>Promise</h1>
            <button onClick={handleClick}>Create new post</button>
            <button onClick={handleClickAsyncAwait}>
                Create new post async await
            </button>
            <button onClick={handleClickTryCatch}>
                Create new post try catch
            </button>
            <h4>Posts:</h4>
            <ul>
                {postsData?.posts.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PromiseComponent;
