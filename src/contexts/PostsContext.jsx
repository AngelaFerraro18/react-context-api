//vado ad importare tutto ciò che mi serve per creare un context APi Pattern
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();

//creo la funzione/componente per delegare tutto ciò che serve per ottenere le informazioni dei post
function PostsProvider({ children }) {

    const urlApi = 'https://jsonplaceholder.typicode.com/posts';
    const [postList, setPostList] = useState([]);

    useEffect(() => {

        axios.get(urlApi)
            .then(res => setPostList(res.data))
            .catch(err => console.log(err))

    }, [])

    return <PostContext.Provider value={{ postList, setPostList }}>
        {children}
    </PostContext.Provider>
}

//creo il mio hook per i posts
function usePosts() {
    const context = useContext(PostContext);
    return context;
}

export { PostsProvider, usePosts };