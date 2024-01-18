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
  console.log(children);
  return (
    <Link
      href={link}
      className={`${
        page == link
          ? "font-semibold text-primary"
          : "text-black hover:font-semibold hover:text-primary"
      } text-lg duration-300`}
      onClick={() => changePage(link)}
    >
      {children}
    </Link>
  );
};

export default HeaderMenu;
