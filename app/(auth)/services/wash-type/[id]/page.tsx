"use client";

import React from "react";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { Button, ButtonWithPopup } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { Textarea } from "@/components/ui/textarea";
import { FaMoneyBill, FaSearch } from "react-icons/fa";
import Filter from "@/components/core/Filter";
import MiniCard from "@/components/ui/MiniCard";
import Back from "@/components/ui/Back";

export default function page() {
  return (
    <MainWarapper>
      <div className="flex gap-4 justify-between items-center flex-wrap">
        <div className="flex items-center gap-4">
          <Back />
          <SectionTitle>Wash type detail</SectionTitle>
        </div>
        <ButtonWithPopup className="border border-error text-error rounded-md h-10 w-[12rem]">
          Delete wash type
        </ButtonWithPopup>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex gap-8 lg:flex-col lg:gap-4">
          <div className="flex flex-col gap-4 w-[50%] lg:w-full">
            <SelectWithSearch />
            <InputWithIcon LeftIcon={FaMoneyBill} />
          </div>
          <Textarea className="w-[50%] lg:w-full" />
        </div>
        <Button className="w-48" size={"sm"}>
          {" "}
          Edit
        </Button>
      </form>
      <SectionTitle>Add clothes</SectionTitle>
      <div className="flex gap-4 lg:flex-col">
        <div className="w-[100%]">
          <SelectWithSearch />
        </div>
        <div className="w-[100%]">
          <InputWithIcon
            LeftIcon={FaMoneyBill}
            placeholder="Enter Price"
            className="w-full"
          />
        </div>
        <div className="w-[100%]">
          <Button size="sm" className="w-48">
            Add Cloth
          </Button>
        </div>
      </div>
      <div className="flex justify-between lg:flex-wrap">
        <SectionTitle>Clothes</SectionTitle>
        <div className="flex gap-2 lg:flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search.."
            className="min-w-[15rem]"
          />
          <Filter />
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <MiniCard>
          <div className="flex gap-4">
            <span>Tshirt</span>
            <span>Rs 20</span>
          </div>
        </MiniCard>
        <MiniCard>
          <div className="flex gap-4">
            <span>Tshirt</span>
            <span>Rs 20</span>
          </div>
        </MiniCard>
        <MiniCard>
          <div className="flex gap-4">
            <span>Tshirt</span>
            <span>Rs 20</span>
          </div>
        </MiniCard>
      </div>
    </MainWarapper>
  );
}
