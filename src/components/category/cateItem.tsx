const CateItem = ({ title }: { title: string }) => {
  return (
    <div className="category text-grayscale/40 w-fit cursor-pointer text-6xl font-thin duration-300 hover:text-primary">
      {title}
    </div>
  );
};

export default CateItem;
