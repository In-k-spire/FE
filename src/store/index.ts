import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface SideBar {
  isOpen: boolean;
  page: string;
}

const sidebarAtomState = atom<SideBar>({
  default: {
    isOpen: false,
    page: "홈",
  },
  key: "side",
});

export default sidebarAtomState;
