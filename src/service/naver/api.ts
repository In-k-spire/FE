import { naver } from "@/api/instance/instance";
import type { GetBooks } from "@/type/naver";

export const getBooks = async ({ query, display }: GetBooks) => {
  const { data } = await naver.get("/", {
    params: { query: query, display: display },
  });
  return data;
};
