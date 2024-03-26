import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";

export const CateList = ({ category }: { category: string }) => {
  return (
    <div className="relative flex w-full flex-col">
      <span className="px-12 pt-8 text-2xl xl:text-3xl">{category}</span>
      <div className="flex h-full w-full overflow-auto p-8 lg:p-12 gap-6 lg:gap-8 2xl:gap-12">
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
