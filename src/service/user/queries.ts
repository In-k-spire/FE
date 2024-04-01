import { useQuery } from "@tanstack/react-query"
import { getUser } from "./api"
import { OAuthType } from "@/type/oauth"

export const useUserQuery = (oauth : string) => {
    const {data , ...restQuery} = useQuery({
        queryKey : ['user'],
        queryFn : () => getUser(oauth),
    })
    return {data : data, ...restQuery}
}