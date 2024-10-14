import { server } from "@/api/instance/instance";
import authorization from "@/api/token/authorization";
import { hasCookie } from "cookies-next";
export const getUser = async () => {
  if (!hasCookie("accessToken")) return { name: "", id: "" };
  const { data } = await server.get("/user", authorization());
  return data;
};

export const logout = async () => {
  await server.delete("/auth/logout", authorization());
};
