import React from "react";
import { ThemeToggle, BgOverlay } from "./components";
import "./Header.css";

const Header = ({ toggleTheme, setToggleTheme }) => {
  return (
    <header className="header">
      <BgOverlay />
      <div className="header-content">
        <img src="./assets/desktop/logo.svg" alt="" />
        <ThemeToggle
          toggleTheme={toggleTheme}
          setToggleTheme={setToggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
