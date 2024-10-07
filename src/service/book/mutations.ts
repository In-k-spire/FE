import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setBook, setReview } from "./api";
import { BookReviewType, BookType } from "@/type/book";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useBookMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: ({
      book,
      categoryId,
    }: {
      book?: BookType;
      categoryId: number;
    }) => setBook(categoryId, book),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      router.push("/category");
      toast.success("책 추가 성공!");
    },
  });
  return { bookMutate: mutate };
};

export const useBookReviewMutation = (id: number) => {
  const queryClient = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: (review: BookReviewType) => setReview(id, review),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review", id] });
      toast.success("리뷰 추가 성공!");
    },
  });

  return { reviewMutate: mutate };
};
