import { BookType } from "../book";

export interface CategoryType {
  name: string;
  id: number;
  bookList: BookType[];
}
