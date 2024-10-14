import { server } from "@/api/instance/instance";
import authorization from "@/api/token/authorization";
import { useLogoutMutation } from "@/service/user/mutations";
import { useUserQuery } from "@/service/user/queries";
import { useUserStore } from "@/store/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useUserStore();
  const { data } = useUserQuery();
  useEffect(() => {
    setUser(data);
  }, [data]);

  const { logoutMutate } = useLogoutMutation();

  return { user, logoutMutate };
};

export default useUser;
