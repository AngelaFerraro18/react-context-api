import { Link } from "react-router-dom"

//creo il componente PostCard dove passo la prop 'post'
function PostCard({ post }) {

    return <li>
        <h3>{post.title}</h3>
        <Link to={`/post-list/${post.id}`}>Più info...</Link>
    </li>
}

export default PostCard;