import { useQuery } from "@tanstack/react-query"
import { getUser } from "./api"
import { OAuthType } from "@/type/oauth"

export const useUserQuery = () => {
    const {data , ...restQuery} = useQuery({
        queryKey : ['user'],
        queryFn : getUser,
        retry : 1
    })
    return {data : data, ...restQuery}
}