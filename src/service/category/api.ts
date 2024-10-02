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
