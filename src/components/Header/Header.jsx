import { useContext } from "react";
import s from "./Header.module.css";
import { authContext } from "../../providers/AuthProvider/AuthProvider";
import { themeContext } from "../../providers/ThemeProvider/ThemeProvider";

const Header = () => {
  const { user, logout } = useContext(authContext);
  const { toggleTheme, theme } = useContext(themeContext);
  return (
    <header className={s.header}>
      <h2>Hooks | useMemo, useRef, useContext</h2>
      <h2>Welcome, {user}</h2>
      <button onClick={toggleTheme}>{theme}</button>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
