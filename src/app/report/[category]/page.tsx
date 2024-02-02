"use client";
import CategoryList from "@/components/category/list";
import Preview from "@/components/category/preview";
const CategoryDetail = () => {
  return (
    <div className="flex flex-col items-center">
      <button className="peer z-10 h-[5rem] w-[10rem] border">click me</button>
      <div className="peer-hover:animate-flip h-[45rem] w-[30rem] origin-left border border-black bg-primary">
        HIHIHI
      </div>
    </div>
  );
};

export default CategoryDetail;
