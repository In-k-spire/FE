const FormatedTitle = (title: string) => {
  const idx = title.indexOf("(");
  return title.substring(0, idx === -1 ? title.length : idx);
};

export default FormatedTitle;
