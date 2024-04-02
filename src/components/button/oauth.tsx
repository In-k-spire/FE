import { server } from "@/api/instance/instance";
import { AxiosResponse } from "axios";
import { ReactNode, useEffect, useState } from "react";
export const OAuthBtn = ({
  children,
  provider,
}: {
  children: ReactNode;
  provider: "github" | "google";
}) => {
  const COLOR = {
    github: "bg-black",
    google: "bg-white",
  };
  const [uri, setUri] = useState<string>("");
  useEffect(() => {
    server
      .get(
        `/auth/${provider}/uri?redirectUri=localhost:3000/oauth?provider=${provider}`,
      )
      .then((res: AxiosResponse) => setUri(res.data.uri))
      .catch((err) => console.log(err));
  }, []);
  return (
    <a
      href={uri}
      className={`flex h-12 w-12  items-center justify-center rounded-full border border-grayscale/20 lg:h-14 lg:w-14  xl:h-16 xl:w-16 ${COLOR[provider]}`}
    >
      {children}
    </a>
  );
};
export default OAuthBtn;
