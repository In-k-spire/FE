import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const ReviewList = () => {
  const [activeId, setActiveId] = useState(-1);
  const handleActiveId = (id: number) => {
    if (activeId == id) setActiveId(-1);
    else setActiveId(id);
  };
  const ListItem = [0, 1, 2].map((_, id) => (
    <div className="flex flex-col">
      <div
        onClick={() => handleActiveId(id)}
        className="group flex cursor-pointer items-center justify-between  py-4"
      >
        <span className=" group-hover:underline-primary font-semibold group-hover:underline group-hover:underline-offset-4">
          독후감1
        </span>
        <div className="flex items-center">
          <span className=" group-hover:underline-primary text-sm font-semibold text-gray-400 group-hover:underline group-hover:underline-offset-4">
            2024.9.27. (1p ~ 1p)
          </span>
          <RiArrowDropDownLine size="2rem" />
        </div>
      </div>
      <div
        className={`${
          activeId == id ? "h-32 py-2" : "h-0 py-0"
        } overflow-hidden border-b border-gray-300 duration-300`}
      >
        HIHI
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl font-bold">독후감</span>
      {ListItem}
    </div>
  );
};

export default ReviewList;
