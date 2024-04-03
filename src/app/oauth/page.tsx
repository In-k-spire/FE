"use client";
import { useLoginMutation } from "@/service/user/mutations";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function OAuth() {
  const { loginMutate, isPending  } = useLoginMutation();
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get("code");
  const provider = params.get("provider");
  useEffect(() => {
    loginMutate({ code, provider });
    if (!isPending) router.push("/");
  }, []);
  
  return (
    <div className="flex h-full w-full items-center justify-center">
        <div className="text-4xl font-medium">
          로그인 중입니다. 잠시만 기다려주세요.
        </div>
    </div>
  );
}
