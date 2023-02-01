import {useRef} from "react";

import {useAuthContext} from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";


const LoginPage = () => {
   const username = useRef();
    const {setUser} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation()

   const logIn = () => {
 setUser(username.current.value)
       navigate(state.pathname, {replace:true})

   }

    return (
    <div>
        <input type="text" placeholder={'username'} ref={username}/>
        <button onClick={() => logIn()}></button>
    </div>
)
 }

 export {LoginPage}