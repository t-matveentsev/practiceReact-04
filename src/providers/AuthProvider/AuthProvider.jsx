import { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const login = (user) => setUser(user);
  const logout = () => setUser("");

  const contextValue = {
    user,
    login,
    logout,
  };
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
