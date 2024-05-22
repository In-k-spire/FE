export const InfoItem = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="flex items-center">
      <span className="w-24 text-lg font-semibold">{title}</span>
      <span>{value}</span>
    </div>
  );
};
