import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";

export const CateList = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="grid w-full grid-cols-3 gap-8 p-12">
        <CateItem />
        <CateItem />
        <CateItem />
      </div>
      <Shelf />
    </div>
  );
};
