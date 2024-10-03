import { Storage } from "@/api/storage/storage";
import { useUserQuery } from "@/service/user/queries";
import { useUserStore } from "@/store/user";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useUser = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useUserStore();
  const router = useRouter();
  const { data } = useUserQuery();
  useEffect(() => {
    setUser(data);
  }, [data]);

  const logout = () => {
    Storage.removeItem("accessToken");
    Storage.removeItem("refreshToken");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    router.replace("/");
  };
  return { user, logout };
};

export default useUser;
