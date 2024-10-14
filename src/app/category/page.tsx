"use client";
import { CateList } from "@/components/category/cateList";
import { CategorySearch } from "@/components/category/categorySearch";
import { Observer } from "@/components/share/observer";
import { useCategory } from "@/service/category/queries";
import { CategoryType } from "@/type/category";
import { useMemo, useState } from "react";
export default function Report() {
  const [search, setSearch] = useState("");
  const { category, hasNextPage, fetchNextPage } = useCategory(search);
  const List = useMemo(() => {
    return category?.map((props: CategoryType, idx: number) => (
      <CateList {...props} key={idx} />
    ));
  }, [category, search]);
  return (
    <div className="flex w-full  items-center justify-center">
      <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-[#F0F5F9]">
        <CategorySearch setCategory={setSearch} />
        {List}
        {hasNextPage ? <Observer handleIntersection={fetchNextPage} /> : null}
      </div>
    </div>
  );
}
