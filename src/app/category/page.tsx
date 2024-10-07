"use client";
import { CateList } from "@/components/category/cateList";
import { CategorySearch } from "@/components/category/categorySearch";
import { useCategory } from "@/service/category/queries";
import { CategoryType } from "@/type/category";
import { useMemo, useState } from "react";
export default function Report() {
  const { category } = useCategory();
  const [search, setSearch] = useState("");
  const List = useMemo(() => {
    return category
      ?.filter(({ name }: { name: string }) => name.includes(search) || !search)
      .map((props: CategoryType, idx: number) => (
        <CateList {...props} key={idx} />
      ));
  }, [category, search]);
  return (
    <div className="flex w-full  items-center justify-center">
      <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-[#F0F5F9]">
        <CategorySearch setCategory={setSearch} />
        {List}
      </div>
    </div>
  );
}
