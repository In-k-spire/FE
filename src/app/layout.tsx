import Header from "@/components/header";
import "./globals.css";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LibRegistry from "@/lib/registry";

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
            <Header.Menu link="/report">독후감 작성</Header.Menu>
            <Header.Menu link="/stat">통계</Header.Menu>
          </Header>
          <div
            id="layout"
            className="w-full flex-1 overflow-auto p-12 md:px-20 lg:px-28 xl:px-36 "
          >
            {children}
          </div>
          <ToastContainer closeOnClick rtl={false} position="bottom-right" />
        </body>
      </html>
    </LibRegistry>
  );
}
