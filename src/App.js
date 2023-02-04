import {Route, Routes, useNavigate} from "react-router-dom";

import {UsersPage} from "./components/UserPage/UsersPage";
import {CarsPage} from "./components/CarPage/CarsPage";
import css from "./main.module.css"



function App() {

    const navigate = useNavigate();

  return (
      <div>
          <div className={css.buttonDiv}>
              <button className={css.button} onClick={()=>navigate('/users')}>Users</button>
              <button className={css.button} onClick={()=>navigate('/cars')}>Cars</button>
          </div>
         <Routes>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/cars'} element={<CarsPage/>}/>
         </Routes>
      </div>
  );
}

export {App};
