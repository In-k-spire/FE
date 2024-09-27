import { CommonProps } from "../common";

export interface BookType {
  title: string;
  link: string;
  image: string;
  author: string;
  discount: string;
  publisher: string;
  pubdate: string;
  isbn: string;
  description: string;
}

export interface BookProps extends Omit<CommonProps, "sizes"> {
  image: string;
  sizes?: "xs" | "sm" | "md" | "lg" | "xl";
}
