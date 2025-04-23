import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ChiSiamo from "./pages/ChiSiamo"
import DefaultLayout from "./layouts/DefaultLayout"
import SinglePost from "./pages/SinglePost"
import NotFound from "./pages/NotFound"
import PostsPage from "./pages/PostsPage"
import PostContext from "./contexts/PostsContext"
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const urlApi = 'https://jsonplaceholder.typicode.com/posts';
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    console.log('Ho caricato la pagina')

    axios.get(urlApi)
      .then(res => setPostList(res.data))
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <PostContext.Provider value={{ postList, setPostList }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/post-list' element={<PostsPage />} />
              <Route path='/post-list/:id' element={<SinglePost />} />
              <Route path='/chi-siamo' element={<ChiSiamo />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </PostContext.Provider>
    </>
  )
}

export default App
