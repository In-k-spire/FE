import { CateList } from "@/components/category/cateList";

export default function Report() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full h-full flex flex-col rounded-xl bg-[#f6f3ec] border border-grayscale/20">
        <CateList  />
      </div>
    </div>
  );
}


