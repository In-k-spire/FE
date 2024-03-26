import BtnProps from "@/type/button/index.type";

export const BtnLayout = ({ children, className, ...props }: BtnProps) => {
  return (
    <button
      className={`flex items-center justify-center rounded-md border border-grayscale/20 px-4 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BtnLayout;
