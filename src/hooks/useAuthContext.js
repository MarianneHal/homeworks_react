import {useContext} from "react";

import {AuthContext} from "../components/hoc/AuthProvider";


const useAuthContext = () => useContext(AuthContext);

export {useAuthContext}