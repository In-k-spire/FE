import { GetFirstRoute } from "@/utils/getFirstRoute";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`text-black hover:text-primary text-base duration-300 md:text-lg xl:text-2xl ${link === '/' + GetFirstRoute(pathname) ? 'text-primary' : 'text-black'}`}
    >
      {children}
    </Link>
  );
};

export default HeaderMenu;
