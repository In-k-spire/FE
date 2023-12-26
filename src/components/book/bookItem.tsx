import Image from "next/image";

const BookLayout = ({ image }: { image: string }) => {
  return (
    <div className="h-[16rem] w-[12rem]">
      <Image
        alt=""
        src={image}
        width={0}
        height={0}
        loading="eager"
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
};

export default BookLayout;
