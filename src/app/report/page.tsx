import { CateList } from "@/components/category/cateList";
import { RecentItem } from "@/components/category/recentItem";
import { Shelf } from "@/components/share/shelf";

export default function Report() {
  return (
    <div className="flex w-full  items-center justify-center">
      <div className="flex w-full flex-col rounded-xl bg-[#f6f3ec] ">
        <RecentItem />
        <CateList category="과학" />
        <CateList category="과학" />
        <CateList category="과학" />
        <CateList category="과학" />
      </div>
    </div>
  );
}
