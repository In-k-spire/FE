import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { BookType } from "@/type/book";
import FormatedTitle from "@/utils/separateTitle";
import { useRef } from "react";
import { useSwipeOnScroll } from "@/hooks/useSwipeOnScroll";
const BookList = ({
  setSelectedBookId,
  books,
}: {
  setSelectedBookId: (v: number) => void;
  books: BookType[];
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  useSwipeOnScroll(swiperRef)
  const list = books?.map((book: BookType, idx: number) => {
    const formatTitle = FormatedTitle(book.title);
    return (
      <SwiperSlide key={idx}>
        {({ isActive }) => (
          <div
            className={`h-fit w-fit cursor-pointer whitespace-nowrap text-4xl font-thin text-grayscale/40 duration-300 ${
              isActive ? "text-primary" : null
            }`}
          >
            {formatTitle}
          </div>
        )}
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      ref = {swiperRef}
      className="flex h-full flex-1 items-center"
      slidesPerView={15}
      direction="vertical"
      // loop={true}
     
      centeredSlides={true}
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
