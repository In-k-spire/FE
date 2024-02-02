import useScroll from "@/hooks/useScroll";

const HeaderMain = ({ children }: { children: React.ReactNode }) => {
  const { y } = useScroll();

  return (
    <div
      className={`flex min-h-[4rem] w-full items-center  px-24 ${
        y >= 300 ? "none" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-8">{children}</div>
    </div>
  );
};

export default HeaderMain;
