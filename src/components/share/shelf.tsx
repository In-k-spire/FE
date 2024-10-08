export const Shelf = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="triangle  absolute left-0 -translate-x-full border-l-[transparent] border-r-shelfColor" />
      <div className="custom-shadow h-6 w-full bg-shelfColor md:h-8 lg:h-10 2xl:h-12" />
      <div className="triangle  absolute right-0 translate-x-full border-l-shelfColor  border-r-[transparent]" />
      <div className=" h-4  w-[calc(100%+3.5rem)] rounded-full bg-[#e0dac1] md:w-[calc(100%+4.5rem)] lg:w-[calc(100%+5.5rem)] 2xl:w-[calc(100%+6.5rem)] " />
    </div>
  );
};
