"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { RATE_TYPE } from "@/lib/constants";
import { ApiError } from "@/interfaces/api-error.interface";
import { useCreateCouponMutation } from "@/app/_global-redux/services/coupon-api";

import toast from "react-hot-toast";
import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/datePicker";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { FaCode, FaMoneyBill, FaTextHeight } from "react-icons/fa";

const INIT = {
 title: "",
 description: "",
 code: "",
    discount: 0,
};

export default function AddCouponPage() {
  const router  = useRouter()
  const [formData, setFormData] = useState(INIT);

  const [discountType, setDiscountType] = useState("")
  const [expiry, setExpiry] = useState<Date>()

  const [createCoupon, { isLoading, isError, isSuccess, error }] = useCreateCouponMutation();

  const handleCreateCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
   
    await createCoupon({...formData, discountType, expiry: expiry?.toDateString()});
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as ApiError).data.message);
    }
    if (isSuccess) {
      toast.success("Operation Successful");
    }
  }, [isError, isSuccess, error]);


  useEffect(()=> {
      if(isSuccess){
        router.push("/coupons")
      }
  },[isSuccess, router])

  



  return (
    <MainWarapper>
      <div className="flex items-center gap-8">
        <Back />
        <SectionTitle>Add Coupons</SectionTitle>
      </div>
      <form className="w-[50%] flex flex-col gap-4 lg:w-full" onSubmit={handleCreateCoupon}>
      

        <div className="flex flex-col gap-2">
          <label htmlFor="state">Discount Type</label>
          <SelectWithSearch
            placeholder="Select discount type"
            options={RATE_TYPE}
            setData={setDiscountType}
          />
        </div>
       
        <div className="flex flex-col gap-2">
          <label htmlFor="discount">Discount</label>
          <InputWithIcon
            type="text"
            placeholder="Discount rate / Amount"
            LeftIcon={FaMoneyBill}
            value={formData.discount}
            onChange={(e) => setFormData({ ...formData, discount: Number(e.target.value) || 0 })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <InputWithIcon
            placeholder="Discount title"
            LeftIcon={FaTextHeight}
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="code">Discount Code</label>
          <InputWithIcon
            placeholder="Discount Code eg: BG100"
            LeftIcon={FaCode}
            type="text"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <Textarea
            placeholder="Description for the coupon"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="deliveryCharge">Expiry Date</label>
         <DatePicker date={expiry} setDate={setExpiry}/>
        </div>

       
        <div>
          <Button className="w-48" type="submit" disabled={isLoading} onClick={handleCreateCoupon}>
            {isLoading ? "Adding..." : "Add Coupon"}
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
