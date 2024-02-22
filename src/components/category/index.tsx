import ScrollChain from "@/utils/scrollChain";
import CateItem from "./cateItem";
import { useRef } from "react";
import Link from "next/link";

const CategoryMain = () => {
  const divRef = useRef(null);
  ScrollChain(divRef);
  const Test = [
    "어린 왕자",
    "소나기",
    "아몬드",
    "김의관 행실록",
    "신데렐라",
    "태백산맥",
    "해리 포터와 마법사의 돌",
    "죽은 시인의 사회",
    "백설 공주",
    "거미의 집",
    "노인과 바다",
    "언어의 온도",
    "반지의 제왕",
    "서른 즈음에",
    "프랑켄슈타인",
    "아프니까 청춘이다",
    "여행의 이유",
    "젊은 그들의 세계",
    "동물농장",
    "물고기의 외식",
  ].map((item, idx) => {
    return (
      <Link href={"/report/2/1"}>
        <CateItem title={item} key={idx} />
      </Link>
    );
  });

  return (
    <div className="relative flex h-full justify-between overflow-hidden">
      <div className="h-[20rem] w-[10rem] border">HIHI</div>
      <div
        className="absolute right-0 flex flex-col items-end gap-4 duration-300"
        ref={divRef}
      >
        {Test}
      </div>
    </div>
  );
};

export default CategoryMain;
