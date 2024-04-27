"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputWithIcon } from "../ui/input";
import { FaSearch } from "react-icons/fa";

interface IOptionProps {
  value: string;
  label: string;
}
interface IProps {
  options: IOptionProps[];
  placeholder: string;
  value?: string;
  Icon?: React.FC;
}
export default function SelectWithSearch({
  options,
  placeholder,
  value,
  Icon,
}: IProps) {
  const [val, setVal] = useState(value);

  const [filteredItems, setFilteredItems] = useState<IOptionProps[]>(options);

  const search = (searchValue: string) => {
    const filter = options.filter(
      (option) => option.value.includes(searchValue) || option.value === val
    );
    return filter;
  };

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = search(e.target.value);
    setFilteredItems(filter);
  };
  return (
    <Select value={val} onValueChange={setVal}>
      <SelectTrigger className={`w-full ${Icon ? "px-8 relative": ""}`}>
        {Icon && (
          <div className="absolute top-[50%] translate-y-[-50%] left-2">
            <Icon />
          </div>
        )}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-background">
        <InputWithIcon
          RightIcon={FaSearch}
          placeholder="search"
          onChange={handleOptionChange}
          className="mt-2"
        />

        {filteredItems.map((item, index) => {
          return (
            <SelectItem
              value={item.value}
              key={index}
              className="hover:bg-primaryTransparent hover:text-primary py-4"
            >
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
