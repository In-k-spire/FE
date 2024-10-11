import { getCookie } from "cookies-next";

const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  };
};

export default authorization;
