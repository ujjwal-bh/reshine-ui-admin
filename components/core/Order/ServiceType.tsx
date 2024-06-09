"use client";
import React, { useState } from "react";
import SelectCard from "./SelectCard";

interface IServiceProps {
  title: string;
  Icon: React.FC;
}

interface IProps {
  options: IServiceProps[];
  active?: string;
}

export default function ServiceType({ options, active = "" }: IProps) {
  const [activeService, setActiveService] = useState(active);
  return (
    <div className="flex gap-4 flex-wrap">
      {options.map((item, index) => {
        return (
          <SelectCard
            key={index}
            Icon={item.Icon}
            title={item.title}
            active={item.title === activeService}
            onClick={() => {
              setActiveService(item.title);
            }}
          />
        );
      })}
    </div>
  );
}
