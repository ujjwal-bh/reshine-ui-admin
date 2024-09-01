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
import { ISelectedCloth } from "@/app/(auth)/orders/order/page";

interface IProps {
  setSelectedClothes: Dispatch<SetStateAction<ISelectedCloth[]>>;
  selectedClothes: ISelectedCloth[];
  cloth: string;
  count: number;
}

export default function Cloth({ cloth, count, selectedClothes, setSelectedClothes }: IProps) {
  const [clothCount, setClothCount] = useState(count);
  const { data: clothData } = useGetClothQuery({ id: cloth });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEditCloth = () => {
    const filtered = selectedClothes.filter((clth) => clth.cloth !== cloth);
    setSelectedClothes([...filtered, { cloth, count: clothCount }]);
    setIsDialogOpen(false); // Close the dialog box
  };

  const handleDeleteCloth = () => {
    const filtered = selectedClothes.filter((clth) => clth.cloth !== cloth);
    setSelectedClothes(filtered);
    setIsDialogOpen(false); // Close the dialog box
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Card className="flex items-center justify-center p-4 gap-4 bg-background w-48">
          <div className="text-xl">
            <FaShirt />
          </div>
          <h1>{clothData?.name}</h1>
          <h1>x {clothCount}</h1>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Cloth</DialogTitle>
          <div className="py-4 flex flex-col gap-4">
            <div className="flex gap-4 items-center justify-between">
              <span className="text-lg text-foreground">{clothData?.name}</span>
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
                className="border-error text-error w-full"
                onClick={handleDeleteCloth}
              >
                Delete
              </Button>
              <Button className="w-full" onClick={handleEditCloth}>Edit</Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
