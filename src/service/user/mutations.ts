import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import { LoginProps } from "@/type/user/user";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { Storage } from "@/api/storage/storage";
import useApiError from "@/hooks/useApiError";
import { toast } from "react-toastify";

export const useLoginMutation = () => {
  const { handleError } = useApiError();
  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: login,
    onSuccess: (res: any) => {
      const { accessToken, refreshToken } = res;
      Storage.setItem("accessToken", accessToken);
      Storage.setItem("refreshToken", refreshToken);
    },
    onError: handleError,
  });
  return { loginMutate, ...restMutation };
};
