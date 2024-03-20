"use client";
import Header from "@/components/header";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className="flex flex-col bg-background/white">
            <Header>
              <Header.Menu link="/">홈</Header.Menu>
              <Header.Menu link="/report">독후감 작성</Header.Menu>
              <Header.DropDown text="통계">
                <Header.Menu link="">주간 통계 확인</Header.Menu>
                <Header.Menu link="">월간 통계 확인</Header.Menu>
              </Header.DropDown>
            </Header>
            <div
              id="layout"
              className="flex w-full flex-1 overflow-auto p-12 md:px-20 lg:px-28 xl:px-36 "
            >
              {children}
            </div>
          </body>
        </html>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
