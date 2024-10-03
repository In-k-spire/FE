import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";

export const useUserQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  return { data, ...restQuery };
};
