import DeliveryTable from "@/components/core/DeliveryTable/DeliveryTable";
import Filter from "@/components/core/Filter";
import Pagination from "@/components/core/Pagination";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import Link from "next/link";

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Delivery() {
  return (
    <MainWarapper>
      <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-2">
        <SectionTitle>Delivery Persons</SectionTitle>
        <div className="flex gap-2 lg:flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search user by name . . ."
            className="min-w-[15rem] lg:w-full"
          />
            <Filter />
          <Link href="/delivery/user">
            <Button size={"sm"} className="min-w-32 lg:w-full">
              Add Delivery Person
            </Button>
          </Link>
        </div>
      </div>
      <DeliveryTable />
      {/* <Pagination /> */}
    </MainWarapper>
  );
}
