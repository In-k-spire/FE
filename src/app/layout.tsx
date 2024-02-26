"use client";
import Header from "@/components/header";
import "./globals.css";
import { RecoilRoot } from "recoil";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AnimatePresence
    //   initial={false}
    //   onExitComplete={() => window.scrollTo(0, 0)}
    // >
    <RecoilRoot>
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
          <div id="layout" className="h-full flex-1">
            {children}
          </div>
        </body>
      </html>
    </RecoilRoot>
    // </AnimatePresence>
  );
}
