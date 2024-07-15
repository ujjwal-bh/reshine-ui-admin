"use client"
import { useGetAllPaymentsQuery } from "@/app/_global-redux/services/payment-api";
import Filter from "@/components/core/Filter";
import PaginationComponent from "@/components/core/Pagination";
import PaymentTable from "@/components/core/PaymentTable/PaymentTable";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function PaymentDetails() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()



  const limit = 10
  const [page, setPage] = useState<number>(Number(searchParams.get("page")) || 1)
  const {data} = useGetAllPaymentsQuery({
    page,
    limit
  })


  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`${pathname}?page=${newPage}&limit=${limit}`);
  };
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
      <PaymentTable data={data?.results!} />
      <PaginationComponent currentPage={page} totalPages={data?.totalPages!}  onPageChange={handlePageChange}/>
    </MainWarapper>
  );
}
