"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

import {
  useCreateClothMutation,
  useGetAllClothesQuery,
} from "@/app/_global-redux/services/clothes-api";

import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";

import ClothesCard from "@/components/core/clothes/ClothesCard";
import PaginationComponent from "@/components/core/Pagination";
import toast from "react-hot-toast";

export default function Clothes() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  const limit = 100;

  const [name, setName] = useState("");

  const { data: getClothesData } = useGetAllClothesQuery({
    page,
    limit,
  });
  const [
    createCloth,
    {
      isLoading: createClothLoading,
      isError: createClothError,
      isSuccess: createClothSuccess,
    },
  ] = useCreateClothMutation();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`${pathname}?page=${newPage}`);
  };

  const handleCreateCloth = async (e: SyntheticEvent) => {
    e.preventDefault()
    await createCloth({ name });
  };

  useEffect(() => {
    if (createClothError) {
      toast.error("something went wrong");
    }
    if (createClothSuccess) {
      toast.success("Cloth created successfully");
      setName("")
    }
  }, [createClothError, createClothSuccess]);

  return (
    <MainWarapper>
      <SectionTitle>Clothes</SectionTitle>
      <div className="flex gap-4 flex-wrap">
        {getClothesData?.results?.map((cloth: any) => (
          <ClothesCard key={cloth.id} id={cloth.id}>
            {cloth.name}
          </ClothesCard>
        ))}
        {getClothesData?.totalPages && getClothesData.totalPages > 1 && (
          <PaginationComponent
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={getClothesData?.totalPages || 1}
          />
        )}
      </div>
      <div className="flex justify-between">
        <form className="flex gap-4 lg:flex-wrap">
          <InputWithIcon
            placeholder="add clothes"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button size={"sm"} type="submit" onClick={handleCreateCloth} disabled={createClothLoading}>
            Add Clothes
          </Button>
        </form>
      </div>
    </MainWarapper>
  );
}
