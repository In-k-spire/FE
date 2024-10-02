import { CommonProps } from "../common";

export interface BookType {
  title: string;
  link: string;
  image: string;
  author: string;
  publisher: string;
  description: string;
  id?: number;
}

export interface BookProps extends Omit<CommonProps, "sizes"> {
  image: string;
  sizes?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface BookReviewType {
  oneLineReview: string;
  content: string;
  lastModifiedAt?: string;
}
