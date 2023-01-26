import {Route, Routes} from "react-router-dom";

import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";

import {MainLayout} from "./layouts";

function App() {
  return (
      <div>
      <Routes>
             <Route path={'/'} element={<MainLayout/>}>
                 <Route path={'/'} element={<HomePage/>}/>
                 <Route path={'/todos'} element={<TodosPage/>}/>
                 <Route path={'/albums'} element={<AlbumsPage/>}/>
                 <Route path={'/comments'} element={<CommentsPage/>}/>
                 <Route path={'/comments/:postId'} element={<PostPage/>}/>
            </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
      </div>
  );
}

export default App;
