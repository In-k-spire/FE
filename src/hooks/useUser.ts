import { useUserQuery } from "@/service/user/queries";
import { useUserStore } from "@/store/user";
import { useQueryClient } from "@tanstack/react-query";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useUser = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useUserStore();
  const router = useRouter();
  const { data } = useUserQuery();
  useEffect(() => {
    setUser(data);
  }, [data, setUser]);

  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    router.replace("/logout");
  };
  return { user, logout };
};

export default useUser;
