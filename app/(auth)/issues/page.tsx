import Filter from "@/components/core/Filter";
import IssueTable from "@/components/core/IssueTable/IssueTable";
import Pagination from "@/components/core/Pagination";
import MiniCard from "@/components/ui/MiniCard";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Issues() {
  return (
    <MainWarapper>
      <SectionTitle>Issue Types</SectionTitle>
      <div className="flex gap-4 flex-wrap">
        <MiniCard>Issue Type</MiniCard>
        <MiniCard>Issue Type two</MiniCard>
        <MiniCard>Issue Type three</MiniCard>
      </div>
      <div className="flex justify-between flex-wrap lg:gap-16">
        <div className="flex gap-2 flex-wrap">
          <InputWithIcon placeholder="add issue type" />
          <Button size={"sm"}>Add Issue Type</Button>
        </div>
        <div className="flex gap-2 flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search issue . . ."
            className="min-w-[15rem]"
          />
          <Filter />
        </div>
      </div>
      <IssueTable />
      <Pagination />
    </MainWarapper>
  );
}
