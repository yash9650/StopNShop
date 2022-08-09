import React from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    setIsLoggedIn: (auth) => {},
});

export default AuthContext;