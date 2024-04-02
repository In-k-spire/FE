import { useMutation } from "@tanstack/react-query"
import { login } from "./api"
import { LoginProps } from "@/type/user/user"
import { AxiosResponse } from "axios"

export const useLoginMutation = () => {
    const { mutate: loginMutate, ...restMutation } = useMutation({
      mutationFn: (props: LoginProps) => login(props),
      onSuccess: (res: AxiosResponse) => {
        console.log(res);
      },
    });
    return {loginMutate, ...restMutation}
}