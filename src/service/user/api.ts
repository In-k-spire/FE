import { server } from "@/api/instance/instance";
import authorization from "@/api/token/authorization";
import { LoginProps } from "@/type/user/user";
import { hasCookie } from "cookies-next";
export const getUser = async () => {
  if (!hasCookie("accessToken")) return { name: "", id: "" };
  const { data } = await server.get("/user", authorization());
  return data;
};
