import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css";
const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage({
    key: "theme",
    defaultValue: "dark",
  });

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  //   console.log(theme); to check the current theme

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello Wealth!!!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
