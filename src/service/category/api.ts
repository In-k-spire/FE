import { server } from "@/api/instance/instance";
import authorization from "@/api/token/authorization";

export const getCategory = async () => {
  const { data } = await server.get("/category", authorization());
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
  await server.delete(`/category/${id}`, authorization());
};

export const editCategoryById = async (props: { name: string; id: number }) => {
  const { name, id } = props;
  await server.patch(`/category`, { id: id, name: name }, authorization());
};
