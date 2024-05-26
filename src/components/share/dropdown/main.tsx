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
    <div className={`${className} ${SIZES[sizes]}`}>
      <div
        className="px-6 py-1 text-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </div>
      <div className={`w-full ${isOpen ? "hidden" : "block"}`}>{children}</div>
    </div>
  );
};

export default DropDownMain;
