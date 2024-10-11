import BtnLayout from "@/components/share/button";
import DropDown from "@/components/share/dropdown";
import { InputLayout } from "@/components/share/input";
import { useAddBook } from "@/service/book/mutations";
import { useAddCategory } from "@/service/category/mutations";
import { useCategory } from "@/service/category/queries";
import { BookType } from "@/type/book";
import { CategoryType } from "@/type/category";
import { useState } from "react";
interface ICategoryBox {
  book?: BookType;
  defaultId: number;
  defaultCategory: string;
}
const CategoryBox = ({ book, defaultCategory, defaultId }: ICategoryBox) => {
  const { category } = useCategory();
  const [newCategory, setNewCategory] = useState("");
  const { bookMutate } = useAddBook();
  const { categoryMutate } = useAddCategory();
  const [categoryItem, setCategoryItem] = useState(
    defaultCategory || "카테고리를 선택해주세요",
  );
  const [selectedId, setSelectedId] = useState(defaultId || 0);
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
      <DropDown title={categoryItem}>
        <div
          className="flex justify-between gap-2 p-1"
          onClick={(e) => e.stopPropagation()}
        >
          <InputLayout
            placeholder="카테고리를 입력해주세요"
            sizes="full"
            onChange={(e) => setNewCategory(e.target.value)}
            className="rounded-md border border-gray-300 ow:p-2"
          />
          <BtnLayout
            disabled={!!!newCategory}
            sizes="sm"
            className="rounded-md bg-primary text-white ow:py-2"
            onClick={() => categoryMutate(newCategory)}
          >
            카테고리 추가
          </BtnLayout>
        </div>
        {DropItems}
      </DropDown>
      <BtnLayout
        disabled={categoryItem == "카테고리를 선택해주세요" || !book}
        sizes="sm"
        className="w-fit rounded-md bg-primary text-white "
        onClick={() => bookMutate({ categoryId: selectedId, book: book })}
      >
        책 추가하기
      </BtnLayout>
    </div>
  );
};

export default CategoryBox;
