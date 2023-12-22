import Image from "next/image";
import Menu from "./menu";
import { RxDashboard } from "react-icons/rx";
import { FaAngleLeft } from "react-icons/fa6";
import useSideBar from "@/hooks/useSideBar";
const SideBar = () => {
  const { isOpen, toggleIsOpen } = useSideBar();
  return (
    <div
      className={`relative flex h-full flex-col px-4 py-16 shadow-lg duration-300 [&_span]:whitespace-nowrap ${
        isOpen ? "w-64" : "w-24 items-center [&_span]:hidden"
      }`}
    >
      <div
        className=" bg-grayscale/20 hover:text-white absolute right-0 flex h-10 w-3 cursor-pointer items-center justify-center rounded-l-xl text-primary duration-200 hover:w-5 hover:bg-primary"
        onClick={toggleIsOpen}
      >
        <FaAngleLeft
          size=".75rem"
          className={`transform font-thin ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <div className="mb-10 flex items-center px-2">
        <Image
          alt="프로필"
          src="https://i.ytimg.com/vi/a6Tvy1tubRs/mqdefault.jpg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex flex-col justify-center">
          <span className="ml-2 font-bold">DoHi0512</span>
          <span className="text-secondary ml-2 text-xs font-medium">
            donghuni642@gmail.com
          </span>
        </div>
      </div>
      <Menu icon={<RxDashboard />} title="홈" />
      <Menu icon={<RxDashboard />} title="독후감" />
      <Menu icon={<RxDashboard />} title="통계" />
    </div>
  );
};

export default SideBar;
