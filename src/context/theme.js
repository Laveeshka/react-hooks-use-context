import React, {useState} from "react";

//create the context
const ThemeContext = React.createContext();

//create the provider component
function ThemeProvider({ children }){
    //set up the context value to be stateful 
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};