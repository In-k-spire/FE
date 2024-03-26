import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";

export const CateList = ({ category }: { category: string }) => {
  return (
    <div className="relative flex w-full flex-col">
      <span className="px-12 pt-8 text-3xl">{category}</span>
      <div className="flex h-full w-full gap-12 overflow-auto p-12">
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
