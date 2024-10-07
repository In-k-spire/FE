import BtnProps from "@/type/button";
import Link from "next/link";

export const BtnLayout = ({
  children,
  sizes = "md",
  className,
  href = "",
  ...props
}: BtnProps) => {
  const SIZES = {
    full: "w-full px-8 text-base lg:text-lg",
    sm: "px-4  text-sm lg:text-base",
    md: "px-8 text-base lg:text-lg",
    lg: "px-12 text-lg lg:text-xl",
    xl: "px-16 text-xl lg:text-2xl",
  };

  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`${className} ${
            props.disabled ? "pointer-events-none opacity-50" : "opacity-100"
          }
          ${SIZES[sizes]}
          flex py-2 duration-200
          `}
        >
          <button
            className="flex items-center justify-center  gap-2 whitespace-nowrap "
            {...props}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          className={`${SIZES[sizes]} ${className} ${
            props.disabled ? "pointer-events-none opacity-50" : "opacity-100"
          } flex items-center justify-center gap-2  whitespace-nowrap py-2`}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default BtnLayout;
