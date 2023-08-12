import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, real_logo2 } from "../assets";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import useColor from "./hook2";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [colorMode, SetColorMode] = useColor();

  return (
    <nav
      // changes the properties of the navbar
      className={`
        ${styles.paddingX} w-full flex items-center
        py-5 fixed top-0 z-20 dark:bg-primary bg-lightMode`}
    >
      <div
        className="w-full flex justify-between
      items-center max-w-7xl mx-auto"
      >
        {/* this is the logo which on click takes you to the top */}
        <Link
          to="/"
          className="flex items-center gap-1.5"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/*this is the logo */}

          <img src={real_logo2} alt="logo" className="w-9 h-9 object-contain" />
          <p className="dark:text-white text-gray-100 text-[18px] font-bold cursor-pointer flex">
            Adrian&nbsp;
            <span className="sm:block hidden">| CS Student </span>
          </p>
        </Link>

        {/* this is the nav bar about,work,contact */}
        <ul
          className="list-none hidden sm:flex
        flex-row gap-10 "
        >
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                  ? "dark:text-white text-black"
                  : "dark:text-secondary text-gray-100"
              }
              dark:hover:text-white hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
          {/* this is the social media icons */}
          <a href="https://github.com/AdrianG0954" target="_blank">
            <AiFillGithub
              size="2rem"
              className={colorMode === "dark" ? "text-white" : "text-gray-100"}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-garcia-375b961a8/"
            target="_blank"
          >
            <AiFillLinkedin
              size="2rem"
              className={colorMode === "dark" ? "text-white" : "text-gray-100"}
            />
          </a>

          <button
            onClick={() => {
              SetColorMode(colorMode === "light" ? "dark" : "light");
            }}
          >
            {/* if the color mode is light then show the sun icon */}
            {colorMode === "dark" ? (
              <svg
                className="w-8 h-8 md:w-8 md:h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              // if the color mode is dark then show the moon icon
              <svg
                // make it 32x32
                className="w-8 h-8 md:w-8 md:h-8 dark:text-white text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
            {/* create a context to change the color mode */}
          </button>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="sm:hidden flex flex-row gap-4 mr-4">
            <a href="https://github.com/AdrianG0954" target="_blank">
              <AiFillGithub
                size="2rem"
                className={
                  colorMode === "dark" ? "text-white" : "text-gray-100"
                }
              />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-garcia-375b961a8/"
              target="_blank"
            >
              <AiFillLinkedin
                size="2rem"
                className={
                  colorMode === "dark" ? "text-white" : "text-gray-100"
                }
              />
            </a>
            <button
              onClick={() => {
                SetColorMode(colorMode === "light" ? "dark" : "light");
              }}
            >
              {/* if the color mode is light then show the sun icon */}
              {colorMode === "dark" ? (
                <svg
                  className="w-8 h-8 md:w-8 md:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                // if the color mode is dark then show the moon icon
                <svg
                  // make it 32x32
                  className="w-8 h-8 md:w-8 md:h-8 dark:text-white text-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* this is the menu that pops up when you click the menu button */}
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient
           absolute top-20 right-0 mx-4 my-2 min-w-[140px]
            z-10 rounded-xl`}
          >
            {/* this shows the options  */}
            <ul
              className="list-none flex
            justify-end items-start flex-col gap-4"
            >
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title
                      ? "text-white"
                      : "dark:text-secondary text-lightMode"
                  }
                font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
