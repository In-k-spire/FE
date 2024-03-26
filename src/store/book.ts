import { BookType } from "@/type/book";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// const defaultValue: BookType = {
//   title: "",
//   image: "",
//   author: "",
//   discount: "",
//   publisher: "",
//   description: "",
// };

// export const bookAtomState = atom<BookType>({
//   default: defaultValue,
//   key: "book",
//   effects_UNSTABLE: [persistAtom],
// });
