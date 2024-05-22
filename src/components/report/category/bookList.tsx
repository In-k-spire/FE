import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { BookType } from "@/type/book";
import FormatedTitle from "@/utils/formatTitle";
import { useRef } from "react";
import { useSwipeOnScroll } from "@/hooks/useSwipeOnScroll";
import Link from "next/link";
const BookList = ({
  setSelectedBookId,
  books,
}: {
  setSelectedBookId: (v: number) => void;
  books: BookType[];
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  useSwipeOnScroll(swiperRef);
  const list = books?.map((book: BookType, idx: number) => {
    const formatTitle = FormatedTitle(book.title);
    return (
      <SwiperSlide key={idx}>
        {({ isActive }) => (
          <Link
            href=""
            className={`h-fit w-fit cursor-pointer text-2xl font-thin  text-grayscale/40 duration-300 md:text-3xl lg:text-4xl ${
              isActive ? "text-primary" : null
            }`}
          >
            {formatTitle}
          </Link>
        )}
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      ref={swiperRef}
      className="flex h-full flex-1 items-center overflow-hidden"
      slidesPerView={"auto"}
      direction="vertical"
      centeredSlides={true}
      spaceBetween={15}
      slideToClickedSlide={true}
      onSlideChange={(swiperCore) => {
        const { activeIndex } = swiperCore;
        setSelectedBookId(activeIndex ? activeIndex : 0);
      }}
    >
      {list}
    </Swiper>
  );
};

export default BookList;
