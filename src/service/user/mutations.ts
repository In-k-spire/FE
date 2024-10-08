import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "./api";
import { Storage } from "@/api/storage/storage";
import { toast } from "react-toastify";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: login,
    onSuccess: (res: any) => {
      const { accessToken, refreshToken } = res;
      Storage.setItem("accessToken", accessToken);
      Storage.setItem("refreshToken", refreshToken);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("로그인 성공!");
    },
  });
  return { loginMutate, ...restMutation };
};
