import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { Storage } from "@/api/storage/storage";
import { useTokenValueStore } from "@/store/token";

export const useUserQuery = () => {
  const token = useTokenValueStore();
  const { data, ...restQuery } = useQuery({
    queryKey: ["user", token],
    queryFn: getUser,
    enabled: !!token.accessToken,
    retry: 0,
  });
  return { data, ...restQuery };
};
