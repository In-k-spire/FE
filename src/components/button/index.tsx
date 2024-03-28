import BtnProps from "@/type/button";

export const BtnLayout = ({ children, size = "md", rounded = "rounded-none", filled = 'filled', color ,className,  ...props }: BtnProps) => {
  const SIZE = {
    sm : 'px-4  text-sm lg:text-base',
    md : 'px-8 text-base lg:text-lg',
    lg: 'px-12 text-lg lg:text-xl',
    xl : 'px-16 text-xl lg:text-2xl'
  }
  const COLOR = {
    filled : `text-white bg-${color} `,
    ghost : `text-${color} border bg-transparent border-${color} hover:bg-${color} hover:text-white`
  }


  return (
    <button
      className={`flex items-center ${rounded} max-w-full whitespace-nowrap gap-2 duration-300  py-2 justify-center shadow-lg ${COLOR[filled]} ${SIZE[size]} w-fit h-fit ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BtnLayout;
