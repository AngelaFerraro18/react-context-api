import { Link } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

function PostsList() {

    const { postList } = usePosts();

    return (<>
        <ul>
            {postList.map(post => <li key={post.id}>
                <h3>{post.title}</h3>
                <Link to={`/post-list/${post.id}`}>Più info...</Link>
            </li>
            )}
        </ul>
    </>)
}

export default PostsList;