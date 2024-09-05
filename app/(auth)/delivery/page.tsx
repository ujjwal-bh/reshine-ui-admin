"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { useGetAllUsersQuery } from "@/app/_global-redux/services/user-api";

import { FaSearch } from "react-icons/fa";
import Loader from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";

import PaginationComponent from "@/components/core/Pagination";
import UserTable from "@/components/core/UserTable/UserTable";

export default function DeliveryPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const limit = 10;
  const [page, setPage] = useState<number>(Number(searchParams.get("page")) || 1);
  const [searchEmail, setSearchEmail] = useState<string>("");

  const { data: usersData, isLoading: usersLoading, isFetching: usersFetching, isSuccess: usersSuccess, refetch } = useGetAllUsersQuery({ page, limit, role: "delivery" });

  const [filteredData, setFilteredData] = useState<any[]>([]);

  const filterData = (value: string) => {
    setSearchEmail(value);
    const res = usersData?.results?.filter((user: any) => user.email.includes(value));
    setFilteredData(res);
  };

  useEffect(() => {
    if (usersSuccess) {
      setFilteredData(usersData?.results || []);
    }
  }, [usersSuccess, usersData]);

  useEffect(() => {
    router.push(`${pathname}?role=delivery&page=${page}`);
  }, [page, pathname, router]);

  useEffect(() => {
      refetch(); // Trigger a refetch to get the latest data
  }, [refetch]);


  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (usersFetching || usersLoading) {
    return <Loader />;
  }


  console.log(usersData, "delivery people")

  return (
    <MainWarapper>
      <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-2">
        <SectionTitle>Delivery Persons</SectionTitle>
        <div className="flex gap-2 lg:flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search user by email . . ."
            className="min-w-[15rem] lg:w-full"
            value={searchEmail}
            onChange={e => filterData(e.target.value)}
          />
          {/* <Filter /> */}
          <Link href="/delivery/user">
            <Button size={"sm"} className="min-w-32 lg:w-full">
              Add Delivery Person
            </Button>
          </Link>
        </div>
      </div>
      <UserTable users={filteredData} />
      <PaginationComponent 
        currentPage={page}
        totalPages={usersData?.totalPages || 1}
        onPageChange={handlePageChange}
      />
    </MainWarapper>
  );
}
