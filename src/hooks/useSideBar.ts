import sidebarAtomState from "@/store";
import { useRecoilState } from "recoil";

const useSideBar = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarAtomState);
  const { page, isOpen } = sidebar;

  const toggleIsOpen = () => {
    setSidebar((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const changePage = (newPage: string) => {
    setSidebar((prev) => ({ ...prev, page: newPage }));
  };

  return { page, isOpen, toggleIsOpen, changePage };
};

export default useSideBar;
