import Link from "next/link";
import FormatedTitle from "@/utils/separateTitle";
const CateItem = ({ title }: { title: string }) => {
  const formatTitle = FormatedTitle(title);
  return (
    <Link
      href={`/report/2/${formatTitle}`}
      className="h-fit w-fit cursor-pointer whitespace-nowrap text-4xl font-thin text-grayscale/40 duration-300 hover:text-primary"
    >
      {formatTitle}
    </Link>
  );
};

export default CateItem;
