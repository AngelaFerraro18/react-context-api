//vado ad importare l'hook creato usePosts
import { usePosts } from "../contexts/PostsContext";

//importo il componente PostCard
import PostCard from "../components/PostCard";

function PostsList() {

    const { postList } = usePosts();

    return (<>
        <ul>
            {postList.map(post => <PostCard key={post.id} post={post} />)}
        </ul>
    </>)
}

export default PostsList;