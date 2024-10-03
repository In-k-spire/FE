import { Storage } from "@/api/storage/storage";
import { useUserQuery } from "@/service/user/queries";
import { useSetTokenStore } from "@/store/token";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useUserStore();
  const setToken = useSetTokenStore();
  const { data } = useUserQuery();
  useEffect(() => {
    setUser(data);
  }, [data]);

  const logout = () => {
    Storage.removeItem("accessToken");
    Storage.removeItem("refreshToken");
    setToken({});
  };
  return { user, logout };
};

export default useUser;
