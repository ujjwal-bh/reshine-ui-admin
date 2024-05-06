"use client";
import React from "react";
import Back from "@/components/ui/Back";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Order() {
  return (
    <MainWarapper>
      <div className="flex items-center gap-8 justify-between pb-4 border-b-2 border-gray-100">
        <div className="flex items-center gap-4">
          <Back />
          <SectionTitle>Order Details</SectionTitle>
        </div>
        <h1 className="text-gray-400">Order ID: #12345</h1>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="py-2 px-4 min-w-32 text-center bg-primaryTransparent text-primary">
          Express
        </div>
        <div className="py-2 px-4 min-w-32 text-center bg-primaryTransparent text-primary">
          Regular wash
        </div>
        <div className="py-2 px-4 min-w-32 text-center bg-primaryTransparent text-primary">
          location, address, state, country
        </div>
      </div>
      <div className="flex gap-48 lg:flex-col lg:gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg">10 Clothes</h1>
          <div className="text-gray-400">
            <div className="flex items-center gap-16 mt-4">
              <div className="flex items-center gap-4">
                <span className="w-32 break-words">Shirts</span>
                <span className="w-16 break-words">x 4</span>
              </div>
              <span>$ 23</span>
            </div>
            <div className="flex items-center gap-16 mt-4">
              <div className="flex items-center gap-4">
                <span className="w-32 break-words">Track pants black</span>
                <span className="w-16 break-words">x 4</span>
              </div>
              <span>$ 23</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-4">Order Timeline</h1>
          <div className="flex gap-8 text-success">
            <div className="flex flex-col justify-center items-center">
              <FaCheckCircle />
              <div className="h-12 w-[2px] bg-success"></div>
            </div>
            <span className="text-foreground mt-[-4px]">
              Order placed on 24 March, 2024
            </span>
          </div>
          <div className="flex gap-8 text-gray-400">
            <div className="flex flex-col justify-center items-center">
              <FaCheckCircle />
              <div className="h-12 w-[2px] bg-gray-400"></div>
            </div>
            <span className="text-foreground mt-[-4px]">
              Order picked up on 24 March, 2024
            </span>
          </div>
          <div className="flex gap-8 text-gray-400">
            <div className="flex flex-col justify-center items-center">
              <FaCheckCircle />
            </div>
            <span className="text-foreground mt-[-4px]">
              Expected delivery on 24 March, 2024
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-black text-xl">$ 234</h1>
        <span className="text-error text-sm">not paid</span>
      </div>
      <div className="flex gap-4 lg:flex-wrap">
        <Link href="/orders/1234/edit" className="w-full">
          <Button className="min-w-[12rem] w-full">Edit Order</Button>
        </Link>
        <Button className="min-w-[12rem] w-full">Mark delivered</Button>
        <Button className="min-w-[12rem] w-full">Mark paid</Button>
        <Button className="min-w-[12rem] bg-error w-full">Cancel Order</Button>
      </div>
    </MainWarapper>
  );
}
