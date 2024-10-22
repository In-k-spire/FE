"use client";
import { server } from "@/api/instance/instance";
import { useRouter } from "next/navigation";

const useOauth = () => {
  const router = useRouter();
  const redirectOAuth = async (provider: string) => {
    const { data } = await server.get(
      `/auth/${provider}/uri?redirectUri=${process.env.NEXT_PUBLIC_BASE}/oauth?provider=${provider}`,
    );
    router.replace(data.uri);
  };

  return { redirectOAuth };
};

export default useOauth;
