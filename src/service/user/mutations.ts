import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "./api";
import { deleteCookie } from "cookies-next";
import { toast } from "react-toastify";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("로그아웃 성공!");
    },
  });

  return { logoutMutate: mutate };
};
