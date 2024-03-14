import useSideBar from "@/hooks/useSideBar";
import Link from "next/link";

const HeaderMenu = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  const { page, changePage } = useSideBar();

  return (
    <Link
      href={link}
      className={`${
        page == link ? "text-primary" : "text-black hover:text-primary"
      } text-2xl duration-300`}
      onClick={() => changePage(link)}
    >
      {children}
    </Link>
  );
};

export default HeaderMenu;
