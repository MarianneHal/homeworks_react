import {createContext, useState} from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);

    const logIn = (loginUser) => {
        setUser(loginUser)
    }

    const logOut = () => {
        setUser(null)
    }

    const value = {user, logOut, logIn}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext};