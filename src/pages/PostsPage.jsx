import PostsList from "./PostsList";
import Alert from "../components/Alert";

function PostsPage() {

    return <>
        <Alert />
        <h2>Lista dei posts:</h2>
        <PostsList />
    </>
}

export default PostsPage;