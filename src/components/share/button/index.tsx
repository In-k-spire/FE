import BtnProps from "@/type/button";
import Link from "next/link";

export const BtnLayout = ({
  children,
  sizes = "md",
  rounded = "rounded-none",
  filled = "filled",
  color,
  shadow,
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
  const COLOR = {
    filled: `text-white bg-${color} hover:opacity-80 border-${color} border `,
    ghost: `text-${color} border bg-transparent border-${color} hover:bg-${color} hover:text-white`,
  };

  return (
    <Link
      href={href}
      className={`${className} ${shadow}  ${
        props.disabled ? "pointer-events-none opacity-50" : "opacity-100"
      } ${rounded} flex max-w-full justify-center  py-2 shadow-lg duration-300 ${
        COLOR[filled]
      } ${SIZES[sizes]} h-fit w-fit `}
    >
      <button
        className="flex items-center justify-center   gap-2 whitespace-nowrap "
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default BtnLayout;
