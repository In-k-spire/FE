import { server } from "@/api/instance/instance"
import { useLoginMutation } from "@/service/user/mutations";
import { useSearchParams } from "next/navigation";

export const OAuth = async () => {
    const {loginMutate } = useLoginMutation()
    const params = useSearchParams();
    const code = params.get('code');
    const provider = params.get('provider');
    loginMutate({code,provider})
}


