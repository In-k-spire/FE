import { server } from "@/api/instance/instance";
import { LoginProps } from "@/type/user/user";

export const getUser = async () => {
  const { data } = await server.get("/");
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
