import { CateList } from "@/components/category/cateList";

export default function Report() {
  return (
    <div className="flex items-center justify-center overflow-scroll  px-24">
      <div className="my-16  flex w-4/5 flex-col rounded-xl bg-[#f6f3ec] ">
        <CateList />
        <CateList />
        <CateList />
        <CateList />
        <CateList />
      </div>
    </div>
  );
}
