
import { useState } from "react";
import {AuthContext} from './AuthContext.jsx'

function AuthProvider({children}){
    const [user, setUser] = useState(null);

    const login = (name = "Max") =>{
        setUser({
            name,
            email: `${name.toLowerCase()}@example.com`,
        });
    };

    const logout = () =>{
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
        isLoggedIn: !!user,
    };

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider