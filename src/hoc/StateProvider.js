import {createContext, useReducer} from "react";

import {initialUsers, reducerUser} from "../reducers/userReducer";
import {initialCar, reducerCar} from "../reducers/carReducer";

const StateContext = createContext(null)

const StateProvider = ({children}) => {

        const value = {
            userReducer: useReducer(reducerUser, null, initialUsers),
            carReducer: useReducer(reducerCar, null, initialCar)
        }

    return(
       <StateContext.Provider value={value}>
           {children}
       </StateContext.Provider>


    )
}

export {StateProvider,
     StateContext
}