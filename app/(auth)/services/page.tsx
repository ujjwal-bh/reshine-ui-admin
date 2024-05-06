import AddServiceType from "@/components/core/services/AddServiceType";
import AddWashType from "@/components/core/services/AddWashType";
import FullCard from "@/components/ui/FullCard";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

export default function page() {
  return (
    <MainWarapper>
      {/* service type */}
      <SectionTitle>Service Type</SectionTitle>
      <div className="flex lg:gap-8 lg:flex-col">
        <div className="w-[60%] flex gap-4 flex-wrap lg:w-full">
          <FullCard
            title="Regular"
            desc="lorem ipsum del emit jastai lamo lamo texts padh muji"
            Icon={FaStar}
            active={true}

          />
          <FullCard
            title="Express"
            desc="lorem ipsum del emit jastai lamo lamo texts padh muji"
            Icon={FaTruckFast}
          />
        </div>
        <div className="w-[40%] lg:w-full">
          <AddServiceType />
        </div>
      </div>
      {/* Wash type */}
      <SectionTitle>Wash Type</SectionTitle>
      <div className="flex lg:gap-8 lg:flex-col ">
        <div className="w-[60%] flex gap-4 flex-wrap lg:w-full">
          <FullCard
            title="Regular"
            desc="lorem ipsum del emit jastai lamo lamo texts padh muji"
            Icon={FaStar}
            active={true}
          >
            <Link
              href="/services/wash-type/123"
              className="text-primary text-center"
            >
              change other details
            </Link>
          </FullCard>
          <FullCard
            title="Express"
            desc="lorem ipsum del emit jastai lamo lamo texts padh muji"
            Icon={FaTruckFast}
          >
            <Link
              href="/services/wash-type/123"
              className="text-primary text-center"
            >
              change other details
            </Link>
          </FullCard>
        </div>
        <div className="w-[40%] lg:w-full">
          <AddWashType />
        </div>
      </div>
    </MainWarapper>
  );
}
