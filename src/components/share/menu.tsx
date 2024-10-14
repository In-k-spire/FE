import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useModal } from "@/hooks/useModal";
import BtnLayout from "./button";
interface IMenu {
  onEdit: () => void;
  onRemove: () => void;
  className?: string;
}
const Menu = ({ onEdit, onRemove, className }: IMenu) => {
  const [isOpen, setIsOpen] = useState(false);
  const { Modal, open, close } = useModal();

  const handleRemove = () => {
    onRemove();
    close();
  };
  return (
    <div onClick={(e) => e.stopPropagation()} className="z-10">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${className} relative flex aspect-square   h-full cursor-pointer items-center justify-center rounded-md duration-200`}
      >
        <MdOutlineMenu size="1.25rem" />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute right-0 top-[110%] pb-4`}
        >
          <div className="flex w-full flex-col items-center gap-2 rounded-md bg-white p-2 shadow-md">
            <div
              onClick={onEdit}
              className="flex items-center gap-2 rounded-md px-2 py-1 text-black duration-200 hover:bg-gray-100"
            >
              <FaRegEdit />
              <span className=" whitespace-nowrap">수정</span>
            </div>
            <div
              onClick={open}
              className="flex items-center gap-2 rounded-md px-2 py-1 text-danger duration-200 hover:bg-gray-100"
            >
              <AiOutlineDelete />
              <span className=" whitespace-nowrap">삭제</span>
            </div>
          </div>
        </div>
      </div>
      <Modal>
        <div className="flex flex-col">
          <span className="text-xl font-bold">삭제 확인</span>
          <span className="text-sm text-gray-400">
            정말로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
          </span>
          <div className="mt-4 flex justify-end gap-2">
            <BtnLayout
              className="rounded-md border  border-gray-300 duration-200 hover:bg-gray-100"
              sizes="sm"
              onClick={close}
            >
              취소
            </BtnLayout>
            <BtnLayout
              onClick={handleRemove}
              className="rounded-md bg-danger text-white duration-200 hover:bg-opacity-80"
              sizes="sm"
            >
              삭제
            </BtnLayout>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Menu;
