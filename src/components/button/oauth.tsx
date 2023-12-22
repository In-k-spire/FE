import BtnProps from "@/type/button/index.type";

export const OAuthBtn = ({ children, ...props }: BtnProps) => {
  return (
    <button className="border-grayscale/20 h-16 w-16 rounded-full border">
      {children}
    </button>
  );
};
export default OAuthBtn;
