import Header from "@/components/header";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LibRegistry from "@/lib/registry";
import CommonMetadata from "@/constants/metadata";
import { Metadata } from "next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LibRegistry>
      <html lang="en">
        <body className="relative flex flex-col  bg-background/white">
          <Header>
            <Header.Menu link="/">홈</Header.Menu>
            <Header.Menu link="/category">독후감 작성</Header.Menu>
            <Header.Menu link="/stat">통계</Header.Menu>
          </Header>
          <div
            id="layout"
            className="w-full flex-1 overflow-auto px-4 py-6 sm:px-8 md:px-16 md:py-12 lg:px-28 xl:px-36 "
          >
            {children}
          </div>
          <ToastContainer closeOnClick rtl={false} position="bottom-right" />
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </html>
    </LibRegistry>
  );
}

export const metadata: Metadata = {
  title: "Inkspire",
  ...CommonMetadata,
};
