import { UserType } from "@/type/user/user";
import { atom, useRecoilState } from "recoil";

const userState = atom<UserType>({
    key : 'user',
    default : {
        code : ''
    }
})


export const useUserStore = () => useRecoilState(userState);