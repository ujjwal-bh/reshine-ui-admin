'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useGetAllUsersQuery } from "@/app/_global-redux/services/user-api";

import Filter from "@/components/core/Filter";
import UserTable from "@/components/core/UserTable/UserTable";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";


import { FaSearch } from "react-icons/fa";
import PaginationComponent from "@/components/core/Pagination";
import Loading from "../loading";

export default function Users() {
  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const limit = 10
  const [page, setPage] = useState<number>(Number(searchParams.get("page")) || 1)
  const {data: usersData, isLoading: usersLoading, isFetching: usersFetching, isSuccess:usersSuccess} = useGetAllUsersQuery({page, limit, role: "user"})

  const [searchName, setSearchName] = useState<string>("");


  const [filteredData, setFilteredData] = useState<any[]>([]);

  const filterData = (value: string) => {
    setSearchName(value);
    const res = usersData?.results?.filter((user: any) => user.name.includes(value));
    setFilteredData(res);
  };


  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`${pathname}?role=user&page=${newPage}`);
  };


  useEffect(() => {
    if (usersSuccess) {
      setFilteredData(usersData?.results || []);
    }
  }, [usersSuccess, usersData]);
  if(usersFetching || usersLoading){
    return <Loading/>
  }

  console.log("Users", filteredData)
  return (
    <MainWarapper>
      <div className="flex justify-between gap-2 items-center lg:flex-col lg:items-start">
        <SectionTitle>Users</SectionTitle>
        <div className="flex gap-2 flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search user by name . . ."
            className="min-w-[15rem]"
            value={searchName}
            onChange={e => filterData(e.target.value)}

          />
            <Filter/>
            <Link href="/users/user">
                <Button size={"sm"} className="min-w-32">Add Users</Button>
            </Link>
        </div>
      </div>
      <UserTable users={usersData.results}/>
      <PaginationComponent 
       currentPage={page}
       totalPages={usersData?.totalPages || 1}
       onPageChange={handlePageChange}
      />
    </MainWarapper>
  );
}
