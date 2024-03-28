const HeaderMain = ({ children }: { children: React.ReactNode }) => {

  return (
    <div
      className="flex h-16 w-full items-center px-12 md:px-20 lg:px-28 xl:px-36 bg-white"
    >
      <div className="flex items-center gap-8">{children}</div>
    </div>
  );
};

export default HeaderMain;
