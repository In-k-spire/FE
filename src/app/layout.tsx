"use client";
import "./globals.css";
import { RecoilRoot } from "recoil";
import SideBar from "../components/sidebar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <RecoilRoot>
          <SideBar />
          <div className="flex flex-1 flex-col overflow-scroll">
            <div className="h-16 w-full shadow-sm"></div>
            <div className="px-6">{children}</div>
          </div>
        </RecoilRoot>
      </body>
    </html>
  );
}
