import { useContext } from "react";
import PostContext from "../contexts/PostsContext";
import { Link } from "react-router-dom";

function PostsList() {

    const { postList } = useContext(PostContext);

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