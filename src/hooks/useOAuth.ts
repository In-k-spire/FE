"use client";
import { server } from "@/api/instance/instance";
import { useRouter } from "next/navigation";

const useOauth = () => {
  const router = useRouter();
  const redirect =
    process.env.NEXT_PUBLIC_REDIRECT_URI || "http://localhost:3000";
  const redirectOAuth = async (provider: string) => {
    const { data } = await server.get(
      `/auth/${provider}/uri?redirectUri=${redirect}/oauth?provider=${provider}`,
    );
    router.replace(data.uri);
  };

  return { redirectOAuth };
};

export default useOauth;
