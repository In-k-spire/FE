"use client";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { Sidebar } from "@/components/sidebar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className="flex">
          <Sidebar>
            <Sidebar.Menu>HI</Sidebar.Menu>
          </Sidebar>
          <div className="bg-background/white flex flex-1 flex-col overflow-scroll">
            <div className="bg-white h-16 w-full shadow-sm"></div>
            <div className="flex-1 px-12 py-6">{children}</div>
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
