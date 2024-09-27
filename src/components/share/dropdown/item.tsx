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
  console.log(selected);
  return (
    <div
      className={`${
        selected
          ? " border-white bg-primary text-white"
          : "border-gray-200 bg-white text-black"
      } w-full border px-6 py-1 text-center duration-200`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropDownItem;
