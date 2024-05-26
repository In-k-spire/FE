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
          : "border-grayscale/30 bg-white text-black"
      } border px-6 py-1 text-center duration-200`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropDownItem;
