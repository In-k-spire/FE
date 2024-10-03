import { DropDownProps } from "@/type/dropdown";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const DropDownMain = ({
  children,
  sizes = "md",
  className,
  title,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const SIZES = {
    full: "w-full [&>*]:text-base [&>*]:lg:text-lg",
    sm: "[&>*]:text-sm [&>*]:lg:text-base",
    md: "[&>*]:text-base [&>*]:lg:text-lg",
    lg: "[&>*]:text-lg [&>*]:lg:text-xl",
    xl: "[&>*]:text-xl [&>*]:lg:text-2xl",
  };

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={`${className} ${SIZES[sizes]} relative cursor-pointer`}
    >
      <div
        className={`${
          isOpen ? "ring-2 ring-primary ring-offset-2" : ""
        } flex items-center justify-between rounded-md border border-gray-300 p-2 px-4`}
      >
        {title}
        <RiArrowDropDownLine
          size="1.5rem"
          className={`${isOpen ? "rotate-180" : "rotate-0"} duration-200`}
        />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute left-0 top-[120%] z-10  w-full  flex-col rounded-md border border-gray-300 bg-white p-1 shadow-sm`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownMain;
