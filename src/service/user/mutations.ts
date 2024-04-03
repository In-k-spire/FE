import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import { LoginProps } from "@/type/user/user";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { Storage } from "@/api/storage/storage";
import useApiError from "@/hooks/useApiError";

export const useLoginMutation = () => {
  const router = useRouter();
  const {handleError} = useApiError();
  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: login,
    onSuccess: (res: AxiosResponse) => {
      const {accessToken, refreshToken} = res.data
      Storage.setItem('accessToken' , accessToken);
      Storage.setItem('refreshToken' , refreshToken);
      router.push("/");
    },
    onError: handleError
  });
  return { loginMutate, ...restMutation };
};
