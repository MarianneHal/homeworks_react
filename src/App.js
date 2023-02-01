import {Route, Routes} from "react-router-dom";

import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage, LoginPage} from "./pages";
import {MainLayout} from "./layouts";
import {RequireAuth} from "./components/hoc/RequireAuth";

function App() {
  return (
      <div>
      <Routes>
             <Route path={'/'} element={<MainLayout/>}>
                 <Route path={'/'} element={<HomePage/>}/>
                 <Route path={'/todos'} element={<TodosPage/>}/>
                 <Route path={'/albums'} element={<RequireAuth>
                     <AlbumsPage/>
                 </RequireAuth>}/>
                 <Route path={'/comments'} element={<CommentsPage/>}/>
                 <Route path={'/comments/:postId'} element={<PostPage/>}/>
            </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
          <Route path={'/login'} element={<LoginPage/>}/>
    </Routes>
      </div>
  );
}

export default App;
