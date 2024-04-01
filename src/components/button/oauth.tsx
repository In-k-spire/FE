import BtnProps from "@/type/button";

export const OAuthBtn = ({ children,color, ...props }: BtnProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`flex h-12 w-12  items-center justify-center rounded-full border border-grayscale/20 lg:h-14 lg:w-14  xl:h-16 xl:w-16 bg-${color}`}
    >
      {children}
    </button>
  );
};
export default OAuthBtn;
