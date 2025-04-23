import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ChiSiamo from "./pages/ChiSiamo"
import DefaultLayout from "./layouts/DefaultLayout"
import SinglePost from "./pages/SinglePost"
import NotFound from "./pages/NotFound"
import PostsPage from "./pages/PostsPage"
import { PostsProvider } from "./contexts/PostsContext"
import { AlertProvider } from "./contexts/AlertContext"

function App() {

  return (
    <>
      <AlertProvider>
        <PostsProvider>
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
        </PostsProvider>
      </AlertProvider>
    </>
  )
}

export default App
