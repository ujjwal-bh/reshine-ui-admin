
import React, { useState, useEffect, useRef, HTMLAttributes } from "react";
import { FaChevronDown } from "react-icons/fa";

// interface SingleOption{
//   label: string,
//   value: string
// }
interface SelectProps extends HTMLAttributes<HTMLInputElement> {
  options: string[];
  LeftIcon?: React.FC,
  leftIconClasses?: string,
  RightIcon?: React.FC,
  rightIconClasses?: string
  placeholder: string,
}

export default function Select({ options, LeftIcon, RightIcon, leftIconClasses,rightIconClasses,  ...rest }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setIsDropdownOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setSelectedValue(option);
    setSearchQuery("");
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={dropdownRef} className="relative w-full">
      {
        LeftIcon &&
      <div className={`absolute top-[50%] left-2 translate-y-[-50%] text-primary ${leftIconClasses ? leftIconClasses: ""}`}>
        <LeftIcon/>
      </div>
      }
      {
        RightIcon ?
      <div className={`absolute top-[50%] right-4 translate-y-[-50%] text-primary ${rightIconClasses ? rightIconClasses: ""}`}>
        <RightIcon/>
      </div>
      :
      <div className={`absolute top-[50%] right-4 translate-y-[-50%] text-gray-400`}>
        <FaChevronDown/>
      </div>
      }
      <input
        type="text"
        value={selectedValue}
        onChange={handleSearchChange}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`w-full p-2  border border-gray-200 rounded-md ${LeftIcon ? "pl-8" : ""}`}
        {...rest}
      />
      {isDropdownOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-200 shadow-md rounded-md max-h-60 overflow-y-auto z-10">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`p-2 cursor-pointer hover:bg-primaryTransparent pl-4 ${option === selectedValue ? 'bg-primaryTransparent text-primary' : ''}`}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="p-2 cursor-not-allowed">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
}
