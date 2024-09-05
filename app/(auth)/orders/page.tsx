"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { useGetAllOrdersQuery } from "@/app/_global-redux/services/order-api";

import { FaSearch } from "react-icons/fa";
import Loader from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import OrderCard from "@/components/core/OrderCard";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";

import PaginationComponent from "@/components/core/Pagination";

export default function OrdersPage() {
  const pathname = usePathname();
  const router = useRouter()
  const searchParams = useSearchParams();

  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  const limit = 10;
  const {
    data: ordersData,
    isLoading: ordersLoading,
    isFetching: ordersFetching,
  } = useGetAllOrdersQuery({
    page,
    limit,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };


  useEffect(() => {
  router.push(`${pathname}?page=${page}&limit=${limit}`);

  }, [page, pathname, router]);

  if (ordersFetching || ordersLoading) {
    return <Loader />;
  }

  return (
    <MainWarapper>
      <div className="flex justify-between gap-2 items-center lg:flex-col lg:items-start">
        <SectionTitle>Orders</SectionTitle>
        <div className="flex gap-2 flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search order by id . . ."
            className="min-w-[15rem]"
          />
          {/* <Filter /> */}
          <Link href="/orders/order">
            <Button size={"sm"} className="min-w-32">
              Take Order
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-2">
        {ordersData?.results.map((order: any) => (
          <OrderCard key={order.id} item={order} className="w-full" />
        ))}
      </div>
      <PaginationComponent 
       currentPage={page}
       totalPages={ordersData?.totalPages || 1}
       onPageChange={handlePageChange}
      />
    </MainWarapper>
  );
}
