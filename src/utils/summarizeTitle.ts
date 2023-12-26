const SummarizeTitle = (title: string) => {
  const idx = title.indexOf("(");

  if (idx === -1) return title;

  return title.substring(0, idx);
};

export default SummarizeTitle;
