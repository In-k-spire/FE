import { ReactNode } from "react";

interface DropDownItemProps {
  selected?: boolean;
  onClick: (v: any) => any;
  children: ReactNode;
}
export const DropDownItem = ({
  selected = false,
  children,
  onClick,
}: DropDownItemProps) => {
  return (
    <div
      className={`${
        selected ? "text-primary" : "text-black"
      } w-full px-3 py-1 duration-200 hover:bg-gray-100`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropDownItem;
