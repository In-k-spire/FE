import { useQuery } from "@tanstack/react-query"
import { getUser } from "./api"
import { OAuthType } from "@/type/oauth"

export const useUserQuery = () => {
    const {data , ...restQuery} = useQuery({
        queryKey : ['user'],
        queryFn : getUser,
    })
    return {data : data, ...restQuery}
}