import { server } from "@/api/instance/instance"
import { LoginProps } from "@/type/user/user";



export const getUser = async () => {
   const {data } = await server.get('/')
}

export const login = async (props : LoginProps) => {
    const {data} = await server.post(`/auth/${props.provider}/token`, {
        authorizationCode : props.code,
        redirectUri : "/"
    })
    return data;
}