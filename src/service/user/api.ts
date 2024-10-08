import { server } from "@/api/instance/instance";
import { Storage } from "@/api/storage/storage";
import authorization from "@/api/token/authorization";
import { LoginProps } from "@/type/user/user";

export const getUser = async () => {
  if (!!!Storage.getItem("accessToken")) return { name: "", id: "" };
  const { data } = await server.get("/user", authorization());
  return data;
};

export const login = async (props: LoginProps) => {
  const redirect =
    process.env.NEXT_PUBLIC_REDIRECT_URI || "http://localhost:3000";
  const { data } = await server.post(`/auth/${props.provider}/token`, {
    authorizationCode: props.code,
    redirectUri: `${
      props.provider == "google" ? `${redirect}/oauth?provider=google` : "/"
    }`,
  });
  return data;
};
