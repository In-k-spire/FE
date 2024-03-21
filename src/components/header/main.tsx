import useScroll from "@/hooks/useScroll";

const HeaderMain = ({ children }: { children: React.ReactNode }) => {
  const { y } = useScroll();

  return (
    <div
      className={`flex h-16 w-full items-center px-12 md:px-20 lg:px-28 xl:px-36 ${
        y >= 300 ? "none" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-8">{children}</div>
    </div>
  );
};

export default HeaderMain;
