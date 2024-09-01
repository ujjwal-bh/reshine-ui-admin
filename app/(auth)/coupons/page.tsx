"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


import { useGetAllcouponsQuery } from "@/app/_global-redux/services/coupon-api";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { ICoupon } from "@/interfaces/coupons.interface";
import { FaSearch } from "react-icons/fa";
import CouponTable from "@/components/core/CouponTable/CouponTable";
import Loading from "../loading";

export default function Coupon() {
  const [searchCoupon, setSearchCoupon] = useState<string>("");
  const { data: couponsData, isLoading: getCouponsLoading, isFetching: getCouponsFetching, isSuccess: getCouponsSuccess, refetch } = useGetAllcouponsQuery({ page: 1, limit: 1000});
  const [filteredData, setFilteredData] = useState<ICoupon[]>([]);

  const filterData = (value: string) => {
    setSearchCoupon(value);
    const res = couponsData?.results?.filter((coupon) => coupon.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(res || []);
  };

  useEffect(() => {
    if (getCouponsSuccess) {
      setFilteredData(couponsData?.results || []);
    }
  }, [getCouponsSuccess, couponsData]);


  useEffect(() => {
      refetch(); 
  }, [refetch]);


  if (getCouponsFetching || getCouponsLoading) {
    return <Loading />;
  }


  console.log(couponsData, "coupons")

  return (
    <MainWarapper>
      <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-2">
        <SectionTitle>Coupons</SectionTitle>
        <div className="flex gap-2 lg:flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="Search the coupon . . ."
            className="min-w-[15rem] lg:w-full"
            value={searchCoupon}
            onChange={e => filterData(e.target.value)}
          />
          {/* <Filter /> */}
          <Link href="/coupons/coupon">
            <Button size={"sm"} className="min-w-32 lg:w-full">
              Add Coupon
            </Button>
          </Link>
        </div>

      </div>
      <CouponTable coupons={filteredData}/>
    </MainWarapper>
  );
}
