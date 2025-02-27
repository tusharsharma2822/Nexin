import React, { createContext, useState, useContext } from "react";

//Create the UserContext
export const UserContext = createContext();

//create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};