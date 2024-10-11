import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "./api";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: login,
    onSuccess: (res: any) => {
      console.log(res);
      const { accessToken, refreshToken } = res;
      setCookie("accessToken", accessToken);
      setCookie("refreshToken", refreshToken);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("로그인 성공!");
    },
  });
  return { loginMutate, ...restMutation };
};
