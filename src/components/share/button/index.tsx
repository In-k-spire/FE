import BtnProps from "@/type/button";
import Link from "next/link";

export const BtnLayout = ({
  children,
  size = "md",
  rounded = "rounded-none",
  filled = "filled",
  color,
  className,
  href = "",
  ...props
}: BtnProps) => {
  const SIZE = {
    sm: "px-4  text-sm lg:text-base",
    md: "px-8 text-base lg:text-lg",
    lg: "px-12 text-lg lg:text-xl",
    xl: "px-16 text-xl lg:text-2xl",
  };
  const COLOR = {
    filled: `text-white bg-${color} `,
    ghost: `text-${color} border bg-transparent border-${color} hover:bg-${color} hover:text-white`,
  };

  return (
    <Link href={href}>
      <button
        className={`flex ${
          props.disabled ? "pointer-events-none opacity-50" : "opacity-100"
        } items-center ${rounded} max-w-full justify-center gap-2 whitespace-nowrap  py-2 shadow-lg duration-300 ${
          COLOR[filled]
        } ${SIZE[size]} h-fit w-fit ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default BtnLayout;
