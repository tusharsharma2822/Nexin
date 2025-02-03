import { createContext, useState, } from "react";
import PropTypes from 'prop-types';

//create the user context
export const UserContext = createContext();

//Create a provider component
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return(
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


