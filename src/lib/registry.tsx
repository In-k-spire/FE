"use client";
import useApiError from "@/hooks/useApiError";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
const LibRegistry = ({ children }: { children: ReactNode }) => {
  const { handleError } = useApiError();
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        if (axios.isAxiosError(error)) handleError(error);
      },
    }),
    defaultOptions: {
      mutations: {
        onError: (error) => {
          if (axios.isAxiosError(error)) handleError(error);
        },
      },
    },
  });
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
};

export default LibRegistry;
