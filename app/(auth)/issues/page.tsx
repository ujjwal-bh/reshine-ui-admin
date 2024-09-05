"use client"
import { useEffect, useState } from "react";

import { useCreateIssueTypeMutation, useDeleteIssueTypeMutation, useGetAllIssueTypesQuery } from "@/app/_global-redux/services/issues-api";

import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import MiniCard from "@/components/ui/MiniCard";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";

import IssueTable from "@/components/core/IssueTable/IssueTable";

export default function IssuesPage() {
  const [issueType, setIssueType] = useState("")

  const [createIssueType, {isSuccess: createIssueTypeSuccess, isError: createIssueTypeError, isLoading: createIssueTypeLoading}] = useCreateIssueTypeMutation()

  const {data: issueTypeData, isSuccess: issueTypeDataSuccess } = useGetAllIssueTypesQuery({limit:1000, page: 1})
  const [deleteIssuseType, {isSuccess: deleteIssueTypeSuccess, isError: deleteIssueTypeError, isLoading: deleteIssueTypeLoading}] = useDeleteIssueTypeMutation()
  const handleAddIssueType = async () => {
    await createIssueType({name: issueType})
    setIssueType("")
  }

  useEffect(()=> {
    if(createIssueTypeError){
      toast.error("Something went wrong")
    }
    if(createIssueTypeSuccess){
      toast.success("Operation successful")
    }
  }, [createIssueTypeError, createIssueTypeSuccess, deleteIssueTypeError])
  return (
    <MainWarapper>
      <SectionTitle>Issue Types</SectionTitle>
      <div className="flex gap-4 flex-wrap">
        {
          issueTypeData?.results?.map((item)=> (
            <MiniCard onClick={async ()=> {await deleteIssuseType(item.id)}} key={item.id}>{item.name}</MiniCard>
          ))
        }
      </div>
      <div className="flex justify-between flex-wrap lg:gap-16">
        <div className="flex gap-2 flex-wrap">
          <InputWithIcon placeholder="add issue type" value={issueType} onChange={(e)=> setIssueType(e.target.value)}/>
          <Button size={"sm"} onClick={handleAddIssueType} disabled={createIssueTypeLoading}>{
            createIssueTypeLoading ? "Loading" : "Add Issue Type"
            }</Button>
        </div>
        <div className="flex gap-2 flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search issue . . ."
            className="min-w-[15rem]"
          />
          {/* <Filter /> */}
        </div>
      </div>
      <IssueTable />
      {/* <Pagination /> */}
    </MainWarapper>
  );
}
