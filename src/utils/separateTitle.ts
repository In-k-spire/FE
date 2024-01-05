const SeparateTitle = (title: string) => {
  const startIdx = title.indexOf("(");
  const endIdx = title.indexOf(")");
  if (startIdx === -1 || endIdx === -1) return {};
  const mainTitle = title.substring(0, startIdx);
  const subTitle = title.substring(startIdx + 1, endIdx);
  return { mainTitle, subTitle };
};

export default SeparateTitle;
