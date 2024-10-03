import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
const tokenState = atom({
  key: "token",
  default: {
    accessToken: "",
    refreshToken: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const useTokenStore = () => useRecoilState(tokenState);
export const useSetTokenStore = () => useSetRecoilState(tokenState);
export const useTokenValueStore = () => useRecoilValue(tokenState);
