"use client";
import React, { useState } from "react";
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

export default function Cloth() {
  const [clothCount, setClothCount] = useState(0);

  return (
    <Dialog>
      <DialogTrigger>
        <Card className="flex items-center justify-center p-4 gap-4 bg-background w-48">
          <div className="text-xl">
            <FaShirt />
          </div>
          <h1>Tshirt</h1>
          <h1>x 1</h1>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Cloth</DialogTitle>
          <div className="py-4 flex flex-col gap-4">
            <div className="flex gap-4 items-center justify-between">
              <span className="text-lg text-foreground">T shirt</span>
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
              <Button className="w-full">Edit</Button>
              <Button
                variant={"outline"}
                className="border-error text-error w-full"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
