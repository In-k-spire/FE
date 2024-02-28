import { BookProps } from "@/type/book.type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const defaultValue: BookProps = {
  title: "",
  image: "",
  author: "",
  discount: "",
  publisher: "",
  description: "",
};

export const bookAtomState = atom<BookProps>({
  default: defaultValue,
  key: "book",
  effects_UNSTABLE: [persistAtom],
});
