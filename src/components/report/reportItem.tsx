import { ReportType } from "@/type/report";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
export const ReportItem = ({ title, date, page, desc }: ReportType) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <div
        className={`group ${
          isOpen
            ? "rounded-b-none border-2 border-primary"
            : "border border-gray-300"
        } relative flex h-16 w-full cursor-pointer items-center justify-between rounded-md  px-4`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaAngleDown
          className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-300 duration-300 group-hover:text-black ${
            isOpen ? "rotate-180 text-black" : "rotate-0 "
          }`}
        />
        <span className="text-lg font-bold">{title}</span>
        <div className="flex items-center gap-4">
          <span className="text-sm">{date.toLocaleDateString()}</span>
          <div className="rounded-full bg-primary px-3 py-1 text-xs text-white">
            {page}p ~ {page}p
          </div>
          <div
            className="flex h-8 w-8 cursor-pointer  items-center justify-center rounded-full duration-300 hover:bg-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div
        className={`mb-2 w-full overflow-auto rounded-b-md px-4 transition-[height,padding] duration-300   ${
          isOpen
            ? "h-48 border-2 border-t-0 border-primary py-4"
            : "h-0 border border-none py-0"
        }`}
      >
        {desc}
      </div>
    </>
  );
};
