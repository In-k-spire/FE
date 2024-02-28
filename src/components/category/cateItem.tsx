const CateItem = ({ title }: { title: string }) => {
  return (
    <div className="category w-fit cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap break-all text-4xl font-thin text-grayscale/40 duration-300 hover:text-primary">
      {title}
    </div>
  );
};

export default CateItem;
