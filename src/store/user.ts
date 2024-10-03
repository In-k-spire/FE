import { UserType } from "@/type/user/user";
import { atom, useRecoilState } from "recoil";

const userState = atom<UserType>({
  key: "user",
  default: {
    name: "",
    id: "",
  },
});

export const useUserStore = () => useRecoilState(userState);
