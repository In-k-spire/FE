"use client";
import { useLoginMutation } from "@/service/user/mutations";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function OAuth() {
  const { loginMutate } = useLoginMutation();
  const params = useSearchParams();
  const code = params.get("code");
  const provider = params.get("provider");
  useEffect(() => {
    loginMutate({ code, provider });
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-4xl font-medium">
        로그인 중입니다. 잠시만 기다려주세요.
      </div>
    </div>
  );
}
