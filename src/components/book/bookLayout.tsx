import Image from "next/image";

const BookLayout = ({
  image,
  width,
  heigth,
  className,
}: {
  image: string;
  width: string;
  heigth: string;
  className?: string;
}) => {
  return (
    <div className={`${width} ${heigth} ${className} relative`}>
      <Image alt="책" src={image} fill />
    </div>
  );
};

export default BookLayout;
