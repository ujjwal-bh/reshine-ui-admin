import React, { useId, useState } from "react";
import Select from "react-select";

interface Option {
  label: string;
  value: string;
}

interface IProps {
  options?: Option[];
  placeholder?: string;
  setData?: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectWithSearch({
  options = [],
  placeholder,
  setData,
}: IProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (option: Option | null) => {
    setSelectedOption(option);
    if (setData) {
      setData(option?.value || "");
    }
  };

  return (
    <Select
      className="w-full"
      options={options}
      instanceId={useId()}
      placeholder={placeholder || "placeholder"}
      value={selectedOption}
      onChange={handleChange}
      isClearable
    />
  );
}
