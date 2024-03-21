import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";

export const CateList = () => {
  const test = [0,1,2,3,4,5,6,7,8,9,10].map((item,idx) => {
    return (
      <>
        <CateItem />
        {idx % 3 === 2 && <Shelf/>}
      </>
    );
  })
  return (
    <div className="relative flex w-full flex-col">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-12 gap-8">
        {test}
      </div>
    </div>
  );
};
