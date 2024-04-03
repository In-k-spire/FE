"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react"
import { RecoilRoot } from "recoil";
const LibRegistry = ({children} : {children : ReactNode}) => {
    const queryClient = new QueryClient()
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </RecoilRoot>
    )
}


export default LibRegistry;