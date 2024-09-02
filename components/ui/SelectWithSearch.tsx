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
  data?: {label: string, value: string}
}

export default function SelectWithSearch({
  options = [],
  placeholder,
  setData,
  data
}: IProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(data || null);

  const handleChange = (option: Option | null) => {
    setSelectedOption(option);
    if (setData) {
      setData(option?.value || "");
    }
  };

  return (
    <Select
      className="w-full z-100"
      options={options}
      instanceId={useId()}
      placeholder={placeholder || "placeholder"}
      value={data}
      onChange={handleChange}
      isClearable
    />
  );
}
