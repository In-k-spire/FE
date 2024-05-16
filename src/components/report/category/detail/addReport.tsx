import { useEffect, useRef, useState } from "react";
import BtnLayout from "../../../share/button";

export const AddReport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const addRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (addRef.current && !addRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [addRef]);
  return (
    <div
      ref={addRef}
      className="mb-2 flex w-full flex-col  rounded-md border border-grayscale/30 "
    >
      <div className="flex h-16 items-center justify-between gap-4 p-4">
        <input
          onFocus={(e) => setIsOpen(!!e.target.value.length)}
          onChange={(e) => setIsOpen(!!e.target.value.length)}
          placeholder="한줄평을 입력해주세요"
          className="flex-1 text-lg outline-none"
        />
        <span className="text-sm">{new Date().toLocaleDateString()}</span>
        <div className="rounded-full bg-primary px-3 py-1 text-xs text-white">
          <input className="w-4 bg-inherit outline-none" />
          p ~
          <input className="w-4 bg-inherit outline-none" />p
        </div>
      </div>
      <div
        className={`${
          isOpen ? "h-64 border-t border-grayscale/30 py-4" : "h-0 py-0"
        } flex flex-col gap-4 overflow-hidden  px-4 transition-[height,padding] duration-300`}
      >
        <textarea
          placeholder={isOpen ? "독후감을 입력해주세요" : ""}
          className="w-full flex-1 outline-none"
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end">
          <BtnLayout
            color="primary"
            sizes="sm"
            filled="ghost"
            rounded="rounded-md"
            disabled={!!!content}
          >
            등록하기
          </BtnLayout>
        </div>
      </div>
    </div>
  );
};

export default AddReport;
