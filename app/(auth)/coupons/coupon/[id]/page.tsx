
"use client";
import { useCreateCouponMutation, useGetCouponQuery, useUpdateCouponMutation } from "@/app/_global-redux/services/coupon-api";
import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { Textarea } from "@/components/ui/textarea";
import { ApiError } from "@/interfaces/api-error.interface";
import { RATE_TYPE } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCode, FaMoneyBill, FaTextHeight } from "react-icons/fa";

const INIT = {
 title: "",
 description: "",
 code: "",
    discount: 0,

};

export default function AddCoupon({params}: {params: {id: string}}) {
  const router  = useRouter()
  const [formData, setFormData] = useState(INIT);

  const {data: couponData, isSuccess: getCouponSuccess} = useGetCouponQuery(params.id)

  const [discountType, setDiscountType] = useState("")
  const [expiry, setExpiry] = useState<Date>()

  const [updateCoupon, { isLoading, isError, isSuccess, error }] = useUpdateCouponMutation();

  const handleUpdateCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
   
    await updateCoupon({id: params.id, body: {...formData, discountType, expiry: expiry?.toDateString()}});
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as ApiError).data.message);
    }
    if (isSuccess) {
      toast.success("Operation Successful");
    }
  }, [isError, isSuccess]);


  useEffect(()=> {
      if(getCouponSuccess){
        setFormData(
          {
            title: couponData?.title || "",
            description: couponData?.description || "",
            code: couponData?.code || "",
            discount: couponData.discount || 0,
          }
        )
        setDiscountType(couponData?.discountType || "")
        setExpiry(new Date(couponData?.expiry))
      }
  },[getCouponSuccess])

  



  return (
    <MainWarapper>
      <div className="flex items-center gap-8">
        <Back />
        <SectionTitle>EditCoupon</SectionTitle>
      </div>
      <form className="w-[50%] flex flex-col gap-4 lg:w-full" onSubmit={handleUpdateCoupon}>
      

        <div className="flex flex-col gap-2">
          <label htmlFor="state">Discount Type</label>
          <SelectWithSearch
            placeholder="Select discount type"
            options={RATE_TYPE}
            setData={setDiscountType}
            data={{label: discountType, value: discountType}}
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
          <Button className="w-48" type="submit" disabled={isLoading} onClick={handleUpdateCoupon}>
            {isLoading ? "Updating..." : "Update Coupon"}
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}