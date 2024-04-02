import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import { LoginProps } from "@/type/user/user";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
  const router = useRouter();
  const { mutate: loginMutate, ...restMutation } = useMutation({
    mutationFn: (props: LoginProps) => login(props),
    onSuccess: (res: AxiosResponse) => {
      router.push("/");
    },
    onError: (err: AxiosError) => router.push("/"),
  });
  return { loginMutate, ...restMutation };
};
