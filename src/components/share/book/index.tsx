import { BookProps } from "@/type/book";
import Image from "next/image";

const BookLayout = ({ image, sizes = "md", className }: BookProps) => {
  const SIZES = {
    full: "w-full h-full",
    xs: "w-12 h-16",
    sm: "w-24 h-32 lg:w-32 lg:h-48",
    md: "w-40 h-56 lg:w-48 lg:h-64",
    lg: "w-56 h-80 lg:w-64 lg:h-[22rem]",
    xl: "w-72 h-[25rem] lg:w-80 lg:h-[28rem]",
  };

  return (
    <div
      className={`${SIZES[sizes]} relative shrink-0 overflow-hidden rounded-lg shadow-2xl ${className}`}
    >
      <Image
        alt="책"
        src={image}
        loading="eager"
        sizes="100vw"
        fill
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        placeholder="blur"
      />
    </div>
  );
};

export default BookLayout;
