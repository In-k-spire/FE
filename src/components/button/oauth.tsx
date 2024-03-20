import BtnProps from "@/type/button/index.type";

export const OAuthBtn = ({ children, className, ...props }: BtnProps) => {
  return (
    <button
      className={`flex h-12 w-12  items-center justify-center rounded-full border border-grayscale/20 lg:h-14 lg:w-14  xl:h-20 xl:w-20 ${className}`}
    >
      {children}
    </button>
  );
};
export default OAuthBtn;
