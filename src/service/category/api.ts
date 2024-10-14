import { server } from "@/api/instance/instance";
import authorization from "@/api/token/authorization";

export const getCategory = async (lastId?: number, name?: string) => {
  const { data } = await server.get(
    `/category/page?${lastId ? `lastId=${lastId}` : ""}${name ? `name=${name}` : ""}&limit=3`,
    authorization(),
  );
  return data;
};

export const setCategory = async (name: string) => {
  await server.post("/category", { name: name }, authorization());
};

export const getCategoryById = async (id: string) => {
  const { data } = await server.get(`/category/${id}`, authorization());
  return data;
};

export const removeCategoryById = async (id: number) => {
  console.log("remove");
  await server.delete(`/category/${id}`, authorization());
};

export const editCategoryById = async (props: { name: string; id: number }) => {
  const { name, id } = props;
  await server.patch(`/category`, { id: id, name: name }, authorization());
};
