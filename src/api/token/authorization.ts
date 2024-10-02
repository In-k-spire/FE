import { Storage } from "../storage/storage";

const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem("accessToken")}`,
    },
  };
};

export default authorization;
