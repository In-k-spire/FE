import sidebarAtomState from "@/store/sidebar";
import { useRecoilState } from "recoil";

const useSideBar = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarAtomState);
  const { page } = sidebar;

  const changePage = (newPage: string) => {
    setSidebar((prev) => ({ ...prev, page: newPage }));
  };

  return { page, changePage };
};

export default useSideBar;
