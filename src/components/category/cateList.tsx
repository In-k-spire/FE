import CateItem from "./cateItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNaverBooks } from "@/service/naver/queries";
import { BookType } from "@/type/book.type";
const CategoryList = () => {
  const { data, isError } = useNaverBooks("과학", 50);
  console.log(data);
  const cate = data?.map((item: BookType, idx: number) => (
    <SwiperSlide key={idx}>
      <CateItem title={item.title} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="flex h-full flex-1 items-center"
      slidesPerView={15}
      direction="vertical"
      loop={true}
    >
      {cate}
    </Swiper>
  );
};

export default CategoryList;
