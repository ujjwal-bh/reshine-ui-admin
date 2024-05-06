import Filter from "@/components/core/Filter";
import IssueTable from "@/components/core/IssueTable/IssueTable";
import Pagination from "@/components/core/Pagination";
import MiniCard from "@/components/ui/MiniCard";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";

import React from "react";

export default function Clothes() {
  return (
    <MainWarapper>
      <SectionTitle>Clothes</SectionTitle>
      <div className="flex gap-4 flex-wrap">
        <MiniCard>Shirt</MiniCard>
        <MiniCard>T-shirt</MiniCard>
        <MiniCard>Pant</MiniCard>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 lg:flex-wrap">
          <InputWithIcon placeholder="add clothes"/>
          <Button size={"sm"}>Add Clothes</Button>
        </div>
      </div>
    </MainWarapper>
  );
}
