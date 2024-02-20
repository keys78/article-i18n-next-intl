"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import heroIcon from "../assets/img/logoni.png";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";

const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: () => void
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    },
    [ref, handler]
  );

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [handleClickOutside]);
};

const Header = () => {
  const [isThemeDropdown, setIsThemeDropdown] = useState<boolean>(false);
  const themeSwitcherRef = useRef<HTMLDivElement>(null);

  const closeThemeDropdown = () => {
    setIsThemeDropdown(false);
  };

  useClickOutside(themeSwitcherRef, closeThemeDropdown);

  return (
    <header className="flex items-center justify-between py-4 shadow shadow-gray-200 bg-baseOne transition-colors duration-300 lg:px-[160px] sm:px-[40px] px-[16px]">
      <div>
        <Image
          src={heroIcon}
          width={"40"}
          height={"40"}
          alt="logo"
          className="mix-blend-lighten"
        />
      </div>
      <nav className="sm:block hidden">
        <ul className="flex items-center space-x-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div ref={themeSwitcherRef}>
        {/* <button onClick={() => setIsThemeDropdown(!isThemeDropdown)}>
          <strong>Select Language</strong>
        </button>
        {isThemeDropdown && <LangSwitcher />} */}
        <LangSwitcher />
      </div>
    </header>
  );
};

export default Header;
