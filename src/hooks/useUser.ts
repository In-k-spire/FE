import { useUserQuery } from "@/service/user/queries";
import { useUserStore } from "@/store/user"

export const useUser = () => {
    const [user, setUser] = useUserStore();
    const {data}  = useUserQuery();
    console.log(data)
}