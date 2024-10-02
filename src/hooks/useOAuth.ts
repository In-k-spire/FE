"use client";
import { server } from "@/api/instance/instance";
import { useRouter } from "next/navigation";

const useOauth = () => {
  const router = useRouter();
  const redirectOAuth = async (provider: string) => {
    const { data } = await server.get(
      `/auth/${provider}/uri?redirectUri=http://localhost:3000/oauth?provider=${provider}`,
    );
    console.log(data.uri, "uri");
    router.push(data.uri);
  };

  return { redirectOAuth };
};

export default useOauth;
