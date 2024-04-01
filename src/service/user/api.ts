import { server } from "@/api/instance/instance"
import { OAuthType } from "@/type/oauth";

export const getUser = async (oauth : string) => {
    const {data : redirectUrl} = await server.get(`/auth/${oauth}`);
    console.log(redirectUrl)
    return 'data'
}