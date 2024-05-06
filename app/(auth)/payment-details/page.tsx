import Filter from "@/components/core/Filter";
import PaymentTable from "@/components/core/PaymentTable/PaymentTable";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import { Pagination } from "@/components/ui/pagination";
import SectionTitle from "@/components/ui/sectionTitle";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function PaymentDetails() {
  return (
    <MainWarapper>
      <div className="flex gap-4 justify-between items-center lg:flex-col lg:items-start">
        <SectionTitle>Payments</SectionTitle>
        <div className="flex gap-2 flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search user by name . . ."
            className="min-w-[15rem]"
          />
          <Filter />
        </div>
      </div>
      <PaymentTable />
      <Pagination />
    </MainWarapper>
  );
}
