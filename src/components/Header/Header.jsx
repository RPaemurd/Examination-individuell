import React from "react";
import "./HeaderStyles.css";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Set the string key and the initial value
const darkModeAtom = atomWithStorage("darkMode", false);

const Header = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  // Update HTML data attribute to reflect dark mode state
  document.documentElement.setAttribute(
    "data-theme",
    darkMode ? "light" : "dark"
  );
  return (
    <div className="header-container">
      {/* Render a heading (h1) with the title */}
      <h1>Rebecca's CV</h1>

      {/* Display mode information */}
      {/* <h2>Welcome to {darkMode ? "dark" : "light"} mode!</h2> */}

      {/* Button to toggle theme */}
      <div className="button-container">
        <button onClick={toggleDarkMode}>Ändra Tema</button>
      </div>
    </div>
  );
};

export default Header;
