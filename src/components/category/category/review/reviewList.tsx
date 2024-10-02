import { useBookReview } from "@/service/book/queries";
import { BookReviewType } from "@/type/book";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const ReviewList = ({ id }: { id: number }) => {
  const { review } = useBookReview(id);
  const [activeId, setActiveId] = useState(-1);
  const handleActiveId = (id: number) => {
    if (activeId == id) setActiveId(-1);
    else setActiveId(id);
  };
  const ListItem = review?.map(
    (
      { content, oneLineReview, lastModifiedAt }: BookReviewType,
      id: number,
    ) => (
      <div key={id} className="flex flex-col">
        <div
          onClick={() => handleActiveId(id)}
          className="group flex cursor-pointer items-center justify-between  py-4"
        >
          <span className=" group-hover:underline-primary font-semibold group-hover:underline group-hover:underline-offset-4">
            {oneLineReview}
          </span>
          <div className="flex items-center">
            <span className=" group-hover:underline-primary text-sm font-semibold text-gray-400 group-hover:underline group-hover:underline-offset-4">
              {new Date(lastModifiedAt || "").toLocaleDateString()} (1p ~ 1p)
            </span>
            <RiArrowDropDownLine size="2rem" />
          </div>
        </div>
        <div
          className={`${
            activeId == id ? "h-32 py-2" : "h-0 py-0"
          } overflow-hidden border-b border-gray-300 duration-300`}
        >
          {content}
        </div>
      </div>
    ),
  );
  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl font-bold">독후감</span>
      {ListItem}
    </div>
  );
};

export default ReviewList;
