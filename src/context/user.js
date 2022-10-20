import React, {useState} from "react";

//create the context
const UserContext = React.createContext();

//create a provider component
//this special component gives access to the context data to its child components
function UserProvider({ children }){
    //value prop
    //set up the context value to be stateful since the Header component handles logging in/logging out a user as well
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider };