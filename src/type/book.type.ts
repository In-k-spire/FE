export interface BookProps {
  [prop: string]: string;
}

export interface BookCoverProps extends Partial<BookProps> {}
