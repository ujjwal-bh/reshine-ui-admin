"use client"
import React, { useEffect, useState } from "react";
import { useCreateServiceMutation } from "@/app/_global-redux/services/laundry-service-api";
import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { Textarea } from "@/components/ui/textarea";
import { ApiError } from "@/interfaces/api-error.interface";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaPen } from "react-icons/fa";

const INIT = {
  name: "",
  description: "",
};
export default function AddWashType() {
  const [formData, setFormData] = useState(INIT);
  const router = useRouter()
  
  const [createWashType, { isLoading, isError, isSuccess, error }] = useCreateServiceMutation();
 
  const handleCreateWashType = async (e: React.FormEvent) => {
    e.preventDefault();
   
    await createWashType(formData);
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
      if(isSuccess){
        router.push("/services")
      }
  }, [isSuccess])




  return (
    <MainWarapper>
     <div className="flex items-center gap-8">
           <Back/>
        <SectionTitle>Add Wash Type</SectionTitle>
        </div>
        <form className="w-[50%] flex flex-col gap-4 lg:w-full" onSubmit={handleCreateWashType}>
      
       
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Name</label>
          <InputWithIcon
            type="string"
            placeholder="Name of Service"
            LeftIcon={FaPen}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <Textarea
                placeholder="Enter the description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
        </div>
        <div>
          <Button className="w-48" type="submit" disabled={isLoading} onClick={handleCreateWashType}>
            {isLoading ? "Adding..." : "Add Wash Type"}
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
