import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/contants";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="sticky top-0 bg-cyan-100 bg-opacity-80 shadow-lg m-7 rounded-3xl p-4 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-lg z-10">
      <div className="flex justify-between items-center">
        <div className="logo-container flex items-center">
          <img
            className="w-44 transform transition-transform duration-300 hover:scale-105 rounded-full"
            src={LOGO_URL}
            alt="Brand Logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-6">
            <li className="font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="/about">About Us</Link>
            </li>
            <li className="font-semibold">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="font-semibold">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-semibold">Cart</li>
            <button
              className="font-semibold"
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact}
            </button>
            <li className="font-semibold">
              <button
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <svg
                    className="w-6 h-6 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 3v1m0 16v1m8-9h1m-16 0H3m2.293-7.293l.707.707M16.707 16.707l.707.707M5 12a7 7 0 1014 0 7 7 0 00-14 0z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 3a9 9 0 000 18 9 9 0 000-18zM12 9v4m0 4h.01" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
