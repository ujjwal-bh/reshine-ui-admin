import DeliveryTable from "@/components/core/DeliveryTable/DeliveryTable";
import Filter from "@/components/core/Filter";
import Pagination from "@/components/core/Pagination";
import UserTable from "@/components/core/UserTable/UserTable";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import Link from "next/link";


import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Users() {
  return (
    <MainWarapper>
      <div className="flex justify-between items-center">
        <SectionTitle>Users</SectionTitle>
        <div className="flex gap-2">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search user by name . . ."
            className="min-w-[15rem]"
          />
            <Filter/>
            <Link href="/users/user">
                <Button size={"sm"} className="min-w-32">Add Users</Button>
            </Link>
        </div>
      </div>
      <UserTable/>
      <Pagination />
    </MainWarapper>
  );
}
