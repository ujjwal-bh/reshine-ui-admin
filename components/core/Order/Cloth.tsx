"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaShirt } from "react-icons/fa6";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useGetClothQuery } from "@/app/_global-redux/services/clothes-api";
import { ISelectedClothServicePricing } from "@/app/(auth)/orders/order/page";

interface IProps {
  setSelectedClothesServicePricing: Dispatch<SetStateAction<ISelectedClothServicePricing[]>>;
  selectedClothesServicePricing: ISelectedClothServicePricing[];
  clothId: string;
  count: number;
  serviceName: string;
  clothName: string;
  servicePricingId: string;
  price: number;
}

export default function Cloth({
  clothId,
  clothName,
  servicePricingId,
  count,
  selectedClothesServicePricing,
  setSelectedClothesServicePricing,
  serviceName,
  price,
}: IProps) {
  const [clothCount, setClothCount] = useState(count);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEditCloth = () => {
    const filtered = selectedClothesServicePricing.filter(
      (clth) => clth.servicePricingId !== servicePricingId
    );
    setSelectedClothesServicePricing([
      ...filtered,
      {
        clothId,
        count: clothCount,
        clothName,
        serviceName,
        servicePricingId,
        price,
      },
    ]);
    setIsDialogOpen(false); // Close the dialog box
  };

  const handleDeleteCloth = () => {
    const filtered = selectedClothesServicePricing.filter(
      (clth) => clth.servicePricingId !== servicePricingId
    );
    setSelectedClothesServicePricing(filtered);
    setIsDialogOpen(false); // Close the dialog box
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Card className=" p-4 bg-background w-48">
          <div className="flex items-center justify-center gap-2">
            <div className="text-xl">
              <FaShirt />
            </div>
            <h1>{clothName}</h1>
            <h1>x {clothCount}</h1>
          </div>
          <div className="">{serviceName}</div>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Cloth</DialogTitle>
          <div className="py-4 flex flex-col gap-4">
            <div className="flex gap-4 items-center justify-between">
              <span className="text-lg text-foreground">{clothName}</span>
              <div className="flex gap-4 items-center">
                <div
                  className="p-2 rounded-md border-2 cursor-pointer"
                  onClick={() => setClothCount((prev) => Math.max(prev - 1, 0))}
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
                className="border-error text-error w-full hover:text-error"
                onClick={handleDeleteCloth}
              >
                Delete
              </Button>
              <Button className="w-full" onClick={handleEditCloth}>
                Edit
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
