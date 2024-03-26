import { CateList } from "@/components/category/cateList";
import { RecentItem } from "@/components/category/recentItem";

export default function Report() {
  return (
    <div className="flex w-full  items-center justify-center">
      <div className="flex w-full flex-col rounded-xl  bg-gradient-to-b from-[#E6F5FA] ">
        <RecentItem />
        <CateList category="과학" />
        <CateList category="과학" />
        <CateList category="과학" />
        <CateList category="과학" />
      </div>
    </div>
  );
}
