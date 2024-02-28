import useBook from "@/hooks/useBook";
import BookLayout from "../book/bookLayout";

export const SelectedBook = () => {
  const { book } = useBook();
  return (
    <div className="group relative">
      <div className="transform-preserve3d relative z-10 origin-top-left border border-secondary shadow-lg group-hover:animate-flip">
        <BookLayout
          image={book.image}
          className="backface-invisible z-10"
          width="w-[24rem]"
          heigth="h-[36rem]"
        />
        <div className="absolute left-0 top-0 z-0 h-[36rem] w-[24rem] [transform:rotateY(-180deg)]">
          안녕
        </div>
      </div>
      <div className="absolute left-0 top-0 h-[36rem] w-[24rem] overflow-auto border border-secondary">
        {book.description}
      </div>
      {/* <BtnLayout className="group relative h-[2.5rem] w-[8rem] border-2 border-none bg-primary  text-white shadow-md">
          자세히 보기
          <AiOutlineMinus
            className="absolute right-4 opacity-0 duration-300 group-hover:opacity-100"
            size="1.25rem"
          />
          <MdOutlineKeyboardArrowRight
            size="1.5rem"
            className="relative right-0 duration-300 group-hover:-right-2 "
          />
        </BtnLayout> */}
    </div>
  );
};
