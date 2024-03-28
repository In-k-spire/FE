import useSideBar from "@/hooks/useSideBar";
import Link from "next/link";

const HeaderMenu = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {

  return (
    <Link
      href={link}
      className="
        text-black hover:text-primary text-base duration-300 md:text-lg xl:text-2xl"
    >
      {children}
    </Link>
  );
};

export default HeaderMenu;
