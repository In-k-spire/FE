import BtnProps from "@/type/button/index.type";

export const BtnLayout = ({ children, className, ...props }: BtnProps) => {
  return (
    <button
      className={`border-grayscale/20 flex min-h-[1rem] min-w-[4rem] items-center justify-center rounded-md border px-4 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BtnLayout;
