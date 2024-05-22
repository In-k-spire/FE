import BookLayout from "@/components/share/book";
import { BookType } from "@/type/book";
import { InfoItem } from "./infoItem";
import FormatedTitle from "@/utils/formatTitle";
import BtnLayout from "@/components/share/button";
import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
export const BookInfo = ({ book }: { book: BookType }) => {
  return (
    <div className="flex justify-center gap-16">
      <BookLayout image={book.image} sizes="xl" />
      <div className="flex flex-col gap-2">
        <InfoItem title="제목" value={FormatedTitle(book.title)} />
        <InfoItem title="작가" value={book.author} />
        <InfoItem title="출판사" value={book.publisher} />
        <InfoItem title="출판일자" value={book.pubdate} />
        <div className="flex flex-col">
          <div className="flex gap-4">
            <BtnLayout
              color="primary"
              filled="ghost"
              className="ow:w-48"
              shadow="shadow-sm"
            >
              <IoEarthOutline size="1.5rem" />
              전체 공개
            </BtnLayout>
            <BtnLayout
              shadow="shadow-sm"
              color="primary"
              className="ow:w-44"
              filled="ghost"
            >
              <CiLock size="1.5rem" />
              비공개
            </BtnLayout>
          </div>
        </div>
      </div>
    </div>
  );
};
