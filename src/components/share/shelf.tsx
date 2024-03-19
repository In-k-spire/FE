export const Shelf = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="border-r-shelfColor  triangle absolute left-0 -translate-x-full border-l-[transparent]" />
      <div className="bg-shelfColor custom-shadow h-12 w-full"></div>
      <div className="border-l-shelfColor  triangle absolute right-0 translate-x-full  border-r-[transparent]" />
      <div className=" h-4 w-[calc(100%+6.5rem)] rounded-full bg-[#e0dac1] "></div>
    </div>
  );
};
