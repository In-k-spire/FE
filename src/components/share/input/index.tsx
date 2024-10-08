import { InputProps } from "@/type/input";

export const InputLayout = ({
  sizes = "md",
  placeholder,

  className,
  ...props
}: InputProps) => {
  const SIZES = {
    full: "w-full lg:h-12 h-10",
    sm: "h-8 w-16 lg:h-10 lg:w-32 text-sm",
    md: "h-10 w-32 lg:h-12 lg:w-48 text-base",
    lg: "h-12 w-48 lg:h-14 lg:w-64 text-lg",
    xl: "h-14 w-64 lg:h-16 lg:w-[20rem] text-xl",
  };

  return (
    <input
      {...props}
      placeholder={placeholder}
      className={`p-4 outline-none ${SIZES[sizes]} ${className}`}
    />
  );
};
