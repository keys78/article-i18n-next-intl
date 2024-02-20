import React, { useState } from "react";
import Image from "next/image";
import gbFlag from "../assets/img/bg_flag.png";
import geFlag from "../assets/img/german_flag.png";
import esFlag from "../assets/img/spain_flag.png";
import { StaticImageData } from "next/image";
import { useRouter } from 'next/navigation';

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
    flag: StaticImageData;
  }

  const router = useRouter();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>({
    country: "English",
    code: "en",
    flag: gbFlag,
  });

  const options: Option[] = [
    { country: "English", code: "en", flag: gbFlag },
    { country: "German", code: "de", flag: geFlag },
    { country: "Spanish", code: "es", flag: esFlag },
  ];

  const setOption = (option: Option) => {
    setSelectedOption(option);
    setIsOptionsExpanded(false);
    router.push(`/${option.code}`);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="relative text-lg w-48">
        <button
          className="flex items-center justify-between px-3 py-2 bg-white w-full border border-gray-500 rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          <span className="flex items-center space-x-5">
            <Image
              src={selectedOption?.flag}
              width={"20"}
              height={"20"}
              alt=""
            />&nbsp;&nbsp;
            {selectedOption.country}
          </span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-4 w-4 transform transition-transform duration-200 ease-in-out ${
              isOptionsExpanded ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`transition-transform duration-500 ease-custom ${
            !isOptionsExpanded
              ? "-translate-y-1/2 scale-y-0 opacity-0"
              : "translate-y-0 scale-y-100 opacity-100"
          }`}
        >
          <ul className="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 flex items-center cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setOption(option);
                }}
                onClick={() => setIsOptionsExpanded(false)}
              >
                <Image
                  src={option.flag}
                  width={"20"}
                  height={"20"}
                  alt="logo"
                />&nbsp;&nbsp;
                {option.country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;