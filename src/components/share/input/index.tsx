import { InputProps } from "@/type/input";

export const InputLayout = ({
  size = "md",
  placeholder,
  shadow = "shadow-md",
  className,
}: InputProps) => {
  const SIZE = {
    sm: "h-8 w-16 lg:h-10 lg:w-32 text-sm",
    md: "h-10 w-32 lg:h-12 lg:w-48 text-base",
    lg: "h-12 w-48 lg:h-14 lg:w-64 text-lg",
    xl: "h-14 w-64 lg:h-16 lg:w-[20rem] text-xl",
  };
  return (
    <input
      placeholder={placeholder}
      className={`rounded-md p-4 ${shadow} outline-none ${SIZE[size]} ${className}`}
    />
  );
};
