import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "./api";
import { deleteCookie } from "cookies-next";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("로그아웃 성공!");
      router.replace("/");
    },
  });

  return { logoutMutate: mutate };
};
