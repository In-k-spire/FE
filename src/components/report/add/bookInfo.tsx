import BookLayout from "@/components/share/book";
import { BookType } from "@/type/book";
import { InfoItem } from "./infoItem";
import FormatedTitle from "@/utils/formatTitle";
import BtnLayout from "@/components/share/button";
import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import DropDown from "@/components/share/dropdown";
export const BookInfo = ({ book }: { book: BookType }) => {
  const [option, setOption] = useState("public");
  const [category, setCategory] = useState();
  const [selected, setSelected] = useState(false);
  const BtnOption = {
    selected: {
      color: "primary",
      className: "ow:w-48 ow:hover:opacity-100",
      rounded: "rounded-md",
      shadow: "shadow-sm",
    },
    none: {
      color: "grayscale/40",
      className:
        "ow:w-48 ow:hover:bg-transparent ow:hover:text-grayscale/40 ow:hover:opacity-60",
      filled: "ghost",
      rounded: "rounded-md",
      shadow: "shadow-sm",
    },
  };
  return (
    <div className="flex justify-center gap-16">
      <BookLayout image={book.image} sizes="xl" />
      <div className="flex flex-col gap-2">
        <InfoItem title="제목" value={FormatedTitle(book.title)} />
        <InfoItem title="작가" value={book.author} />
        <InfoItem title="출판사" value={book.publisher} />
        <InfoItem title="출판일자" value={book.pubdate} />
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex gap-4">
            <BtnLayout
              {...(option === "public" ? BtnOption.selected : BtnOption.none)}
              onClick={() => setOption("public")}
            >
              <IoEarthOutline size="1.5rem" />
              전체 공개
            </BtnLayout>
            <BtnLayout
              {...(option === "private" ? BtnOption.selected : BtnOption.none)}
              onClick={() => setOption("private")}
            >
              <CiLock size="1.5rem" />
              비공개
            </BtnLayout>
          </div>
        </div>
        <DropDown title="카테고리를 선택해주세요" sizes="full" color="primary">
          <DropDown.Item selected onClick={() => console.log("click")}>
            테스트1
          </DropDown.Item>
          <DropDown.Item selected onClick={() => console.log("click")}>
            테스트1
          </DropDown.Item>
          <DropDown.Item selected onClick={() => console.log("click")}>
            테스트1
          </DropDown.Item>
          <DropDown.Item selected onClick={() => console.log("click")}>
            테스트1
          </DropDown.Item>
          <DropDown.Item
            selected={selected}
            onClick={() => setSelected((prev) => !prev)}
          >
            테스트1
          </DropDown.Item>
        </DropDown>
        <div className="flex w-full justify-end gap-4">
          <BtnLayout rounded="rounded-md" sizes="sm" color="danger">
            취소
          </BtnLayout>
          <BtnLayout rounded="rounded-md" sizes="sm" color="primary">
            등록하기
          </BtnLayout>
        </div>
      </div>
    </div>
  );
};
