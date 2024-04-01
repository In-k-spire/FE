import { useUserQuery } from "@/service/user/queries";
import { useUserStore } from "@/store/user"

export const useUser = (oauth : string) => {
    const [user, setUser] = useUserStore();
    const {data}  = useUserQuery(oauth);
    console.log(data)
}