"use client";
import useSideBar from "../hooks/useSideBar";
export default function Home() {
  const { toggleIsOpen } = useSideBar();
  return (
    <div className="flex w-full justify-between">
      <div>
        <span>책을 읽고 자신의 생각을 정리해보세요</span>
      </div>
    </div>
  );
}
