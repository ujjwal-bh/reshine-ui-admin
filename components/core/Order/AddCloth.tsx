"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { IClothServicePricing } from "@/interfaces/cloth-service-pricing.interface";
import { ISelectedClothServicePricing } from "@/app/(auth)/orders/order/page";
import toast from "react-hot-toast";

interface IProps {
  allClothesServicePricingData: IClothServicePricing[];
  setClothesServicePricing: Dispatch<SetStateAction<ISelectedClothServicePricing[]>>;
  clothesServicePricing: ISelectedClothServicePricing[];
}

export default function AddCloth({
  allClothesServicePricingData,
  setClothesServicePricing,
  clothesServicePricing,
}: IProps) {
  const [clothCount, setClothCount] = useState(0);
  const [selectedClothServicePricingId, setSelectedClothServicePricingId] =
    useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const modifyClothesData = () => {
    return allClothesServicePricingData.map((data) => {
      return { label: data.clothInfo.name, value: data.id };
    });
  };

  const handleAddCloth = () => {
    if (selectedClothServicePricingId.length === 0 || clothCount === 0){
      toast.error("Invalid Value")
      return;
    } 

    const filteredSelection = clothesServicePricing.filter(
      (data) => data.servicePricingId == selectedClothServicePricingId
    );
    if(filteredSelection.length > 0 ){
      toast.error("Already added. Edit to make changes.")
      return;
    }


    const selectedClothesDetails = allClothesServicePricingData.filter(
      (data) => data.id == selectedClothServicePricingId
    );

    setClothesServicePricing([
      ...clothesServicePricing,
      {
        clothId: selectedClothesDetails[0]?.cloth,
        count: clothCount,
        clothName: selectedClothesDetails[0]?.clothInfo?.name,
        serviceName: selectedClothesDetails[0]?.serviceInfo.name,
        servicePricingId: selectedClothServicePricingId,
        price: selectedClothesDetails[0]?.price
      },
    ]);
    setIsDialogOpen(false); // Close the dialog box
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="w-max">
        <div className="w-48 bg-primary p-3 text-background rounded-md">
          Add Cloth
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Cloth</DialogTitle>
          <div className="py-4 flex flex-col gap-4">
            <div className="flex gap-4 items-center justify-between">
              <span className="text-lg text-foreground w-full">
                <SelectWithSearch
                  placeholder="Select cloth"
                  options={modifyClothesData()}
                  setData={setSelectedClothServicePricingId}
                />
              </span>
              <div className="flex gap-4 items-center">
                <div
                  className="p-2 rounded-md border-2 cursor-pointer"
                  onClick={() => setClothCount((prev) => prev - 1)}
                >
                  <FaMinus />
                </div>
                <Input
                  className="w-12 text-lg font-black text-foreground text-center"
                  value={clothCount}
                  onChange={(e) =>
                    setClothCount(Number(e.target.value) || clothCount)
                  }
                />
                <div
                  className="p-2 rounded-md border-2 cursor-pointer"
                  onClick={() => setClothCount((prev) => prev + 1)}
                >
                  <FaPlus />
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <Button
                variant={"outline"}
                className="border-error text-error w-full  hover:text-error"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button className="w-full" onClick={handleAddCloth}>
                Add Cloth
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
