import React from "react";

const ThemeToggle = ({ toggleTheme, setToggleTheme }) => {
  return (
    <div className="theme-toggle-div">
      <img
        className="toggle-img sun-img"
        src="./assets/desktop/icon-sun.svg"
        alt=""
      />
      <input
        onClick={() => setToggleTheme(!toggleTheme)}
        type="checkbox"
        className={toggleTheme ? "light-toggle-input" : "dark-toggle-input"}
      />
      <img
        className="toggle-img moon-img"
        src="./assets/desktop/icon-moon.svg"
        alt=""
      />
    </div>
  );
};

export default ThemeToggle;
