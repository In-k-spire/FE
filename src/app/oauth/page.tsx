"use client";
import { useLoginMutation } from "@/service/user/mutations";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
interface IOAuth {
  searchParams: {
    code: string;
    provider: string;
  };
}
export default function OAuth({ searchParams }: IOAuth) {
  const { loginMutate, isPending } = useLoginMutation();
  const { code, provider } = searchParams;
  const router = useRouter();
  useEffect(() => {
    if (code && provider) loginMutate({ code, provider });
    if (!isPending) router.replace("/");
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-4xl font-medium">
        로그인 중입니다. 잠시만 기다려주세요.
      </div>
    </div>
  );
}
