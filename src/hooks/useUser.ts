import { useUserQuery } from "@/service/user/queries";
import { useUserStore } from "@/store/user";

const useUser = () => {
  const [user, setUser] = useUserStore();
  const { data } = useUserQuery();
  console.log(data);
  return user;
};

export default useUser;
