import {Navigate, Route, Routes, useNavigate} from "react-router-dom";

import {AuthRequireLayout, MainLayout} from "./  layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";



function App() {

    const navigate = useNavigate();

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'cars'}/>}/>

              <Route element={<AuthRequireLayout/>}>
                  <Route path={'cars'} element={<CarsPage/>}/>
              </Route>
          </Route>

          <Route path={'login'} element={<LoginPage/>}/>
          <Route path={'register'} element={<RegisterPage/>}/>

      </Routes>
  );
}

export {App};
