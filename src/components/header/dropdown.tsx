import Link from "next/link";
import { useState } from "react";

const HeaderDropDown = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="group cursor-pointer">
      <span className="text-lg">{text}</span>
      <div className="absolute flex flex-col gap-4 rounded-md border border-grayscale/20 bg-white px-6 py-4 opacity-0 shadow-sm duration-100 group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
};

export default HeaderDropDown;
