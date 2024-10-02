import BtnLayout from "@/components/share/button";
import DropDown from "@/components/share/dropdown";
import useCategory from "@/hooks/useCategory";
import { useBookMutation } from "@/service/book/mutations";
import { BookType } from "@/type/book";
import { CategoryType } from "@/type/category";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
interface ICategoryBox {
  book?: BookType;
}
const CategoryBox = ({ book }: ICategoryBox) => {
  const params = useSearchParams();
  const defaultId = params.get("id");
  const defaultCategory = params.get("category");
  const { category } = useCategory();
  const { bookMutate } = useBookMutation();
  const [categoryItem, setCategoryItem] = useState(
    defaultCategory || "카테고리를 선택해주세요",
  );
  const [selectedId, setSelectedId] = useState(Number(defaultId) || 0);
  const handleCategory = (name: string, id: number) => {
    setCategoryItem(name);
    setSelectedId(id);
  };
  const DropItems = category?.map(({ name, id }: CategoryType, idx: number) => (
    <DropDown.Item
      key={idx}
      selected={name == categoryItem}
      onClick={() => handleCategory(name, id)}
    >
      {name}
    </DropDown.Item>
  ));
  return (
    <div className="mt-6 flex flex-col  gap-16">
      <DropDown title={categoryItem}>{DropItems}</DropDown>
      <BtnLayout
        disabled={categoryItem == "카테고리를 선택해주세요" || !book}
        sizes="sm"
        className=" w-fit rounded-md bg-primary text-white "
        onClick={() => bookMutate({ categoryId: selectedId, book: book })}
      >
        책 추가하기
      </BtnLayout>
    </div>
  );
};

export default CategoryBox;
