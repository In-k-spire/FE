import { server } from "@/api/instance/instance";
import authorization from "@/api/token/authorization";
import type { GetBooks } from "@/type/naver";

export const getBooks = async ({ query, display }: GetBooks) => {
  if (!query) return [];
  const { data } = await server.get(
    `/book/search?query=${query}&display=${display}`,
    authorization(),
  );
  return data;
};
