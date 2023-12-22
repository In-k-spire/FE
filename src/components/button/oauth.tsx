import BtnProps from "@/type/button/index.type";

export const OAuthBtn = ({ children, className, ...props }: BtnProps) => {
  return (
    <button
      className={`border-grayscale/20 flex h-12 w-12 items-center justify-center rounded-full border ${className}`}
    >
      {children}
    </button>
  );
};
export default OAuthBtn;
