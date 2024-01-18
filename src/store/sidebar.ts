import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
interface SideBar {
  isOpen: boolean;
  page: string;
}

const sidebarAtomState = atom<SideBar>({
  default: {
    isOpen: true,
    page: "/",
  },
  key: "side",
  effects_UNSTABLE: [persistAtom],
});

export default sidebarAtomState;
