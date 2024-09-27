import { DropDownProps } from "@/type/dropdown";
import { useState } from "react";

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
    <div className={`${className} ${SIZES[sizes]} cursor-pointer`}>
      <div
        className={`rounded-md border border-gray-200 bg-white px-6 py-2 text-center text-primary shadow-md ${
          isOpen ? " rounded-b-md" : "rounded-b-none"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </div>
      <div
        className={`max-h-40 w-full overflow-auto ${
          isOpen ? "hidden" : "block"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownMain;
