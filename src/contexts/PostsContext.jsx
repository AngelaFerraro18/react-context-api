//vado ad importare tutto ciò che mi serve per creare un context APi Pattern
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "./AlertContext";

const PostContext = createContext();

//creo la funzione/componente per delegare tutto ciò che serve per ottenere le informazioni dei post
function PostsProvider({ children }) {

    const urlApi = 'https://jsonplaceholder.typicode.com/posts';
    const [postList, setPostList] = useState([]);
    const { setAlert } = useAlert();

    useEffect(() => {

        axios.get(urlApi)
            .then(res => {
                setPostList(res.data);
                setAlert({
                    type: 'Success',
                    message: 'Posts caricati con successo!'
                })
            })
            .catch(err => {
                console.log(err);
                setAlert({
                    type: 'Error',
                    message: 'Qualcosa è andato storto...'
                })
            })

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