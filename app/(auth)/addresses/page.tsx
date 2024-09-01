"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useGetAllUsersQuery } from "@/app/_global-redux/services/user-api";

import Filter from "@/components/core/Filter";
import PaginationComponent from "@/components/core/Pagination";
import UserTable from "@/components/core/UserTable/UserTable";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { FaSearch } from "react-icons/fa";
import Loading from "../loading";
import { useGetAllAddressesQuery } from "@/app/_global-redux/services/address-api";
import AddressTable from "@/components/core/AddressTable/AddressTable";
import { IAddress } from "@/interfaces/address.interface";

export default function Address() {
  const [searchAddress, setSearchAddress] = useState<string>("");
  const { data: addressesData, isLoading: addressesDataLoading, isFetching: addressesDataFetching, isSuccess: addressesDataSuccess, refetch } = useGetAllAddressesQuery({ page: 1, limit: 1000});
  const [filteredData, setFilteredData] = useState<IAddress[]>([]);

  const filterData = (value: string) => {
    setSearchAddress(value);

    
    if (!addressesData?.results) return;
    
    const lowercasedValue = value.toLowerCase();
    
    const filtered = addressesData?.results.filter((address: any) => {
      const { city, state, address: streetAddress, landmark } = address;
      
      return (
        (city?.toLowerCase().includes(lowercasedValue) || "") ||
        (state?.toLowerCase().includes(lowercasedValue) || "") ||
        (streetAddress?.toLowerCase().includes(lowercasedValue) || "") ||
        (landmark?.toLowerCase().includes(lowercasedValue) || "")
      );
    });
  
    setFilteredData(filtered);
  };
  

  useEffect(() => {
    if (addressesDataSuccess) {
      setFilteredData(addressesData?.results || []);
    }
  }, [addressesDataSuccess, addressesData]);


  useEffect(() => {
      refetch(); // Trigger a refetch to get the latest data
  }, [refetch]);


  if (addressesDataFetching || addressesDataLoading) {
    return <Loading />;
  }


  return (
    <MainWarapper>
      <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-2">
        <SectionTitle>Pickup Addresses</SectionTitle>
        <div className="flex gap-2 lg:flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="Search the addresses . . ."
            className="min-w-[15rem] lg:w-full"
            value={searchAddress}
            onChange={e => filterData(e.target.value)}
          />
          {/* <Filter /> */}
          <Link href="/addresses/address">
            <Button size={"sm"} className="min-w-32 lg:w-full">
              Add Address
            </Button>
          </Link>
        </div>
      </div>
      <AddressTable  addresses={filteredData} />
    </MainWarapper>
  );
}
