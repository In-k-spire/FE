import BtnLayout from "../share/button";
import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { BookType } from "@/type/book";
import { useState } from "react";
import Edit from "../share/menu";
import { InputLayout } from "../share/input";
import {
  useEditCategory,
  useRemoveCategory,
} from "@/service/category/mutations";
interface ICateList {
  name: string;
  id: number;
  bookList: BookType[];
}
export const CateList = ({ name, id, bookList }: ICateList) => {
  const [onEdit, setOnEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(name);
  const { remove } = useRemoveCategory();
  const { edit } = useEditCategory();
  const handleEdit = () => {
    setOnEdit(false);
    edit({ id: id, name: newTitle });
  };
  const ItemList = bookList?.map((book, idx) => (
    <CateItem book={book} key={idx} />
  ));
  return (
    <div className="relative flex w-full flex-col">
      <div className="flex flex-col items-start justify-between gap-2 px-4 pt-8 md:flex-row md:items-center md:gap-0 md:px-8 lg:px-12 ">
        <div className="flex w-full justify-between gap-4 text-2xl md:w-auto md:justify-start xl:text-3xl">
          {onEdit ? (
            <div className="flex gap-2">
              <InputLayout
                className="rounded-md"
                value={newTitle}
                sizes="sm"
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <BtnLayout
                onClick={handleEdit}
                sizes="sm"
                className="rounded-md bg-shelfTextColor text-white duration-200 hover:bg-opacity-80"
              >
                저장
              </BtnLayout>
            </div>
          ) : (
            <span>{name}</span>
          )}
        </div>
        <div className="flex gap-4">
          <BtnLayout
            disabled={!bookList.length}
            href={`/category/${id}`}
            sizes="sm"
            className="group rounded-md bg-shelfTextColor text-white"
          >
            더보기
            <FaArrowRight className="duration-300 group-hover:translate-x-2" />
          </BtnLayout>
          <BtnLayout
            href={`/category/add?category=${name}&id=${id}`}
            color="shelfTextColor"
            sizes="sm"
            className="rounded-md border border-shelfTextColor text-shelfTextColor hover:bg-shelfTextColor hover:text-white"
          >
            책 추가하기
            <FaPlus />
          </BtnLayout>

          <Edit
            className="border border-shelfTextColor text-shelfTextColor hover:bg-shelfTextColor hover:text-white"
            onEdit={() => setOnEdit(true)}
            onRemove={() => remove(id)}
          />
        </div>
      </div>
      <div className="flex h-full w-full gap-8 overflow-auto p-4 md:p-8 lg:gap-12 lg:p-12 2xl:gap-16">
        {ItemList}
      </div>
      <Shelf />
    </div>
  );
};
