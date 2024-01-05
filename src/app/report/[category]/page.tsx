"use client";
import CategoryList from "@/components/category/list";
import Preview from "@/components/category/preview";
const CategoryDetail = () => {
  return (
    <div className="flex flex-col items-center">
      <Preview />
      <CategoryList />
    </div>
  );
};

export default CategoryDetail;
