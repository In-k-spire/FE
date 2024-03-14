import BtnProps from "@/type/button/index.type";

export const OAuthBtn = ({ children, className, ...props }: BtnProps) => {
  return (
    <button
      className={`flex h-20 w-20 items-center justify-center rounded-full border border-grayscale/20 ${className}`}
    >
      {children}
    </button>
  );
};
export default OAuthBtn;
