import ScrollChain from "@/utils/scrollChain";
import CateItem from "./cateItem";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useBook from "@/hooks/useBook";
import axios from "axios";
import FormatedTitle from "@/utils/separateTitle";
const CategoryList = () => {
  const divRef = useRef(null);
  const { book, setBook } = useBook();
  const [test, setTest] = useState<any[]>([]);
  ScrollChain(divRef);
  useEffect(() => {
    const gkatn = async () => {
      const res = await axios.get("/api?query=수학&display=50", {
        headers: {
          "X-Naver-Client-Id": "UY02C4mUhDR_oKNdNbIM",
          "X-Naver-Client-Secret": "MfX888QnzY",
        },
      });
      setTest(res.data.items);
    };
    gkatn();
  }, []);

  const cate = test.map((item, idx) => {
    const format = FormatedTitle(item.title);
    return (
      <Link
        href={`/report/2/${format}`}
        onClick={() => setBook(item)}
        onMouseEnter={() => setBook(item)}
      >
        <CateItem title={format} key={idx} />
      </Link>
    );
  });

  return (
    <div className="relative h-full flex-1 overflow-hidden ">
      <div
        className="absolute left-0 flex   flex-col items-start gap-4 duration-300"
        ref={divRef}
      >
        {cate}
      </div>
    </div>
  );
};

export default CategoryList;
