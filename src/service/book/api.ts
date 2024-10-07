import { server } from "@/api/instance/instance";
import authorization from "@/api/token/authorization";
import { BookReviewType, BookType } from "@/type/book";

export const getBook = async (id: number) => {
  const { data } = await server.get(`/book/${id}`, authorization());
  return data;
};

export const setBook = async (categoryId: number, book?: BookType) => {
  if (!book) return;
  const { author, description, image, link, publisher, title } = book;
  await server.post(
    "/book",
    {
      author: author,
      description: description,
      image: image,
      link: link,
      publisher: publisher,
      title: title,
      categoryId: categoryId,
    },
    authorization(),
  );
};

export const getReview = async (id: number) => {
  const { data } = await server.get(`/review/${id}`, authorization());
  return data;
};

export const setReview = async (id: number, review: BookReviewType) => {
  await server.post(`/review`, { ...review, bookId: id }, authorization());
};

export const removeReview = async (reviewId?: number) => {
  await server.delete(`/review/${reviewId}`, authorization());
};

export const editReview = async (props: {
  id?: number;
  review: BookReviewType;
}) => {
  const { id, review } = props;
  await server.put(`/review/${id}`, { ...review }, authorization());
};
