import Filter from "@/components/core/Filter";
import IssueTable from "@/components/core/IssueTable/IssueTable";
import Pagination from "@/components/core/Pagination";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";


import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Issues() {
  return (
    <MainWarapper>
      <div className="flex justify-between items-center">
        <SectionTitle>Issues</SectionTitle>
        <div className="flex gap-2">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search issue . . ."
            className="min-w-[15rem]"
          />
            <Filter/>
        </div>
      </div>
      <IssueTable/>
      <Pagination />
    </MainWarapper>
  );
}
