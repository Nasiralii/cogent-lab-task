import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-8 container font-semibold">
      <nav className="flex justify-between w-full md:gap-4 items-center md:px-16 px-4 mx-auto">
        <img className="" src="/images/header-logo.svg" />
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[55vh] left-0 ${
            menuOpen ? "top-[0%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center`}
        >
          <div className="flex flex-row justify-between w-full">
            <ul className="flex md:justify-between z-[999] p-8 p-x justify-start md:flex-row flex-col md:h-auto h-screen md:w-auto w-[60%] md:items-center md:gap-[4vw] md:bg-transparent md:text-black bg-black text-white gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Product
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Contacts
                </a>
              </li>
              <li className="md:hidden block">
                <div className="text-white lg:ml-8">SIGN IN</div>
              </li>
              <li className="md:hidden block">
                {" "}
                <button className="text-white p-3 px-5 border border-[#381DDB]">
                  SIGN UP
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex z-[9999] items-center gap-6">
          <span
            className="text-3xl cursor-pointer flex md:hidden text-black "
            onClick={onToggleMenu}
          >
            {menuOpen ? (
              <img
                className="bg-black w-8 h-8"
                src="/images/close-navbar.svg"
              />
            ) : (
              <button className="text-[#381DDB] p-3 px-5 text-sm border border-[#381DDB]">
                MENU
              </button>
            )}
          </span>
        </div>
        <div className="md:flex hidden flex-row justify-end w-full gap-8 items-center">
          <div className="text-[#381DDB] lg:ml-8">SIGN IN</div>
          <div>
            <button className="text-[#381DDB] p-3 px-5 border border-[#381DDB]">
              SIGN UP
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
