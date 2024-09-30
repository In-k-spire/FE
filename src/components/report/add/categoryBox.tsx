import BtnLayout from "@/components/share/button";
import DropDown from "@/components/share/dropdown";
import { BookType } from "@/type/book";
import { useState } from "react";

const CategoryBox = ({ list, book }: { book?: BookType; list: string[] }) => {
  const [category, setCategory] = useState("카테고리를 선택해주세요");
  const DropItems = list.map((value, idx) => (
    <DropDown.Item
      key={idx}
      selected={value == category}
      onClick={() => setCategory(value)}
    >
      {value}
    </DropDown.Item>
  ));
  return (
    <div className="mt-6 flex flex-col  gap-16">
      <DropDown title={category}>{DropItems}</DropDown>
      <BtnLayout
        sizes="sm"
        className=" w-fit rounded-md bg-primary text-white "
      >
        책 추가하기
      </BtnLayout>
    </div>
  );
};

export default CategoryBox;
