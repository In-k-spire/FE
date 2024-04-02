import axios from "axios";

export const server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 15000,
});

export const naver = axios.create({
  baseURL: "/naver",
  timeout: 15000,
  headers: {
    "X-Naver-Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID,
    "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_CLIENT_SECRET,
  },
});
