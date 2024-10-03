import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import { Storage } from "@/api/storage/storage";
import useApiError from "@/hooks/useApiError";
import { toast } from "react-toastify";
import { useSetTokenStore } from "@/store/token";

export const useLoginMutation = () => {
  const { handleError } = useApiError();
  const setToken = useSetTokenStore();
  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: login,
    onSuccess: (res: any) => {
      setToken(res);
      const { accessToken, refreshToken } = res;
      Storage.setItem("accessToken", accessToken);
      Storage.setItem("refreshToken", refreshToken);
      toast.success("로그인 성공!");
    },
    onError: handleError,
  });
  return { loginMutate, ...restMutation };
};
