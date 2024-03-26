import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";

export const CateList = ({ category }: { category: string }) => {
  return (
    <div className="relative flex w-full flex-col">
      <span className="px-12 pt-8 text-3xl">{category}</span>
      <div className="grid h-full w-full grid-cols-[3fr_1fr] gap-12 p-12">
        <div className="flex justify-between">
          <CateItem />
          <CateItem />
          <CateItem />
        </div>
        <div className="flex items-center">
          
        </div>
      </div>
      <Shelf />
    </div>
  );
};
