export interface BookProps {
  link: string;
  title: string;
  image: string;
  author: string;
  discount: string;
  publisher: string;
  description: string;
}

export interface BookCoverProps extends Partial<BookProps> {}
