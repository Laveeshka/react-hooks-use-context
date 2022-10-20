import React, { useState, useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
//import the provider
import { UserProvider } from "../context/user";
//import the theme context
import {ThemeContext} from "../context/theme";

//Header and Profile components need access to the `user` data in the context
function App() {
  //call useContext with ThemeContext
  const {theme} = useContext(ThemeContext);

  //const [theme, setTheme] = useState("dark");
  //const [user, setUser] = useState(null);
  return (
      <main className={theme}>
      {/* wrap components that need access to context data in the provicer */}
      <UserProvider>
        <Header theme={theme} />
        <Profile theme={theme} />
      </UserProvider>
    </main>   
  );
}

export default App;
