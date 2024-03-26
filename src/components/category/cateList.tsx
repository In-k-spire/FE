import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";

export const CateList = ({ category }: { category: string }) => {
  return (
    <div className="relative flex w-full flex-col">
      <span className="px-8 pt-8 lg:px-12  text-2xl xl:text-3xl">{category}</span>
      <div className="flex h-full w-full overflow-auto p-8 lg:p-12 gap-8 lg:gap-12 2xl:gap-16">
        <CateItem />
        <CateItem />
        <CateItem />
        <CateItem />
        <CateItem />
      </div>
      <Shelf />
    </div>
  );
};
