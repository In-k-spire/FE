import useSideBar from "@/hooks/useSideBar";
import { ReactElement } from "react";
export const Menu = ({
  icon,
  title,
}: {
  icon: ReactElement;
  title: string;
}) => {
  const { changePage, page, isOpen } = useSideBar();
  return (
    <div
      className={`hover:bg-grayscale/20 relative mt-4 flex w-full cursor-pointer rounded-md px-2 py-2  duration-300 [&_svg]:h-6 [&_svg]:w-6 
      ${page === title ? "[&>*]:text-primary [&>*]:duration-200" : null} 
      ${isOpen ? "w-full" : "w-auto justify-center"}`}
      onClick={() => changePage(title)}
    >
      {icon}
      <span className="ml-2 font-semibold">{title}</span>
    </div>
  );
};

export default Menu;
