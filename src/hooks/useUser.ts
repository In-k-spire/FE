import { useUserQuery } from "@/service/user/queries";
import { useUserStore } from "@/store/user";

const useUser = () => {
  const [user, setUser] = useUserStore();
  const { data } = useUserQuery();
  return user;
};

export default useUser;
